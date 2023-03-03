const cellphone = {
    brand: "apple",
    price: 1200,
    rating: 4.4,
    offer: 1000,
};

// destructuration is to extract some property
const {
    brand: nameOfBrand,
    price: finalPrice,
    rating: puntuation,
    offer,
} = cellphone;

console.log("brand", nameOfBrand);

const person = {
    name: "Juan",
    surname: "Perez",
    age: 28,
    height: 1.72,
    wight: 76.1,
    hobby: ["Soccer", "Swimming", "Biking"],
    legalAge: true,
    greet: function () {
        return `Hello, I am ${this.name} ${this.surname} and I have ${this.age} years`;
    }
};

console.log("---- USING FUNCTIONS IN OBJECTS ----");
console.log(person.greet());

console.log("--- CONVERTING AN OBJECT TO ARRAY ---");
console.log("values", Object.values(person));
console.log("keys", Object.keys(person));

for (let valor of Object.values(person)) {
    console.log("value", valor);
}

console.log(person["age"]);
console.log(person.age);
console.log(person.name, person.surname);

person["dni2"] = "11111";
person.dni = "88888";

console.log(person);

for (let hobby of person.hobby) {
    console.log(hobby);
}

const cars = [
    {
        brand: "bmw",
        model: "m2",
        price: 145000,
        year: 2022,
        color: "blue",
    },
    {
        brand: "mercedes",
        model: "gla 2",
        price: 150000,
        year: 2023,
        color: "white",
    }
]

console.log("---- ITERATING AN OBJECTS ARRAY----")

for (let car of cars) {
    console.log("brand", car.brand);
}