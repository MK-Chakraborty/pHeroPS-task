const publicData = [
  { name: "Anna Bing", age: 24, temperature: 98 },
  { name: "Bob Carter", age: 33, temperature: 98 },
  { name: "Chandler Dong", age: 42, temperature: 98 },
  { name: "David Engard", age: 51, temperature: 97 },
  { name: "Emaly Frog", age: 60, temperature: 98 },
  { name: "Falcon Grid", age: 71, temperature: 99 },
  { name: "Gimmy Hammer", age: 48, temperature: 98 },
  { name: "Hardy Ilon", age: 23, temperature: 100 },
  { name: "Incog James", age: 26, temperature: 98 },
  { name: "sunil", age: 32, temperature: 102 },
  { name: "Biplap", age: 38, temperature: 98 },
];

const vaxTrail = (dataset) => {
  const arrA = [];
  const arrB = [];
  const arrC = [];
  const arrD = [];
  for (let data in dataset) {
    if (
      dataset[data].temperature < 100 &&
      dataset[data].age >= 20 &&
      dataset[data].age <= 30
    ) {
      arrA.push(dataset[data]);
    } else if (
      dataset[data].temperature < 100 &&
      dataset[data].age >= 31 &&
      dataset[data].age <= 40
    ) {
      arrB.push(dataset[data]);
    } else if (
      dataset[data].temperature < 100 &&
      dataset[data].age >= 41 &&
      dataset[data].age <= 50
    ) {
      arrC.push(dataset[data]);
    } else {
      arrD.push(dataset[data]);
    }
  }
  return {
    A: arrA.sort((a, b) => (a.age & 1) - (b.age & 1) || a.age - b.age),
    B: arrB.sort((a, b) => (a.age & 1) - (b.age & 1) || a.age - b.age),
    C: arrC.sort((a, b) => (a.age & 1) - (b.age & 1) || a.age - b.age),
    D: arrD.sort((a, b) => (a.age & 1) - (b.age & 1) || a.age - b.age),
  };
};

console.log(vaxTrail(publicData));
