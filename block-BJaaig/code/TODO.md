## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // output Hello John
console.log(user2.sayHello()); // output Hello Arya
console.log(user.sayHello.call(user2)); // output Hello Arya
console.log(user.sayHello.call(user2, 'Hey')); // Hey Arya
console.log(user.sayHello.apply(user2, ['Hey'])); // Hey Arya
console.log(typeof user.sayHello.bind(user2)); // output function
console.log(user.sayHello.bind(user2)()); // output Hello Arya
console.log(userSayHello()); // output / Hello Undefined
console.log(typeof userSayHello.bind(user2)); // output / function
console.log(userSayHello.bind(user2)()); // output /Hello Arya
console.log(user3.sayHello()); // output / TypeError: user3.sayHello is not a function
console.log(userSayHello.apply(user3)); // output / Hello Bran
console.log(userSayHello.call(user3)); // output / Hello Bran
console.log(typeof new MainUser()); // output / object
console.log(typeof new MainUser()); // output / object
console.log(new MainUser().sayHello()); // output / Hello Tyrion.
console.log(new MainUser().sayHello.call(user2)); // output / Hello Arya.
console.log(new MainUser().sayHello.call(user)); // output / Hello John.
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // output / Welcome! John
```