const images = new Array()
images[0] = '../docs/img/angel.png'
images[1] = '../docs/img/sunglasses.png'
images[2] = '../docs/img/fart.png'
images[3] = '../docs/img/fearful.png'
images[4] = '../docs/img/hearts-eyes.png'
images[5] = '../docs/img/hobby.png'
// images[6] = '../docs/img/sad-crying.png'
// images[7] = '../docs/img/cat.png'
// images[8] = '../docs/img/tears-of-joy.png'
// images[9] = '../docs/img/tongue-out.png'
// images[10] = '../docs/img/unamused.png'
// images[11] = '../docs/img/wink.png'
   



let getAllBlock = document.querySelectorAll(".img-block")
let btnStart = document.querySelector(".btn-start")
btnStart.addEventListener("click",function(){
    if(btnStart.classList.contains("hasImg")){
        console.log("has image class")
    }else{
        $(this).addClass("hasImg")
        let newImgRandomArr = []
        for (let i = 0; i < getAllBlock.length; i++) {
            let elem = document.createElement("img");
            let randomNumberImage = images[Math.floor(Math.random()* 6)]
            if(newImgRandomArr.includes(randomNumberImage)){
                console.log('img already added')
            }else{
                newImgRandomArr.push(randomNumberImage)
                elem.setAttribute("src", randomNumberImage)
                elem.setAttribute("width", "100%")
                console.log(getAllBlock[i])
                getAllBlock[i].appendChild(elem)
            }
        }
        console.log(newImgRandomArr)
    }

} )
