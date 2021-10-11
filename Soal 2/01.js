const person = {
    name: "person A",
    age: 100,
    favDrinks: [
        "coffee",
        "jamu temulawak",
        "tea"
    ],
    greeting: function(name) {
        return `Hello, ${name}`
    }
}

/// EDIT HERE
person.name = "Frensia Tanaga"
person.favDrinks[1] = "tap water"

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));


