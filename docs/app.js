// let elem = document.createElement("img");
// elem.setAttribute("src", "../docs/img/angel.png")
// elem.setAttribute("width", "100%")



let getAllBlock = document.querySelectorAll(".img-block")
//document.querySelectorAll(".img-block").appendChild(elem)
console.log(getAllBlock.length)
for(let i = 0; i < getAllBlock.length; i++){
    let elem = document.createElement("img");
elem.setAttribute("src", "../docs/img/angel.png")
elem.setAttribute("width", "100%")
    console.log(getAllBlock[i])
   getAllBlock[i].appendChild(elem)
}