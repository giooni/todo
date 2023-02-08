const inp = document.getElementById("inp");
const add = document.getElementById("add");
const save = document.getElementById("save");
const clearall = document.getElementById("clearall");
const cleardone = document.getElementById("cleardone");
const ul = document.getElementById("events");

const list = JSON.parse(localStorage.getItem("todo")) || [];

window.onload= () =>{
    list.forEach(el => addevent(el))
}


function toDoItem(description, id, isCompleted){
    this.description = description;
    this.id = id;
    this.isCompleted = isCompleted
}


function addevent(addli =""){
    const li = document.createElement("li");
    let id =addli? addli.id : Date.now();
    let description = addli? addli.description: inp.value;
    li.innerText = description;
    li.setAttribute("id", id )
    ul.appendChild(li);
    li.addEventListener("click", doneitem)
    if(!addli){
        const todoitem = new toDoItem(description, ''+id, false);
        list.push(todoitem)
    }

}
function doneitem(e){
    const clickeditem = e.target;
    clickeditem.classList.add("done");
    const foundedel = list.find((el) => el.id ===clickeditem.id);
    foundedel.isCompleted = true;
    
    



}
function check(){
    add.addEventListener("click", () =>{
        if(inp.value){
            addevent()
            
            
        }console.log(list)
    })
}
function clearAll(){
    clearall.addEventListener("click", () => {
        
        ul.innerHTML = " ";
        list.length = 0;
        console.log(list)
        localStorage.removeItem("list")

    })
}
function clearDone(){
    cleardone.addEventListener('click', ()=>{
        let doneItems = ul.querySelectorAll("li.done");
        doneItems.forEach((item) => item.remove());
        
    })
}
clearDone();
clearAll();
check();

save.addEventListener("click", ()=>{
    localStorage.setItem("todo", JSON.stringify(list))
})

