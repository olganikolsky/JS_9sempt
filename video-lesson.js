let person = {
  age: 20,
  name: 'Timur',
  pol: 'girl',
};
//console.log(person.age);

let copy = { ...person };
//console.log(copy.name);

let fullCopy = JSON.parse(JSON.stringify(person));
//console.log(fullCopy.name);
//console.log(fullCopy.age);
//console.log(fullCopy.pol);

let person2 = {
  age2: 22,
  name2: 'Olga',
  adress2: {
    city: 'Kazan',
    street: 'Tach',
  },
};

//console.log(person2.adress2 && person2.adress2.city);
//console.log(person2.adress2?.street);
//console.log(
person2.adress2 ? person2.adress2.street : 'no data available';
//console.log(Object.keys(person2));
//console.log(Object.values(person2));
//console.log(Object.entries(person2));

let json = {
  name3: 'Nadya',
  age3: 56,
};
//console.log(json);

//console.log(JSON.stringify(person2));

let JSONformatToJSPerson = '{"name4": "Olya", "age4": 25}';
//console.log(JSON.parse(JSONformatToJSPerson));

let numbers = [1, 2, 3, 4, 5];
numbers.push(9);
console.log(numbers);
numbers.pop();
numbers.shift();
numbers.unshift('Ya');
console.log(numbers);
let numbers2 = numbers.map(function (e) {
  return e * 5;
});
console.log(numbers2);

numbers.forEach(function (e) {
  console.log(e);
});

let person6 = {
  age6: 68,
  name6: 'Gleb',
};

let { age6, name6 } = person6;

console.log(age6);

let massiv = [1, 2, 3];
let [first, second, third] = massiv;
console.log(first);

const array2 = [1, 2, 3, 4, 5];

// Пропуск элементов

const [, , , gjbdu] = array2;

console.log(gjbdu); // Выводит: 4
