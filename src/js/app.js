// TODO: write your code here
// import sum from './basic';

console.log('worked');

// console.log(sum([1, 2]));

/** ДЗ. Классы, наследование */
class Character {
  constructor(
    name, 
    type) {
      if (typeof name !== 'string' ||
      name.length < 2 || 
      name.length > 10) {
        throw new Error(`Ошибка. ${name} должно быть строкой длина которой не менее 2 символов и не более 10`);
      };

      if (typeof type !== 'string' ||
      type !== 'Bowman' &&
      type !== 'Swordsman' &&
      type !== 'Magician' &&
      type !== 'Daemon' &&
      type !== 'Undead' &&
      type !== 'Zombie') {
        throw new Error(`Ошибка. ${type} должен быть строкой и соответствовать одному из вариантов героев: Bowman, Swordsman, Magician, Daemon, Undead или Zombie`);
      };

      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;

      if (type === 'Bowman' || type === 'Undead') {
        this.attack = 25;
        this.defence = 25;
      };

      if (type === 'Swordsman' || type === 'Zombie') {
        this.attack = 40;
        this.defence = 10;
      };

      if (type === 'Magician' || type === 'Daemon') {
        this.attack = 10;
        this.defence = 40;
      };
  };
};

class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
  };
};

class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
  };
};

class Magician extends Character {
  constructor(name, type) {
    super(name, type);
  };
};

class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
  };
};

class Undead extends Character {
  constructor(name, type) {
    super(name, type);
  };
};

class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
  };
};
