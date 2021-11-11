function sortClasses(data) {
    var personsNames = [];
    var personsWeights = [];
    var persons = [];
    for (var person in data) {
        personsNames.push(person);
        var classlessStr = data[person].replace(' class', '');
        var arr = classlessStr.split('-').reverse();
        var digitArr = arr.map(function (item) {
            if (item === 'lower')
                return 1;
            if (item === 'middle')
                return 2;
            if (item === 'upper')
                return 3;
        });
        for (var i = 10 - digitArr.length; i > 0; i--) {
            digitArr.push(2);
        }
        ;
        var personWeight = digitArr.join('');
        personsWeights.push(Number(personWeight));
    }
    personsNames.forEach(function (item, index) {
        persons.push({ name: item, weight: personsWeights[index] });
    });
    persons.sort(function (a, b) {
        if (a.weight > b.weight)
            return -1;
        if (a.weight < b.weight)
            return 1;
        if (a.weight == b.weight && a.name > b.name)
            return 1;
        if (a.weight == b.weight && a.name < b.name)
            return -1;
    });
    return persons.map(function (person) { return person.name; });
}
alert(sortClasses({
    mom: "upper-upper-lower-middle class",
    dad: "middle-middle-middle-lower-middle class",
    queenelizabeth: "upper-upper-upper class",
    chair: "lower-lower class",
    unclebob: "middle-middle-lower-middle class"
}));
