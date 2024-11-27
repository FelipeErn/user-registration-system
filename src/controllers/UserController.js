import BubbleSort from '../strategies/BubbleSort.js';
import QuickSort from '../strategies/QuickSort.js';

class UserController {
    constructor(users = []) {
        this.users = users;
        this.sortStrategy = new BubbleSort(); // Default strategy
    }

    setSortStrategy(strategy) {
        this.sortStrategy = strategy;
    }

    getSortedUsers() {
        return this.sortStrategy.sort(this.users);
    }
}

export default UserController;
