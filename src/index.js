import UserController from './controllers/UserController.js';
import ReportController from './controllers/ReportController.js';
import { notifyEvent } from './controllers/NotificationController.js';
import QuickSort from './strategies/QuickSort.js';
import MergeSort from './strategies/MergeSort.js';

// Dados iniciais de usuários
const users = [
    { name: "Alice", age: 25, registered: "2023-09-10" },
    { name: "Bob", age: 30, registered: "2023-05-15" },
    { name: "Charlie", age: 20, registered: "2024-01-01" },
];

// Instância do controlador de usuários
const userController = new UserController(users);

// Exemplo de ordenação
console.log("Usuários ordenados por idade usando BubbleSort (default):");
console.log(userController.getSortedUsers());

// Alterar a estratégia para QuickSort
userController.setSortStrategy(new QuickSort());
console.log("Usuários ordenados por idade usando QuickSort:");
console.log(userController.getSortedUsers());

// Alterar a estratégia para MergeSort
userController.setSortStrategy(new MergeSort());
console.log("Usuários ordenados por idade usando MergeSort:");
console.log(userController.getSortedUsers());

// Criar relatório
const reportController = new ReportController(userController.users);
const report = reportController.generateReport();
console.log("Relatório Gerado:");
console.log(report);

// Enviar notificação
notifyEvent({ message: "Novo relatório foi gerado." });
