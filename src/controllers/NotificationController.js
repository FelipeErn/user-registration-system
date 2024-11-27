import ObserverManager from '../observers/ObserverManager.js';
import ConsoleNotifier from '../observers/ConsoleNotifier.js';

const manager = new ObserverManager();
const consoleNotifier = new ConsoleNotifier();
manager.addObserver(consoleNotifier);

export const notifyEvent = (event) => {
    manager.notify(event);
};
