
function User(name,surName,age) {
  this.name = name;
  this.surName = name;
  this.age = age;

  
}

function UserProto () {
 this.getFullName = function () {
  return `${this.name} ${this.surName}`;
};
}

User.prototype = new UserProto();

const u = new User('test', 'keee', 20)
const u2 = new User('mama','aaaaaa', 21)

class UserClass {
  constructor(name, surName, age) {
    this.name = name;
    this.surName = surName;
    this.age = age;
  }

  getFullName() {
    return `${this.name} ${this.surName}`
  }

  isHeAdult() {
    if(this.age >= 18) {
      return true;
    } else {
      return false;
    }
  }

  isHeAdult2() {
    return this.age >= 18;
  }
}

const polzovotel = new UserClass ('Damn', 'Tears', 19);


const MIN_ZP = 6000/21;

class Worker {
  constructor(name, surName, daysAtWork = 0, cashPerDay = MIN_ZP, ) {
    this.name = name;
    this.surName = surName;
    this.cashPerDay = cashPerDay;
    this.daysAtWork = daysAtWork;
  }

  getMyMoney () {
    return this.cashPerDay*this.daysAtWork
  }
}

const robotyaga = new Worker('Tom', 'Sinyachkin', 15 , 25);

class Fuel {
  constructor(volume = 10, density = 0.9) {
    this.volume = volume;
    this.density = density;
  }

  getFuelWeight () {
    return this.volume * this.density
  }
}



class Auto {
  constructor(ownWeight,model,fuel) {
    this.ownWeight = ownWeight;
    this.model = model;
    this.fuel = fuel;
  }

  getFullWeight () {
    return this.ownWeight + this.fuel.getFuelWeight()
  }
}

const benzinchik = new Fuel(50);
const mashinka = new Auto (3000, 'drandulet', benzinchik)