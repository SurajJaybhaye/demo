let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    input.value = ""

    let delbtnn = document.createElement("button");
    delbtnn.innerText = "Delete";
    delbtnn.classList.add("delete");
    item.appendChild(delbtnn);

    
})

ul.addEventListener("click" , function(event){
  if(event.target.nodeName == "BUTTON"){
    let listitem = event.target.parentElement;
    listitem.remove();
  }
})

// delbtns = document.querySelectorAll(".delete");

// for (delbtnn of delbtns) {

//     delbtnn.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove();
//     });
// }

