import FormatUtils from './formatUtils'


const required = (value, string) => !FormatUtils.valueEmpty(value)
    ? null
    : string

const email = (value, string) =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
        ? null
        : string

const composeValidators = (validators) =>
    validators.reduce((result, validator) => {
        if (validator) result.push(validator)
        return result
    }, [])

const validateBTCAddress = (value, string) => (
    /^([13][a-km-zA-HJ-NP-Z1-9]{25,34}|bc1[ac-hj-np-zAC-HJ-NP-Z02-9]{11,71})$/.test(value)
        ? null
        : string
)

const validateERC20Address = (value, string) => (
    /^0x[a-fA-F0-9]{40}$/.test(value)
        ? null
        : string
)

const FormValidations = {
    required: required,
    email: email,
    composeValidators: composeValidators,
    validateBTCAddress: validateBTCAddress,
    validateERC20Address: validateERC20Address
}

export default FormValidations
