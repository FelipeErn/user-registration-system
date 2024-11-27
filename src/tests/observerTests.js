import ObserverManager from '../src/observers/ObserverManager.js';
import ConsoleNotifier from '../src/observers/ConsoleNotifier.js';
import EmailNotifier from '../src/observers/EmailNotifier.js';

// Instanciar gerenciador e observadores
const manager = new ObserverManager();
const consoleNotifier = new ConsoleNotifier();
const emailNotifier = new EmailNotifier();

// Adicionar observadores
manager.addObserver(consoleNotifier);
manager.addObserver(emailNotifier);

// Simular evento e notificar
manager.notify({ message: "Novo usuário registrado no sistema." });
manager.notify({ message: "Relatório foi gerado com sucesso." });
