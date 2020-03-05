const replaceDotsAndCommas = (string, char) =>
    char ? string.replace(/[,.]/g, char) : string

const valueEmpty = (value) =>
    value == null || value == undefined || value == ''

const objectEmpty = (value) =>
    Object.entries(value).length === 0 && value.constructor === Object

const stringIsNumber = (value) =>
    !isNaN(value)

const FormatUtils = {
    replaceDotsAndCommas: replaceDotsAndCommas,
    valueEmpty: valueEmpty,
    objectEmpty: objectEmpty,
    stringIsNumber: stringIsNumber,
}

export default FormatUtils
