const people = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];

// função normal
function validarIdade(value){
    if(value.age >= 18) {
        return `${value.name} can go to Matrix`;
    }
    return `${value.name} is under age`;
}

// função anonima
const validarIdade2 = function (value) {
    if(value.age >= 18) {
        return `${value.name} can go to Matrix`;
    }
    return `${value.name} is under age`;
}


// arrow function
const validarIdade3 = (value) => {
    if(value.age >= 18) {
        return `${value.name} can go to Matrix`;
    }
    return `${value.name} is under age`;
}

//DOC-DO-MAP: array.map(function(currentValue, index, arr), thisValue)

//map passando uma function criada previamente
const permission = people.map(validarIdade3);

// //map criando função anonima
const permission1 = people.map(
    function (value) {
        if(value.age >= 18) {
            return `${value.name} can go to Matrix`;
        }
        return `${value.name} is under age`;
    }
);

//map criando função arrow
const permission2 = people.map((value) => {
        if(value.age >= 18) {
            return `${value.name} can go to Matrix`;
        }
        return `${value.name} is under age`;
    }
);

//map criando função arrow | ternario
const permissionTernario = people.map((value) => {
    return value.age >= 18 ? `${value.name} can go to the Matrix` : `${value.name} is under age`;
});

console.log(permissionTernario);//de acordo com a função que deseja exibir.