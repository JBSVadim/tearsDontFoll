"use strict";

function test() {
  console.log(this);
}

test();

const test2 = function () {
  console.log(this);
};

test2();

const test3 = () => {
  console.log(this);
};

test3();

const newsPaper = {
  title: "Holly shiet",
  articles: ["HEEEYYY", "Makerenaa", "Auch"],
  showArticles() {
    this.articles.forEach((currentArtucle, index) => {
      console.log(`${this.title} => ${index + 1}: ${currentArtucle}`);
    });
  },
};

newsPaper.showArticles();

function sum(a, b) {
  return a + b;
}

const summing = (...rest) => {
  let sumResult = null;
  for (let i = 0; i < rest.length; i++) {
    sumResult += rest[i];
  }
  return sumResult;
};

const summingTwo = (...rest) => {
  let res = null;
  rest.forEach((number) => {
    res += number;
  });
  return res;
};

const sumReduce = (...rest) => {
  return rest.reduce((Accamulator, value) => {
    return Accamulator + value;
  });
};

const sumArrow = (a, b) => a + b;

const square = (n) => n * n;

function bigSum() {
  let res = null;

  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}

const numbers = [1, 3, 6, 76, 7, 5, 32, 3142, 5653];
const numbers2 = [67, 45, 53, 4534, 3, 43, 444, 5, 66233, 22];

const wtf = [...numbers, ...numbers2];

function countDown(numb) {
  console.log(numb);
  if (numb > 0) {
    countDown(numb - 1);
  }
  return true;
}

const logRange = (min, max) => {
  if (min > max) {
    return false;
  }
  console.log(min);
  if (min < max) {
    logRange(min + 1, max);
  }
  return true;
};

const power = (num, exp) => {
  if (exp <= 1) {
    return num;
  }
  return num * power(num, exp - 1);
};
const factorial = (num) => {
  if (num <= 0) {
    return 1;
  }
  return factorial(num - 1) * num;
};

const doska = function (a, b) {
  let size = a * b;
  let i = 0;
  let result = '';
  while (i <= size) {
    i++;
    if (i % 2 === 1 && !(i % a === 0)) {
      (result += " ");
    }
    if (i % 2 === 0 && !(i % a === 0)) {
            (result += "#");
    }
    if (i % a === 0) {
      if (i % 2 === 1 && !(i === size)) {
        
         (result += " \n");
      }
      if (i % 2 === 0 && !(i === size)) {
        
         (result += "#\n");
      }
    }
    if (i === size) {
      if (i % 2 === 1) {
         (result += " ");
      }
      if (i % 2 === 0) {
        (result += "#");
      }
    }
  }
  return result;
};


const glasnoIskatelEpic10000 = function (str) {
  const smallsizeLettter = str.toLowerCase();
  const letterMostWantedList = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
    for (let i = 0; i < smallsizeLettter.length; i++) {
      if (letterMostWantedList.includes(smallsizeLettter[i])) {
        count++;
      }
    }
  return count;  
}