const images = new Array()
images[0] = '../docs/img/angel.png'
images[1] = '../docs/img/cat.png'
images[2] = '../docs/img/fart.png'
images[3] = '../docs/img/fearful.png'
images[4] = '../docs/img/hearts-eyes.png'
images[5] = '../docs/img/hobby.png'
images[6] = '../docs/img/sad-crying.png'
images[7] = '../docs/img/sunglasses.png'
images[8] = '../docs/img/tears-of-joy.png'
images[9] = '../docs/img/tongue-out.png'
images[10] = '../docs/img/unamused.png'
images[11] = '../docs/img/wink.png'
   
console.log(images.zero)
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
            elem.setAttribute("src", images[i])
            elem.setAttribute("width", "100%")
            console.log(getAllBlock[i])
            getAllBlock[i].appendChild(elem)
        }
    }

} )
