const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
  
}
module.exports = Game;


Game.prototype.initializeGame = function() {

};
Game.prototype.battle = function() {
    if (this.isPlayerTurn) {
      // player prompts will go here
    } else {
      const damage = this.currentEnemy.getAttackValue();
      this.player.reduceHealth(damage);
  
      console.log(`You were attacked by the ${this.currentEnemy.name}`);
      console.log(this.player.getHealth());
    }
  };
