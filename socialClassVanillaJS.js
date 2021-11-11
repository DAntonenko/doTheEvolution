'use strict';

function sortClasses(data) {
  const personsNames = [];
  const personsWeights = [];
  const persons = [];

  for (let person in data) {

    personsNames.push(person);

    let classlessStr = data[person].replace(' class', '');

    let arr = classlessStr.split('-').reverse();

    let digitArr = arr.map(
      item => {
        if (item === 'lower') return 1;
        if (item === 'middle') return 2;
        if (item === 'upper') return 3;
      }
    );

    for (let i = 10 - digitArr.length; i > 0; i--) {
      digitArr.push(2);
    };

    let personWeight = digitArr.join('');
    personsWeights.push(Number(personWeight));
  }

  personsNames.forEach((item, index) => {
    persons.push({name: item, weight: personsWeights[index]});
  })

  persons.sort((a, b) => {
    if (a.weight > b.weight) return -1;
    if (a.weight < b.weight) return 1;
    if (a.weight == b.weight && a.name > b.name) return 1;
    if (a.weight == b.weight && a.name < b.name) return -1;
  })

  return persons.map((person) => person.name);
}

alert(sortClasses({
  mom: "upper-upper-lower-middle class",
  dad: "middle-middle-middle-lower-middle class",
  queenelizabeth: "upper-upper-upper class",
  chair: "lower-lower class",
  unclebob: "middle-middle-lower-middle class"
}));
