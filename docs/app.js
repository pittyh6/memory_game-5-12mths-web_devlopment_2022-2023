
let getAllBlock = document.querySelectorAll(".img-block")
console.log(getAllBlock.length)
let btnStart = document.querySelector(".btn-start")
btnStart.addEventListener("click",function(){
    if(btnStart.classList.contains("hasImg")){
        console.log("has image")
    }else{
        $(this).addClass("hasImg")
        for (let i = 0; i < getAllBlock.length; i++) {
            let elem = document.createElement("img");
            elem.setAttribute("src", "../docs/img/angel.png")
            elem.setAttribute("width", "100%")
            console.log(getAllBlock[i])
            getAllBlock[i].appendChild(elem)
        }
    }

} )
