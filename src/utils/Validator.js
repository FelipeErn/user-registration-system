class Validator {
    static isNonEmptyString(value) {
        return typeof value === "string" && value.trim().length > 0;
    }

    static isPositiveNumber(value) {
        return typeof value === "number" && value > 0;
    }
}

export default Validator;
