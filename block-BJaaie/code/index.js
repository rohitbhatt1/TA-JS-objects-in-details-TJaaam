// # Inheritance

// Convert the below requirements into inheritance using:

// - Pseudoclassical Pattern
// - Class Pattern

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`


function createAnimal(location,numberOfLegs){
    this.location  = location;
   this.numberOfLegs =numberOfLegs;   
}

// Methods

createAnimal.prototype = {
    eat: function(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    ChangeLocation: function(newLocations){
        return this.location = newLocations;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
}

let useranimal = new CreateAnimal("dharamsala", 6);


// Class Patterns

class createAnimals{
    constructor(location,numberOfLegs){
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    }
    ChangeLocation (){
        return this.location = newLocations;
    }
    summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
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


function createDog(location,numberOfLegs, name,color){
    this ={}
    createAnimal.call(this,location,numberOfLegs);
   this.name = name;
   this.color = color;
}


createDog.prototype = {
   bark: function(){
    alert `I am ${this.name} and I can Bark 🐶`;
   },
   ChangaName:function (newName){
    return this.name = newName;
   },
   ChangaName: function (newColor){
    return this.color = newColor;
   },
   summary :function(){
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`
   }

}

let dog = new CreateDog("dharamsal",7,"Dodo", "Yellow");

Object.setPrototypeOf(createDog.prototype,createAnimal.prototype);

// class Pattern

class Dog extends Animal{
    constructor(location,numberOfLegs,name,color){
        super(location,numberOfLegs)
        this.name = name;
        this.color = color;
    }
    bark(){
        alert `I am ${this.name} and I can Bark 🐶`;
       }
       ChangaName (newName){
        return this.name = newName;
       }
       ChangaName(newColor){
        return this.color = newColor;
       }
       summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
       }
    
}
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


function Cat (location, numberOfLegs, name, colorOfEyes) {
    Animal.call(this, location,numberOfLegs)
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}

Cat.prototype = {
    meow: function(){
        alert `I am ${this.name} and I can do mewo meow 😹`;
    },
    changeName: function(newName){
        return this.name = newName;
    },
    changeColor: function(newColor){
        return this.color = newColor;
    } ,
    summary: function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }
}

Object.setPrototypeOf(Cat.prototype,Animal.prototype);

// class pattern

class Cat extends Animal{
    constructor(location, numberOfLegs, name, colorOfEyes){
        super(location, numberOfLegs)
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow(){
        alert `I am ${this.name} and I can do mewo meow 😹`;
    }
    changeName(newName){
        return this.name = newName;
    }
    changeColor(newColor){
        return this.color = newColor;
    }
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }
}
Footer



