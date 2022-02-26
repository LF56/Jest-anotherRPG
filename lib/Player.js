const Potion = require('../lib/Potion');
this.inventory = [new Potion('health'), new Potion()];

Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
  };
Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;
  
    return Math.floor(Math.random() * (max - min) + min);
  };  