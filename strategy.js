const strategyModule = (function() {
  let strategy = {};

  return {
    exec() {
      strategy.exec();
    },
    changeStrategy(s) {
      strategy = s;
    }
  }
}());

function Strategy() {};
Strategy.prototype.exec = function() {};

function Strategy1() {};
Strategy1.prototype = Object.create(Strategy.prototype);
Strategy1.prototype.exec = function() {
  console.log('First behavior');
};

function Strategy2() {};
Strategy2.prototype = Object.create(Strategy.prototype);
Strategy2.prototype.exec = function() {
  console.log('Second behavior');
};

strategyModule.changeStrategy(new Strategy1());
strategyModule.exec(); // calling the same method we get different behaviors because of usage different strategy

strategyModule.changeStrategy(new Strategy2());
strategyModule.exec(); // calling the same method we get different behaviors because of usage different strategy