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
  })
  return res;
}

const sumReduce = (...rest) => {
  return rest.reduce((Accamulator, value) => {
    return Accamulator + value;
  })
}

const sumArrow = (a, b) => a + b;

const square = (n) => n * n;

function bigSum() {
  let res = null;

  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}

const numbers = [1,3,6,76,7,5,32,3142,5653];
const numbers2 = [67,45,53,4534,3,43,444,5,66233,22];

const wtf = [ ...numbers, ...numbers2];
