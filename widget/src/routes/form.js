import { Component } from 'preact';
import FormComponent from '../components/formComponent'
import { processCheckout } from '../actions/actions'
import FormValidations from '../utils/formValidations'
import queryString from 'query-string';


class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            amount: this.props.amount,
            crypto: this.props.crypto,
            address: this.props.address,
            style: this.props.style
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.canSend = this.canSend.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    canSend() {
        const validations = FormValidations.composeValidators([
            FormValidations.required(
                this.state.email,
                "email empty"
            ),
            FormValidations.required(
                this.state.amount,
                "amount empty"
            ),
            FormValidations.required(
                this.state.address,
                "address empty"
            ),
            FormValidations.email(
                this.state.email,
                "error format email"
            ),
            FormValidations.validateBTCAddress(
                this.state.address,
                "error btc/eth address"
            )
        ])
        return validations.length == 0
        // podria retornar un arreglo de errores para cada input
        console.log(validations, "validations")
    }

    submitForm() {
        processCheckout(
            this.state.amount,
            this.state.address,
            this.state.email,
            this.state.crypto
        ).then((res) => {
            if (res == "success"){
                // muestro mensaje ok
                // mandar a la pantalla que hizo anita de ok
                alert("ok")
            }
            else {
                // muestro mensaje de error
                alert("error")
            }
        })
    }

    render() {
        return (
            <div className="home">
                <FormComponent
                    amount= {this.state.amount}
                    crypto= {this.state.crypto}
                    address= {this.state.address}
                    email= {this.state.email}
                    handleInputChange= {this.handleInputChange}
                    canSend= {this.canSend}
                    submitForm= {this.submitForm}
                />
            </div>
        );
    }
}

export default FormContainer
