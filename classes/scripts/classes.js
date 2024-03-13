class Person {
    constructor(age, occupation, nationality, birthday) {
        this.age = age;
        this.occupation = occupation;
        this.nationality = nationality;
        this.birthday = birthday;
    }  

personInfo() {
    return `This person is ${this.age} years old, works as a ${this.occupation}, is ${this.nationality} and their birthday is on ${this.birthday}.`;
  }
}
