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
