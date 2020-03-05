import { h, Component } from 'preact';

import RPInput from '../components/input'
import Button from '../components/button'
import FormValidations from '../utils/formValidations'


const FormComponent = (props) => (
    <div className="widget__form">
        <div className="widget__form__title">
            Icon
        </div>

        <div className="widget__form__container">
            <RPInput
                id="widget_input"
                placeholder="user@mail.com"
                name={'email'}
                key={'email'}
                inputType="text"
                label={"Email"}
                value={props.email}
                error={
                    FormValidations.composeValidators([
                        FormValidations.required(
                            props.email,
                            "email empty "
                        ),
                        FormValidations.email(
                            props.email,
                            "error format email"
                        )
                    ])
                }
                onChange={props.handleInputChange}
            />
            <RPInput
                id="widget_input"
                name={'amount'}
                key={'amount'}
                inputType="text"
                label={""}
                value={props.amount}
                error={
                    FormValidations.composeValidators([
                        FormValidations.required(
                            props.amount,
                            "amount empty"
                        )
                    ])
                }
                onChange={props.handleInputChange}
            />
            <RPInput
                id="widget_input"
                name={'address'}
                key={'address'}
                inputType="text"
                label={"Direccion de Bitcoin"}
                value={props.address}
                error={
                    FormValidations.composeValidators([
                        FormValidations.required(
                            props.address,
                            "address empty"
                        ),
                        FormValidations.validateBTCAddress(
                            props.address,
                            "error btc/eth address"
                        )
                    ])
                }
                onChange={props.handleInputChange}
            />

            <Button
                canSend = { props.canSend }
                submitForm = { props.submitForm }
            />
        </div>
    </div>
);

export default FormComponent;
