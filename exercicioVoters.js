let allVoters = [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake' , age: 32, voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam' , age: 20, voted: false},
    {name: 'Phil' , age: 21, voted: true},
    {name: 'Ed' , age: 55, voted: true},
    {name: 'Tami' , age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let youngVotes = {totals: 0, voted: 0};;
let midVotes = {totals: 0, voted: 0};
let oldVotes = {totals: 0, voted: 0};

let resultVotes = [' Young ',youngVotes, ' Mid ', midVotes, ' Old ', oldVotes ]

for (let indice = 0; indice < allVoters.length; indice++) {
    if (allVoters[indice].age >= 18 && allVoters[indice].age <= 25){
        youngVotes.totals += 1;
        if (allVoters[indice].voted == true) {
            youngVotes.voted += 1;
        }
    }

    if (allVoters[indice].age >= 26 && allVoters[indice].age <= 35){
        midVotes.totals += 1;
        if (allVoters[indice].voted == true) {
            midVotes.voted += 1;
        }
    }

    if (allVoters[indice].age >= 36){
        oldVotes.totals += 1;
        if (allVoters[indice].voted == true) {
            oldVotes.voted += 1;
        }
    }
    
}

console.log(resultVotes)
