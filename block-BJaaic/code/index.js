// #### Animal

// Methods

let animalMethods = {
    eat: function(){
        console.log(`I live in ${this.location} and I can eat!`);
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
        return this.location;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    },
};
// Properties:

function createAnimal(location,numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;

    return animal;
}
// same example

// #### Animal
// Properties:
// - `location`
// - `numberOfLegs`
// Methods
// - `eat()` - log a message saying `I live in ${location} and I can eat`
// - `changeLocation(newLocation)` - accepts location and updates the location of the animal
// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

let animalMethod = {
    eat() {
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation(newLocation) {
        this.location = newLocation;
        return newLocation;
    },
    summary() {
        return (`I live in ${this.location} and I have ${this.numberOfLegs}`)
    },
}

function animal(location, numberOfLegs) {
    let obj = Object.create(animalMethod);
    obj.location = location;
    obj.legs = numberOfLegs;
    return obj;
}


// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

let dogMethods = {
    bark() {
        alert `I am ${this.name} and I can bark 🐶`;
    },
    changeName(newName) {
         this.name = newName;
         return this.name;
    },
    changeColor(newColor) {
        this.color = newColor;
        return this.color;
   },
   summary() {
      return `I am ${this.name} and I am of ${this.color} color. I can also bark`
   }

}

Object.getPrototypeOf(dogMethods, animalMethods);

// properties

function dog(location, numberOfLegs, name, color) {
    let obj = Object.create(dogMethods,animalMethods);
    obj.location = location;
    obj.legs = numberOfLegs;
    obj.name = name;
    obj.color = color;
    return obj;
}

// cat

// Methods

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

let catMethod = {
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName(newName) {
        this.name = newName;
    },
    changeColor(newColor) {
        this.color = newColor;
    },
    summary() {
        return (`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`)
    }
}

Object.setPrototypeOf(catMethod, animalMethod);

function cat(location, numberOfLegs, name, colorOfEye) {
    let obj = Object.create(catMethod);
    obj.location = location;
    obj.legs = numberOfLegs;
    obj.name = name;
    obj.colorOfEye = colorOfEye;
    return obj;
}





