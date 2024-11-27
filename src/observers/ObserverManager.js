class ObserverManager {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(event) {
        this.observers.forEach(observer => observer.update(event));
    }
}

export default ObserverManager;
