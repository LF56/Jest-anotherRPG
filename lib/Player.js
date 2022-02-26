const Potion = require('../lib/Potion');
this.inventory = [new Potion('health'), new Potion()];

Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
  };
  