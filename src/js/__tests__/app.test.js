import Character from '../app';

// const exampleBowman = {
//   name: 'John',
//   type: 'Bowman',
//   health: 100,
//   level: 1,
//   attack: 25,
//   defence: 25
// };

test.each([
  [123456, 'Bowman'],
  [null, 'Bowman'],
  [undefined, 'Bowman'],
  ['John', 123456],
  ['John', null],
  ['John', undefined],
])('should not accept name %s and type %i that is not a string', (name, type) => {
  expect(() => {new Character(name, type)}).toThrow(Error);
});

test.each([
  ['J', 'Bowman'],
  ['John James Smidt' , 'Bowman'],
])('should not accept a name %s with less than two characters and more than ten characters', (name, type) => {
  expect(() => {new Character(name, type)}).toThrow(Error);
});

test.each([
  ['John', 'notBowman'],
  ['John', 'notSwordsman'],
  ['John', 'notMagician'],
  ['John', 'notDaemon'],
  ['John', 'notUndead'],
  ['John', 'notZombie'],
])('%s is valid but should not accept a type %i if this is not one of some accepted value', (name, type) => {
  expect(() => {new Character(name, type)}).toThrow(Error);
});

test.each([
  ['John', 'Bowman'],
  ['John' , 'Swordsman'],
  ['John' , 'Magician'],
  ['John' , 'Daemon'],
  ['John' , 'Undead'],
  ['John' , 'Zombie'],
])('should create class with %s name and %i type', (name, type) => {
  const character = new Character(name, type);
  expect(character).toEqual(() => new Character(name, type));
});
