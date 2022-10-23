const images = new Array()
images[0] = '../docs/img/angel.png'
images[1] = '../docs/img/sunglasses.png'
images[2] = '../docs/img/fart.png'
images[3] = '../docs/img/fearful.png'
images[4] = '../docs/img/hearts-eyes.png'
images[5] = '../docs/img/hobby.png'
images[6] = '../docs/img/angel-2.png'
images[7] = '../docs/img/sunglasses-2.png'
images[8] = '../docs/img/fart-2.png'
images[9] = '../docs/img/fearful-2.png'
images[10] = '../docs/img/hearts-eyes-2.png'
images[11] = '../docs/img/hobby-2.png'
// images[6] = '../docs/img/sad-crying.png'
// images[7] = '../docs/img/cat.png'
// images[8] = '../docs/img/tears-of-joy.png'
// images[9] = '../docs/img/tongue-out.png'
// images[10] = '../docs/img/unamused.png'
// images[11] = '../docs/img/wink.png'
   



let getAllBlock = document.querySelectorAll(".img-block")
let btnStart = document.querySelector(".btn-start")

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
            if(newPositionRandomArr[randomPosition] == null && newPositionRandomArr[randomPosition] == 'undefined'){
                console.log('img already added')
            }else{//check if position already has been used.
                if(newPositionRandomArr.includes(randomPosition)){
                    console.log("contain possition: " + randomPosition)
                    i--
                }else{
                    newPositionRandomArr.push(randomPosition)
                    elem.setAttribute("src", images[i])
                    elem.setAttribute("width", "100%")
                    console.log(getAllBlock[i])
                    getAllBlock[randomPosition].appendChild(elem)
                }
            }
        }
        console.log(newPositionRandomArr)

    }

} )
