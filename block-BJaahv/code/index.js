//using functin to craete object

function createUser(name, id , noOfProjects){
  let user = {};
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  user.getProjects = function () {
    return user.noOfProjects;
  };
  user.changeName = function (newName) {
    user.name = newName;
    return user.name;
  };
  user.incrementProject = function () {
    user.noOfProjects = +1;
    return user.noOfProjects;
  };
  user.decrementProject = function () {
    user.noOfProjects = -1;
    return user.noOfProjects;
  };
  return user;

}

// - [ ] Using Object.create  (prototypal pattern)
  
// function createUser(name, id, noOfProjects) {
//     let user = Object.create(createUser.prototype);
//     user.name = name;
//     user.id = id;
//     user.noOfProjects = noOfProjects;
//   }
  
//   createUser.prototype = {
//     getProject() {
//       return this.noOfProjects;
//     },
//     changeName(newName) {
//       this.name = newName;
//       return this.name;
//     },
//   };
  
//   let user3 = createUser("Arya", "Strak", 12);
//   let user4 = createUser("John", "Snow", 21);

let userMethods = {
    getProjects: function () {
      return this.noOfProjects;
    },
    changeName: function (newName) {
      this.name = newName;
      return this.name;
    },
    incrementProject: function () {
      this.noOfProjects = +1;
      return this.noOfProjects;
    },
    decrementProject: function () {
      this.noOfProjects = -1;
      return this.noOfProjects;
    },
  };
  
  function createUser(name, id, noOfProjects) {
    let user = Object.create(userMethods);
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
  
    return user;
  }
  
  
  
  // - [ ] Using Pseudoclassical Way

  //one type
  
  function CreateUser(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  
  CreateUser.prototype = {
    getProject() {
      return this.noOfProjects;
    },
    changeName(newName) {
      this.name = newName;
      return this.name;
    },
  };
  
  //second typegi

  function CreateUser(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  
  CreateUser.prototype = {
    getProjects: function () {
      return this.noOfProjects;
    },
    changeName: function (newName) {
      this.name = newName;
      return this.name;
    },
    incrementProject: function () {
      this.noOfProjects = +1;
      return this.noOfProjects;
    },
    decrementProject: function () {
      this.noOfProjects = -1;
      return this.noOfProjects;
    },
  };

  let user5 = new CreateUser("Arya", "Strak", 12);
  let user6 = new CreateUser("John", "Snow", 21);


  
  // - [ ] Using Class
  
  class User {
    constructor(name,id,noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
    }
    getProjects (){
        return this.noOfProjects;
    }
    changeName (newName){
        this.name = newName
        return this.name;
    }
    incrementProject( val = 1){
        this.noOfProjects =  this.getProjects + val;
        return this.noOfProjects;
    }
    decrementProject(val){
        this.noOfProjects = this.newName - val;
        return this.noOfProjects;
    }
}
undefined
let project1 = new User("Blog App",1,2);
let project2 = new User("Todo App",2,4);
undefined
project1.changeName('Bud');
'Bud'


