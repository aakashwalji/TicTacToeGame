let buttons = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let winner = document.querySelector("#win-text");
let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const showWinner = (player) =>{
    winner.innerText = "Congratulations! Winner is " + player;
    winner.classList.remove("hide");
}

const disableBtn = () =>  {
    for ( let btn of buttons){
        btn.disabled = true;
    }
}
// To check if  button is clicked
buttons.forEach((btn) =>{
    btn.addEventListener("click",() =>{
        if (turnO){
            btn.innerHTML = "O";
            turnO = false;
            btn.style.color = "black";
            console.log("O")
        }
        else {
            btn.innerHTML = "X";
            turnO = true;
            console.log("X")
            btn.style.color = "#E65F5C";
            
        }
        btn.disabled = true;
        checkWinner();
    })
})

//  Function for checking Winner
const checkWinner = () => {
    for(let pattern of winPatterns){
             let posVal1 = buttons[pattern[0]].innerText;
             let posVal2 = buttons[pattern[1]].innerText;
             let posVal3 = buttons[pattern[2]].innerText;

             if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
                if(posVal1 == posVal2 && posVal2 == posVal3){
                    console.log("winner is ", posVal1);
                    showWinner(posVal1);
                    disableBtn();
                }
             }  
    }
}

// Function for Reset Button
const resetGame = () => { 
    turnO = true;
    for (let btn of buttons){
        btn.disabled = false;
        btn.innerText = "";
    }
    posVal1 = "";
    posVal2 = "";
    posVal3 = "";
    winner.innerText = "";
    winner.classList.add("hide");
}

resetBtn.addEventListener("click", resetGame);



