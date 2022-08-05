# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.



class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
}
let sample = new Square(34)
sample.width //34
sample.height // 34


- Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        return `The square is ${this.width} * ${this.height}`
    }
}
let sample = new Square(10)


- Create another method named `calcArea` that will return the area of the square.

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        return `The square is ${this.width} * ${this.height}`
    }
    calcArea(){
        return this.width*this.height;
    }
}
let sample = new Square(10);

- Create a getter method named `area` that will return area of the square.

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        return `The square is ${this.width} * ${this.height}`
    }
    calcArea(){
        return this.width*this.height;
    }
    get area(){
        return this.width*this.height;
    }
}
let sample = new Square(10);


- Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        return `The square is ${this.width} * ${this.height}`
    }
    calcArea(){
        return this.width*this.height;
    }
    get area(){
        return this.width*this.height;
    }
    set area(areaVal){
        this.width = Math.sqrt(areaVal)
        this.height = Math.sqrt(areaVal)
    }
}
let sample = new Square(10);

- Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    static isEqual(square1,square2){
        return (square1.width*square1.height) == (square2.width*square2.height)
        // i.e if Area of square1 == Area of square2, so return true.
    }
}
let sample = new Square(10,12);

- Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
        let noOfTimes = 0;
    }
    get area(){
        this.noOfTimes++;
        if(this.noOfTimes >= 4){
            alert(`Upper limit reached for calling area property (made using getter method area)`)
        }else{
            return this.width*this.height;
        }
    }
    
}
let sample = new Square(200)
let sample2 = new Square(100);

- Check the `area` getter method on both square.

class Square{
    constructor(width,height){
        this.width = width;
        this.height = height;
        this.area = width*height;
    }
    static isEqual(square1,square2){
        if(this.area == this.area){
            console.log(`Hiiii`)
            return true;
        }else{
            return false;
        }
    }
    get area(){
        return this.area;        
    }
}


- Check the `isEqual` method and pass the two instance you created above.

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    get area(){
        return this.width*this.height;        
    }
    static isEqual(square1,square2){
        return square1.area === square2.area;
    }
}
Square.isEqual(aOfSquare1,aOfSquare2)
// Test cases
// let sample3 = new Square(100)

// undefined
// let sample4 = new Square(100)

// undefined
// Square.isEqual(sample3,sample4)
// true


## User Class

- Create a class named `User` that accepts `firstName` and `lastName` property


class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let user1 = new User("Rohit","Bhatt")

- Create a getter method named `fullName` that will return the full name of the person.

class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return this.firstName+" "+this.lastName;
    }
}
let user1 = new User("GaneshJi","Gautam")

// user1.fullName
// 'GaneshJi gautam'


- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)


class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return this.firstName+" "+this.lastName;
    }
    set fullName(fullName){
        if(fullName.length < 5){
            alert(`Full name should be more than 5 characters`)
        }else{
            this.firstName = fullName.split(' ')[0];
            this.lastName = fullName.split(' ')[1];
        }
    }
}
let user1 = new User("Anand","Seshadri")
// Test cases
// user1.fullName
// 'Anand Seshadri'
// user1.fullName = "Roman Reigns"
// 'Roman Reigns'
// user1.fullName
// 'Roman Reigns'
// user1.firstName
// 'Roman'
// user1.lastName
// 'Reigns'


- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return this.firstName+" "+this.lastName;
    }
    set fullName(fullName){
        if(fullName.length < 5){
            alert(`Full name should be more than 5 characters`)
        }else{
            this.firstName = fullName.split(' ')[0];
            this.lastName = fullName.split(' ')[1];
        }
    }
    nameContains(str){
        // return `${this.firstName} ${this.lastName}`.includes(str);
        
        // OR
        
        if(this.firstName.includes(str) || this.lastName.includes(str)){
            return true;
        }else{
            return false;
        }
    }
}
let user1 = new User("Kashish","Sharma") 
// test cases
// user1.nameContains("re")
// false
// user1.nameContains("hi")
// true

- Create two instance of the `User` class

let instanceUno = new User("John","Snow")
let instanceDuo = new User("Arya","Stark")

- Check by using the `fullName` setter method with name bigger than 5 characters.

class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set fullName(fullName){
        if(fullName.length < 5){
            alert(`Full name should be more than 5 characters`)
        }else{
            this.firstName = fullName.split(' ')[0];
            this.lastName = fullName.split(' ')[1];
        }
    }
}
let user1 = new User("Rohit","Sharma")
// Test cases
// user1.fullName = "Roh"
// 'Ana' also, alerts the message
// user1.fullName = "Rohit"
// 'Anand'

- Check the `fullName` using getter

class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set fullName(fullName){
        if(fullName.length < 5){
            alert(`Full name should be more than 5 characters`)
        }else{
            this.firstName = fullName.split(' ')[0];
            this.lastName = fullName.split(' ')[1];
        }
    }
    get fullName(){
        return this.firstName+' '+this.lastName;
    }
}
let user1 = new User("Anandita","Kapoor");


- Check the `nameContains` method

class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set fullName(fullName){
        if(fullName.length < 5){
            alert(`Full name should be more than 5 characters`)
        }else{
            this.firstName = fullName.split(' ')[0];
            this.lastName = fullName.split(' ')[1];
        }
    }
    get fullName(){
        return this.firstName+' '+this.lastName;
    }
    nameContains(str){
         return `${this.firstName} ${this.lastName}`.includes(str);
    }
}
let user1 = new User("Rohit","Bhatt")

// test case
// user12.nameContains("Roh")
// true
// user12.nameContains("Rohi")
// false
