let person = {
  name: 'Olya',
  age: 21,
  city: 'Kazan',
};
console.log(person);

let original = {
  name: 'Nadya',
  age: 23,
  city: 'Moscow',
};
let copy = { ...original };
copy.name = 'Kolya';
console.log(original);
console.log(copy);

let person2 = {
  name: 'Gleb',
  age: 40,
  city: 'Kazan',
};
let clone = Object.assign({}, person2);
clone.city = 'Novosib';
console.log(person2);
console.log(clone);

//Опциональная цепочка
let user = {};
console.log(user?.city);

let location = {
  zip: {
    city: 'Kazan',
  },
};
console.log(location?.zip?.city);
console.log(location?.zip?.street);

let data = {
  items: [1, 2, 3, 4],
};
console.log(data?.items[0]);
console.log(data?.items[5]);

//Object.keys, .values, .entries
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

//Формат JSON
let toJSON = JSON.stringify(user);
console.log(toJSON);

let jsonString = '{"name": "Tanya", "age": 50, "city":"Tyr"}';
console.log(JSON.parse(jsonString));

let hardJsonObject =
  '{ "pizza": {"flour": "300 g.", "tomatos": 5, "sausage": "3 things"}, "cocktail": 4}';
console.log(JSON.parse(hardJsonObject));

//Массивы и методы массивов
let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits);

let massiv2 = [4, 3, 7, 6, 8, 9, 654];
let squareMassiv = massiv2.map((e) => Math.pow(e, 2));
console.log(squareMassiv);

let evenMassiv = massiv2.filter((e) => e % 2 === 0);
console.log(evenMassiv);

//Деструктуризация и деструктурирующее присваивание
let person3 = {
  name: 'Hop',
  age: 69,
};
let { name, age } = person3;
console.log(name);
console.log(age);

let fruitsArr = ['яблоко', 'банан', 'груша'];
let [first, second] = fruitsArr;
console.log(first + ',', second);

let person5 = {
  hobby: 'skate',
  professional: 'IT',
};
let { hobby, name5 = 'Olya', age5 = 56 } = person5;
console.log(hobby, name5, age5);
