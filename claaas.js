'use strict'
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
  constructor(name, surName, days = 0, rate = MIN_ZP, ) {
    
    this.name = name;
    this.surName = surName;
    this.days = days;
    this.rate = rate; //люди сами придумали что по совести с _ менять нельзя потому что все полетит к чертям
   
  }

  set days(day) {
    if(typeof day !== 'number') {
      throw new TypeError('nonononoo')
    }
    if (day < 0 || day > 31) {
      throw new RangeError();
    }
    return this._days = day;
  }

  get days() {
    return this._days;
  }

  set rate(newRate) {
    if(typeof newRate !== 'number') {
      throw new TypeError('Nononoonoooo');
    }
    if(newRate < 0) {
      throw new RangeError();
    }
    this._rate= newRate;
  }

  get rate() {
    return this._rate
  }

  getMyMoney () {
    return this._days*this._rate
  }
}

const robotyaga = new Worker('Tom', 'Sinyachkin', 15 , 25);

class Fuel {
  constructor(volume = 10, density = 0.9) {
    this.volume = volume;
    this.density = density;
  }

 
  get FuelWeight () {
    return this.volume * this.density
  }
}



class Auto {
  constructor(ownWeight,model,fuel) {
    this.ownWeight = ownWeight;
    this.model = model;
    this.fuel = fuel;
  }

  get FullWeight () {
    return this.ownWeight + this.fuel.getFuelWeight
  }
}

const benzinchik = new Fuel(50);
const mashinka = new Auto (3000, 'drandulet', benzinchik)

class Friend {
  constructor(name,appleAmount = 0, friend) {
    this.name = name;
    this.appleAmount = appleAmount;
    this.friend = friend;
  }

  getAppelAmount () {
    return this.appleAmount + this.friend.appleAmount
  }
}

const f1 = new Friend ('Potomuchto', 5, );
const f2 = new Friend ('AAAAAAAAAAAAA', 5, f1 );
f1.friend = f2;