const person1 = new Person(25, "Software Developer", "American", "Jan 10, 1975");
const person2 = new Person(35, "Teacher", "British", "November 12, 1989");
const person3 = new Person(40, "Doctor", "French", "May 29, 1994");
const person4 = new Person(28, "Artist", "Japanese", "August 11, 1980");

document.getElementById("person1").innerHTML = person1.personInfo();
document.getElementById("person2").innerHTML = person2.personInfo();
document.getElementById("person3").innerHTML = person3.personInfo();
document.getElementById("person4").innerHTML = person4.personInfo();
