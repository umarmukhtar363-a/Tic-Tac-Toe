// Tic Tac Toe
let boxes= document.querySelectorAll(".box");
let rstbtn= document.querySelector(".rst-btn");
let newGamebtn= document.querySelector(".new-btn");
let msgContainer= document.querySelector(".msg-container");
let h3= document.querySelector("h3");


let turnO=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame= function(){
    turnO=true;
    enableBox();
    msgContainer.classList.add("hide");
}

boxes.forEach( function(box){
    box.addEventListener("click", function(){
        if(turnO){
            box.textContent="O";
            turnO=false;
        }
        else{
            box.textContent="X";
            box.style.color= "green";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBox= function(){
    for(let box of boxes){
        box.disabled=true;
    }
};

    const enableBox= function(){
    for(let box of boxes){
        box.textContent="";
        box.disabled=false;
        
    }
};

const showDraw = function () {
    h3.textContent = "Game Draw!";
    msgContainer.classList.remove("hide");
    disableBox();
};

const showWinner= function(winner){
    // msgContainer.style.display="block";
    h3.textContent= `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
};

const checkWinner= function(){
    for(let pattern of winPatterns){
            let posval1=boxes[pattern[0]].textContent;
            let posval2=boxes[pattern[1]].textContent;
            let posval3=boxes[pattern[2]].textContent;
            if(posval1 !== "" && posval2 !== ""&& posval3 !=""){
            if(posval1==posval2 && posval2==posval3 ){
            showWinner(posval1);
            return;
            }
        }
    }

    let isDraw=true;
    for(let box of boxes){
        if(box.textContent==""){
            isDraw=false;
        }
    }
    if(isDraw){
        showDraw();
    }
};

newGamebtn.addEventListener("click", resetGame);
rstbtn.addEventListener("click", resetGame);    
