let list = document.querySelector("#todos");
let inputData = document.querySelector("#inputTodo");

let todos = [
];


let handleChange = (event)=>{
  // console.log(event.target.value, event.keyCode)
     if(event.keyCode === 13){
      let todo = {
        id: Date.now(),
        title: event.target.value,
        isDone:false,
       }
        todos.push(todo);
        event.target.value = '';
        createUI();
     }   
}

//LIST

let handleDelete = (event, idi)=>{
   let ind = todos.findIndex(todo=>{
      return todo.id === idi;
    })     
    todos.splice(ind, 1);
    createUI();
}


let handleInput = (event)=>{
}






let createUI = ()=>{
  list.innerHTML = "";
  todos.map(todo=>{
    let idi = todo.id;
    let  li = document.createElement("li");
    let div = document.createElement("div");
    div.classList.add("list-item")
    let  inp = document.createElement("input");
    inp.type = "checkbox";
    inp.checked = todo.isDone;
    inp.addEventListener("change", (event, idi)=>handleInput(event, idi))
    let  btn = document.createElement("button");
    btn.innerHTML = "❌"
    let  clear = document.createElement("button");
    clear.innerHTML = "❌"
    btn.addEventListener('click', (event,idi )=>handleDelete(event, idi))
    let  p = document.createElement("p");
     p.innerText = todo.title;
     div.append(inp, p, btn );
     li.append(div)
   list.append(li)               
})
}

inputData.addEventListener("keyup", (event)=>handleChange(event))
 
 
createUI();