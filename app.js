
//color generator//

const getcolor = () => {
   //hex code  because  of  hex decimal  number 
   const randomNumber = Math.floor(Math.random() * 16777215);
//    console.log(randomNumber);
    const randomCode = '#' + randomNumber.toString(16); //16  stad  for  hexa
    // console.log(randomNumber,randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    //for copy  the  radomcode  my  clipboard
    navigator.clipboard.writeText(randomCode);
}

// for call the  fuctio  getcolor

//evet call

document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

//initial  call
getcolor();




//tic-tac-toe

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX , playerO

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
     turnO = true;
     enableBoxes();
     msgContainer.classList.add("hide");
}

boxes.forEach( (box) => {
    box.addEventListener("click", () =>{
        // console.log("click the btn");
        if(turnO) {  //playerO turn
            box.innerText = "O";
            turnO = false;
        } else { //playerX turn
             box.innerText = "X";
              turnO = true;
        }
        box.disabled = true;

        checkWinner ();
    })
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation🎉,winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBoxes();

};

const checkWinner = () => {
    for (let pattern of winpatterns){
     let pos1Val = boxes[pattern[0]].innerText;
     let pos2Val = boxes[pattern[1]].innerText;
     let pos3Val = boxes[pattern[2]].innerText;

     if(pos1Val != "" && pos2Val != "" && pos3Val !="") {
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            // console.log("winner", pos1Val);
            showWinner(pos1Val);
        }
     }
    }  
};

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);