class Person {
    constructor (firstName, lastName, age, gender, interest) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.interest = interest;
    }
    
    bio () {
        return `${this.firstName} is ${this.age} years old. They like ${this.interest}`
    }

    greeting () {
        return `Hí, i'm ${this.firstName}`
    }

    fullName () {
        return `${this.firstName} ${this.lastName}`
    }

    
    infoCard () {
        return this.tagId = 
        {Name: this.fullName(), 
        Age: this.age,
        Gender: this.gender,
        Interest: this.interest,
        Bio: this.bio(),
        Greeting: this.greeting()}
    }


}

class Teacher extends Person {
    constructor(firstName, lastName, age, gender, interest, subject) {
        super(firstName, lastName, age, gender, interest)
        this.subject = subject;
    }

    greeting () {
        return `Hello. My name is ${this.fullName()}, and i teach ${this.subject}`
    }
    
}

class Student extends Person {
    constructor(firstName, lastName, age, gender, interest) {
        super(firstName, lastName, age, gender, interest)
       
    }

    greeting () {
        return `Yal. My name is ${this.firstName}`
    }
}

let pessoa = new Person('Welder', 'Fagundes', 30, 'Male', 'Play games');
let estudante = new Student('Welder', 'Fagundes', 30, 'Male', 'Play games');
let professor = new Teacher('Welder', 'Fagundes', 30, 'Male', 'Play games', "Geography");
console.log(pessoa.infoCard());
console.log(estudante.infoCard());
console.log(professor.infoCard());