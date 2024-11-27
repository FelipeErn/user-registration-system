import UserController from '../src/controllers/UserController.js';
import QuickSort from '../src/strategies/QuickSort.js';

const users = [34, 12, 5, 72, 55];
const userController = new UserController(users);

// Test default strategy (BubbleSort)
console.log("BubbleSort:", userController.getSortedUsers());

// Test QuickSort
userController.setSortStrategy(new QuickSort());
console.log("QuickSort:", userController.getSortedUsers());
