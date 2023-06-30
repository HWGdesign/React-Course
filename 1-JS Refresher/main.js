import { apiKey, apiKey2 } from './utilities.js';
//or
import * as ApiKeys from './utilities.js';

console.log(apiKey);
console.log(apiKey2);
//or
console.log(ApiKeys);
console.log(ApiKeys.apiKey);
console.log(ApiKeys.apiKey2);

//----------------------------------------------------------------

const combine = function (a, b, c) {
  return (a * b) / c;
};

console.log(combine(3, 4, 2));

//----------------------------------------------------------------

const user = {
  name: 'John',
  age: 30,
  hobbies: ['coding', 'more coding', 'drinking coffee'],
  friends: ['John', 'Jane', 'Jane'],
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

console.log(user.hobbies);
user.greet();

//----------------------------------------------------------------

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const typicalUser = new User('John', 30);
console.log(typicalUser.name);

//----------------------------------------------------------------

const hobbies = ['coding', 'more coding', 'drinking coffee'];
console.log(hobbies[0]);
hobbies.push('eating');
console.log(hobbies.length);

const id = hobbies.findIndex((id) => {
  return id === 'drinking coffee';
});
console.log(id);

const addExclamation = hobbies.map((item) => {
  return (item += '!');
});
console.log(addExclamation);

const createObject = hobbies.map((item) => {
  return { activity: item };
});
console.log(createObject);

//----------------------------------------------------------------
function transformToObjects(numberValue) {
  const solution = numberValue.map((item) => {
    return { val: item };
  });
  return solution;
}
console.log(transformToObjects([1, 2, 3]));

//----------------------------------------------------------------

const userNameData = ['Max', 'Muller'];
const userName = userNameData[0];
const userSecondname = userNameData[1];
console.log(userName, userSecondname);
//or
const [frstName, lstName] = ['Max', 'Muller'];
console.log(frstName, lstName);

const { name: movieName, year } = {
  name: 'The Matrix',
  year: 1999,
};
console.log(movieName, year);

//----------------------------------------------------------------

const hobby = ['sports', 'coding', 'eating'];
const newHobby = ['reading'];

const mergeHobbies = [...hobby, ...newHobby];
console.log(mergeHobbies);

const furniture = {
  name: 'table',
  price: 1000,
};

const availableFurniture = {
  ...furniture,
  available: true,
};

console.log(availableFurniture);

//----------------------------------------------------------------

for (const forHobyy of hobbies) {
  console.log(forHobyy);
}

for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i] + '.');
}

if (hobby.length === 3) {
  console.log(`hobby is equal ${hobby.length}`);
}

//----------------------------------------------------------------
function handleTimeout() {
  console.log('timeout');
}

setTimeout(handleTimeout, 500);

function greeter(greeting) {
  greeting();
}

greeter(() => {
  console.log('Greetings Sir');
});

function greeter2() {
  function greeter3() {
    console.log('Greetings Sir');
  }
  greeter3();
}
greeter2();

//----------------------------------------------------------------
