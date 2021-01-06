/* const assOnFire = 'local ass';

if (assOnFire) {
  const useSomeWater = 'activate local protaction from fire';

  console.log(assOnFire);
  console.log(useSomeWater);

  if (assOnFire) {
    const useSomeWater = 'its not working';
    const anotherHelp = 'Give up son, u burned up';
    console.log(useSomeWater);
    console.log(anotherHelp);
    
  }
}

const userNumber = +prompt('Enter the number');

if (isNaN(userNumber)) {
  console.log('Unvalid number')
} else if (userNumber % 2 === 0) {
  console.log('Yes u cand cut in for 2 pieces') } else { 
    console.log('u cant do this')
} */

//const userInput = prompt('Decide what u want: \n1-tea \n2-coffee \n3-capuchino')

/*switch(userInput) {
  case '1': {
    console.log('u decide to take Tea');
    break;
  }
  case '2': {
    console.log('u decide to take Coffee');
    break;
  }
  case '3': {
    console.log('u decide to take Capuchino');
    break;
  }
  default: {
    console.log('we dont have it')
  }
} */

/* const userNumber1 = +prompt('Decide number')
const userNumber2 = +prompt('Decide number')
const userChooseWhatToDo = prompt('Choose between - + / *');

if(isNaN == userNumber1) {
  console.log('u write not numbers')
} else if(isNaN == userNumber2){
  console.log('u write not number') 
} else {
    switch(userChooseWhatToDo) {
    case '-': {
      const result = userNumber1 - userNumber2;
      console.log(result);
      break
    }
    case '+': {
      const result = userNumber1 + userNumber2;
      console.log(result);
      break;
    }
    case '/': {
      const result = userNumber1 / userNumber2;
      console.log(result);
      break;
    }
    case '*': {
      const result = userNumber1 * userNumber2;
      console.log(result)
      break;
    }
    default:  {
      console.log('We dont have such command')
    }
}


}

*/
/* const day = prompt('Chose day in the month');

switch(day) {
  case '1':
  case '2':
  case '3':
  case '4':
  case '5':
  case '6':
  case '7':
  case '8':
  case '9':
  case '10':       {
    console.log('first decade');
    break;
  }
  case '11':
  case '12':
  case '13':
  case '14':
  case '15':
  case '16':
  case '17':
  case '18':
  case '19':
  case '20': {
    console.log('second dacade');
    break;
  }
  case '21':
  case '22':
  case '23':
  case '24':
  case '25':
  case '26':
  case '27':
  case '28':
  case '29':
  case '30':
  case '31': {
    console.log('u decide third decade');
  }
  default: {
    console.log('sry u make mistake');
  }  
} */


/*const getUserInput = function () {
 const result = prompt('Input somethink');
*/
/*  if(result) {
    return result;
  }
  return 'U dont anythink';
}; */


/*-----------------------------------------------------------------*/

/*
let count = 0;

while (true) {
  
  if (count % 2===0) {
  console.log(count);
  }
 

  if( ++count > 10) {
    break;
  }
}
*/

/*
const goodPassword = 'qwerty123';
const MAX_TRY = 5;


let count = 0;

while(count++ < Max_TRY ) {

  const userInput = prompt('Write u password');
   if(userInput === goodPassword ) {
     break;
   }
}
*/


wichDecadeIsThisDay = function (day) {
  if (day > 31) {
    return 3
  }
  return Math.ceil(day / 10)
}

function MyArrayProto() {
  this.push = function push() {
    for (let a = 0; a < arguments.length; a++) {
    this[this.length++] = arguments[a];
    
  }
  return this.length;};
  this.pop = function () {
    if (this.length >= 1) {
      const lastItem = this[this.length - 1];
      delete this[--this.length];
      return lastItem;
    }

  }
}

function MyArray() {
  this.length = 0;
  for (let a = 0; a < arguments.length; a++) {
    this.push(arguments[a]);
  }
}

MyArray.prototype = new MyArrayProto();

const MyArr = new MyArray();


function AccamulatorBlyat()


