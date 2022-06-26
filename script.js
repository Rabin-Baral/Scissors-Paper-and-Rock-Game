const choice = ["rock", "paper", "scissors"]  //choice players can do
let i = Math.floor(Math.random() * 3)   //random index for choice
let botchoice = choice[i]   //bot choose randomly
console.log(botchoice);

//Grabbing elements from the HTML
const xChoiceImage = document.querySelector('.finalImg')
const images = document.querySelectorAll('.choices img')
const botChoiceImg = document.querySelector('.bot')
const msgContainer = document.querySelector('.messageContainer')
const winningMessage = document.querySelector('#winningMessage')
const restartBtn = document.querySelector('#restartGame')
const choose = document.querySelector('.beforeXc')

//function for bot
function botChooseHere(){
    switch (botchoice){
        case "rock":
        botChoiceImg.src = images[2].src
        break;
    
        case "paper":
        botChoiceImg.src = images[1].src
        break;
    
        case "scissors":
        botChoiceImg.src = images[0].src
        break;
        
        default:
        break;
    }  
    
    botChoiceImg.classList.add("botChoiceImage")
}

//while we click on the items
images.forEach(items => {
    items.addEventListener('click', () =>{
        let itemsName = items.name
        getChoices(items)
        botChooseHere()

        //hiding items after making choice
        items.parentElement.classList.add('hideMe')
        //making choice display board larger
        xChoiceImage.classList.add('makeMeLarge')
        //and finally we decide the winner
        winnerDecider(itemsName)

        //Hiding choose one image when we choose one
        choose.classList.add('hideMe')

        //displaying winning message
        setInterval(displayWinMsg, 1000)
});


})

//displaying what user have choose
function xChoiceDisp(y){
    let xImg = document.createElement('img')
    xImg.src = y
    xChoiceImage.appendChild(xImg)
}

//getting what we choose actually 
//giving xChoiceDisp(y) function what player choose
function getChoices(x){
    console.log(x.name)
    xChoiceDisp(x.src)
}


//lets give the winning message
function winnerDecider(itemsName){
    if(botchoice === itemsName){
        winningMessage.textContent = "draw"
    }

    else if(botchoice == "scissors" && itemsName == "paper"){
        winningMessage.textContent = "bot win"
    }

    else if(botchoice == "rock" && itemsName == "scissors"){
        winningMessage.textContent = 'Bot win'
    }

    else if(botchoice == "paper" && itemsName == "rock"){
        winningMessage.textContent = 'Bot win'
    }

    else{
        winningMessage.textContent = 'you win'
    }
}

//function for display winning message
function displayWinMsg(){
    msgContainer.classList.add('showMe')
}

restartBtn.addEventListener('click', () => {
    window.location.reload(); 
})
