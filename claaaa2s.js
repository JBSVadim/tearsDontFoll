'use strict';

class Animal {
  constructor(name, amountOfLegs, type) {
    this.name = name;
    this.amountOfLegs = amountOfLegs;
    this.type = type;
  }

  get name() {
    return this._name;
  }

  set name(v) {
    if (typeof v === 'string') {
    this._name = v
  }}

  eat() {
    return `${this.name} is eating.`;
    
  }
  static isAnimail(obj) {
    return obj instanceof Animal;
  }

}

