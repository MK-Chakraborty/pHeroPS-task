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
  const sortedDataset = dataset.sort(
    (a, b) => (a.age & 1) - (b.age & 1) || a.age - b.age
  );
  const arrA = [];
  const arrB = [];
  const arrC = [];
  const arrD = [];
  for (let data in sortedDataset) {
    if (
      sortedDataset[data].temperature < 100 &&
      sortedDataset[data].age >= 20 &&
      sortedDataset[data].age <= 30
    ) {
      arrA.push(sortedDataset[data]);
    } else if (
      sortedDataset[data].temperature < 100 &&
      sortedDataset[data].age >= 31 &&
      sortedDataset[data].age <= 40
    ) {
      arrB.push(sortedDataset[data]);
    } else if (
      sortedDataset[data].temperature < 100 &&
      sortedDataset[data].age >= 41 &&
      sortedDataset[data].age <= 50
    ) {
      arrC.push(sortedDataset[data]);
    } else {
      arrD.push(sortedDataset[data]);
    }
  }
  return {
    A: arrA,
    B: arrB,
    C: arrC,
    D: arrD,
  };
};

console.log(vaxTrail(publicData));
