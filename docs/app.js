const images = new Array()
images[0] = 'img/angel.png'
images[1] = 'img/sunglasses.png'
images[2] = 'img/fart.png'
images[3] = 'img/fearful.png'
images[4] = 'img/hearts-eyes.png'
images[5] = 'img/hobby.png'
images[6] = 'img/angel.png'
images[7] = 'img/sunglasses.png'
images[8] = 'img/fart.png'
images[9] = 'img/fearful.png'
images[10] = 'img/hearts-eyes.png'
images[11] = 'img/hobby.png'
// images[6] = '../docs/img/sad-crying.png'
// images[7] = '../docs/img/cat.png'
// images[8] = '../docs/img/tears-of-joy.png'
// images[9] = '../docs/img/tongue-out.png'
// images[10] = '../docs/img/unamused.png'
// images[11] = '../docs/img/wink.png'
   


//content save elements
let getAllBlock = document.querySelectorAll(".img-block")
let btnStart = document.querySelector(".btn-start")
let newImgArr = []


//ADD IMG TO THE DIVS WHEN START BUTTON IS PRESSED.
btnStart.addEventListener("click",function(){
    if(btnStart.classList.contains("hasImg")){
        console.log("has image class")
    }else{
        $(this).addClass("hasImg")
        let newPositionRandomArr = [] // change for not random img but random position..... If full , genarate a new random number until find a free spot
        for (let i = 0; i < getAllBlock.length; i++) {
            let elem = document.createElement("img");
            let randomPosition = Math.floor(Math.random()* 12)
            console.log(randomPosition)
            // if(newPositionRandomArr[randomPosition] == null && newPositionRandomArr[randomPosition] == 'undefined'){
            //     console.log('img already added')
            // }else{//check if position already has being used.
                if(newPositionRandomArr.includes(randomPosition)){
                    console.log("contain possition: " + randomPosition)
                    i--
                }else{
                    newPositionRandomArr.push(randomPosition)
                    elem.setAttribute("src", images[i])
                    elem.setAttribute("width", "100%")
                    console.log(getAllBlock[i])
                    getAllBlock[randomPosition].appendChild(elem)
                    newImgArr.push(elem,getAllBlock[i])
                }
            // }
        }
        console.log(newPositionRandomArr)
        console.log(newImgArr[0])
    }
} )


// verify that 2 images are the same.
let count = 1
document.querySelector('.bottom-board').addEventListener("click", function(e){
    let firstClick, secondClick;
    if(count == 1){
        firstClick = e.target.src
        console.log("clicked image. First: " + firstClick)
        count ++
    }else{
        secondClick = e.target.src
        console.log("clicked image. Second: " + secondClick)
        count = 1
    }
    
})
