import Validator from '../utils/Validator.js';

class User {
    constructor(name, age, registered) {
        if (!Validator.isNonEmptyString(name)) {
            throw new Error("Nome inválido.");
        }

        if (!Validator.isPositiveNumber(age)) {
            throw new Error("Idade inválida.");
        }

        this.name = name;
        this.age = age;
        this.registered = registered || new Date().toISOString();
    }
}

export default User;
