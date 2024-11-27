class ReportController {
    constructor(users) {
        if (!Array.isArray(users)) {
            throw new Error("Usuários devem ser um array.");
        }
        this.users = users;
    }

    generateReport() {
        return {
            totalUsers: this.users.length,
            youngest: this.getYoungestUser(),
            oldest: this.getOldestUser(),
            registeredToday: this.getRegisteredToday(),
        };
    }

    getYoungestUser() {
        return this.users.reduce((youngest, user) => 
            user.age < youngest.age ? user : youngest, this.users[0]);
    }

    getOldestUser() {
        return this.users.reduce((oldest, user) => 
            user.age > oldest.age ? user : oldest, this.users[0]);
    }

    getRegisteredToday() {
        const today = new Date().toISOString().split("T")[0];
        return this.users.filter(user => user.registered.startsWith(today));
    }
}

export default ReportController;
