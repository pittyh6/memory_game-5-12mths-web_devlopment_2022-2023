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
let newImgObj = []





//ADD IMG TO THE DIVS WHEN START BUTTON IS PRESSED.
btnStart.addEventListener("click", function (e) {
    count = 0
    if (btnStart.classList.contains("hasImg")) {
        console.log("has image class")
    } else {
        $(this).addClass("hasImg")
        let newPositionRandomArr = []
        for (let i = 0; i < getAllBlock.length; i++) {
            let elem = document.createElement("img");
            let randomPosition = Math.floor(Math.random() * 12)
            console.log("randomPosition: " + randomPosition)
            if (newPositionRandomArr.includes(randomPosition)) {
                console.log("contain possition: " + randomPosition)
                i--
            } else {
                newPositionRandomArr.push(randomPosition)
                elem.setAttribute("src", images[i])
                elem.setAttribute("width", "100%")
                console.log(getAllBlock[i])
                console.log("getAllBlock[i].id: " + getAllBlock[i].id)
                getAllBlock[randomPosition].appendChild(elem)
                newImgArr.push(elem, getAllBlock[i]) // change for an object that contains img and id of <div>
                console.log("element in getAllBlock[i] " + getAllBlock[i])


                console.log("--- newImgObj start ---")
                newImgObj.push({id:getAllBlock[i].id, src:getAllBlock[i].firstChild})
                //newImgObj[i].src[(getAllBlock[i].src)]
                console.log(newImgObj)
                console.log("--- newImgObj End ---")
                
            }
            // }
        }
        console.log(newPositionRandomArr)
        console.log(newImgArr[0])
    }
    test()
})

function test(){
    console.log(" -------- test ----------")
    console.log(getAllBlock[i].id)
    console.log(" -------- test ----------")
}


// verify that 2 images are the same.
let count = 1
let firstClick
let secondClick
document.querySelector('.bottom-board').addEventListener("click", function (e) {
    
    if (count == 1) {
        firstClick = e.target.src
        console.log("clicked image. First: " + firstClick)
        count = 2
        // return firstClick
    } else {
        secondClick = e.target.src
        console.log("clicked image. Second: " + secondClick)
        count = 1
        console.log("check first value: " + firstClick)
        if (firstClick == secondClick) {
            console.log("MATCHHHHH")
        } else {
            console.log("Yeah, Nah.")
        }
    }
    let text
    console.log("text: " + (e.target.id))
})
