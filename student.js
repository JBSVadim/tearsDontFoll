function abraKadabra() {
  return [getMin(arguments), getMax(arguments), middleNumb(arguments)];
}

function getMin(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
function getMax(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function middleNumb(arr) {
  let total = arr[0];
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

function getRandom() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}

const users = [{}, {}, {}];

users.forEach(function addSubscribes(user) {
  user.isSubscrided = true;
});

console.log(users);

const nums = [1, 2, 4, 5, 6, 7, 8, 9];

this.some = function some(func) {
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

this.every = function every(func) {
  for (let i = 0; i < this.length; i++) {
    if (!func(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

this.filter = function filter(func) {
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
    }
  }
};

function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}

function User(first, last, age, email, isMale, isSubscrided = false) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.email = email;
  this.isMale = isMale;
  this.isSubscrided = isSubscrided;
  this.getFullName = UserProto;
}

function UserProto() {
  this.getFullName = function getFullName() {
    return `${this.firstName} ${this.lastName}`;
}}

getFullName.prototype = new UserProto;

function createRandomUsers(amount = 1) {
  const db = [];

  for (let i = 0; i < amount; i++) {
    const user = new User(
      `Name${i}`,
      `Surname${i}`,
      Math.floor(Math.random() * (99 - 1)) + 1,
      `email${i}@mail.com`,
      Math.random() > 0.5
    );
    db.push(user);
  }
  return db;
}

const usersr = createRandomUsers(10);
console.log(usersr);

const names = usersr.map(function (user) {
  return user.getFullName();
});

console.log(names);

const adultUsers = usersr.filter(function (user) {
  return user.age >= 18;
});

console.log(adultUsers)

const milfList = usersr.filter(function (user) {
    return user.age >= 18 && !user.isMail
    }
);

console.log(milfList);
