// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.

    function createUser(name,age){
        let user = {};
        user.name = name;
        user.age = age;
        return user;
    }

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.

function createUser(name,age){
    let user = {};
    user.name = name;
    user.age = age;
    
    user.sayHello = function () {
        alert(`Welcome ${user.name}`);
    }
    return user;
}

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

let personOne = createUser('ROhit', 21);

let personTwo = createUser('Prashant',29);


// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())


let objMethods = {
    sayHello: function(){
        alert( `Welcome ${this.name}`); 
    },
};

function sayHello(name,age){
    let obj = Object.create('objMethods');
    
    obj.name = name;
    obj.age = age;
    
    return obj;
    
}


// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

function createUser1(name,age){    
    this.name = name;
    this.age = age;
}

createUser1.prototype ={
    sayHello: function() {
        alert (`Welcome ${this.name}`);
    },
}




// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.


let person1 = createUser1('Rohit',21);
let person2 = createUser1('Punish',27);


// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

person1.sayHello();
person2.sayHello();

// 8. Convert the `createUser` function into `User` class.

class createUser {
    constructor(name,age = 0){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        return `welcome ${this.name}`
    }
}

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`

let personOneA = createUser("Lucky",30);
let personTwoB = createUser('Rahul',25)

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

person1.sayHello();
person2.sayHello();