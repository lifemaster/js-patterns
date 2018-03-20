// Observable
function Observable() {
  const observers = [];

  this.sendMessage = function(msg) {
    observers.forEach(observer => observer.notify(msg));
  }

  this.addObserver = function(observer) {
    observers.push(observer);
  }
}

// Observer
function Observer(behavior) {
  this.notify = function(msg) {
    behavior(msg);
  }
}

const observable = new Observable();

const observer1 = new Observer(msg => console.log(`Observer 1: ${msg}`));
const observer2 = new Observer(msg => console.log(`Observer 2: ${msg}`));

observable.addObserver(observer1);
observable.addObserver(observer2);

observable.sendMessage('Hello, world!');