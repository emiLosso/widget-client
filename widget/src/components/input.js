import { Component } from 'preact';

import FormatUtils from '../utils/formatUtils'


const InputError = ({error, touched}) => {
    return error && touched
        ? <span className="--error">{ error }</span>
        : null
}

const LabelError = ({errors, touched, focused}) => {
    if (focused) {
        return null
    }

    const errorList = errors.map(error =>
        <InputError
            key={ error }
            error={ error }
            touched={ touched }
        />
    )

    return errorList
}

const Label = ({label}) => label
    ? <label>{ label }</label>
    : null

const Input = (props) => props.numberFormat
    ? <NumberFormat
        decimalScale={ props.decimalScale }
        id={ props.id }
        className={ props.inputClassName ? props.inputClassName : '--black' }
        placeholder={ props.placeholder }
        type={ props.inputType }
        prefix={ props.prefix || "" }
        value={ props.value }
        disabled={ props.disabled }
        maxLength={ props.maxLength }
        onChange={ (e) => props.onChange ? props.onChange(e) : null }
        name={ props.name }
        onFocus={ props.onTouch }
        decimalSeparator={ props.decimalSeparator ? props.decimalSeparator : "." }
        allowNegative={ false }
        isNumericString={ true }
        onBlur={ props.onBlur }
    />
    : <input
        className={ props.inputClassName ? props.inputClassName : '--black' }
        placeholder={ props.placeholder }
        type={ props.inputType }
        value={ props.value }
        disabled={ props.disabled }
        maxLength={ props.maxLength }
        onChange={ (e) => props.onChange ? props.onChange(e) : null }
        name={ props.name }
        onFocus={ props.onTouch }
        onBlur={ props.onBlur }
    />

class RPInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            touched: false,
            focus: false
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        if (this.props.numberFormat) {
            e.target.value = e.target.value.replace(",", ".")
        }
        this.props.onChange(e)
    }

    render() {
        let error = null

        if (this.props.error) {
            if (Array.isArray(this.props.error)) {
                error = this.props.error
            } else {
                error = [this.props.error]
            }
        }

        let hasError = ''

        if (!this.state.focus) {
            if (error && error.length > 0 && this.state.touched) {
                hasError = '--error'
            } else {
                if (!FormatUtils.valueEmpty(this.props.value)) {
                    hasError = '--success'
                }
            }
        }

        return (
            <div className={ `input ${this.props.className} ${hasError}` }>

                <Input
                    { ...this.props }
                    id={ this.props.id }
                    onChange={ this.onChange}
                    onTouch={ () => this.setState({
                        touched: true,
                        focus: true
                    }) }
                    onBlur={ () => this.setState({focus: false}) }
                />
                <Label label={ this.props.label } />
                { this.props.span ? <span>{this.props.span}</span> : null }
                <LabelError
                    errors={ error ? error : [] }
                    touched={ this.state.touched }
                    focused={ this.state.focus }
                />
                { this.props.children }
            </div>
        )
    }
}

export default RPInput
