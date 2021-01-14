class User {
  constructor(name, surname, age, isBanned = false) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.isBanned = isBanned;
  }
}

class Admin extends User {
  constructor(name, surname, age) {
    super(name, surname, age, false);
    this.permission = permission;
  }

  ban(user) {
    user.isBanned = true;
  }

  unBan(user) {
    user.isBanned = false;
  }

  toggleBan(user) {
    if (user instanceof User) {
      user.isBanned = !user.isBanned;
      return;
    }
  }
}
/**------------------------------------------------------------------- */

class Squirrel {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  eat() {
    return `${this.name} is eating`;
  }
  climb() {
    return `${this.name} is climbing`;
  }
}

class FlyingSquerrel extends Squirrel {
  constructor(name, color, maxDistance) {
    super(name, color);
    this.maxDistance = maxDistance;
  }

  fly() {
    return `${Squirrel.name} is flying`;
  }

  flyRandom() {
    return `${Squirrel.name} ${Math.floor(
      Math.random() * (this.maxDistance - 1) + 1
    )}`;
  }
}

class MagickSquirrel extends FlyingSquerrel {
  constructor(name, color, maxDistance, songs) {
    super(name, color, maxDistance);
    this.songs = songs;
  }

  dance() {
    return `${this.name} is dancing squirrel`;
  }

  sing() {
    return `he sing such shit: ${this.songs.join(`, `)}`;
  }
}


const songs = ['aaaaaaaaaaaaaaaaaaaaaa', 'bararabaraaba', 'help, i need some body help'];
const mersi = new MagickSquirrel ('Pisten', 'dirty red', 6000, songs);


class Figure {
  constructor(name) {
    this.name = name;
  }
  getArea() {};
}

class Circle extends Figure{
  constructor(name, radius) {
    super(name);
    this.radius = radius
  }

  getArea() {
    return 2*Math.PI*this.radius;
  }
}

function getFigureArea(figure) {
  if(figure instanceof Figure) {
    return figure.getArea();
  }
  throw new TypeError();
}

const kruzochek = new Circle ('kruglyashok', 10);

const mySymbol = Symbol('aaaaa');
const mySymbol2 = Symbol('aaaaa');


const arr = [1,2,3,4,5,6];

for(const number of arr) {
  console.log(number)
}

function sum(...args) {
  let result = 0;
  for(const item of args) {
    return result += item;
  }
  return result
}