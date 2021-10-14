// Your scripts here!
// Your scripts here!
const allDiv = document.querySelectorAll(".cell");
const resetButton = document.querySelector(".game--restart");
const resultNode = document.querySelector(".game--status");

let playerTurn = 1;

function resetGame(){
    allDiv.forEach((eachDiv) => {
        playerTurn = 1;
        resultNode.innerText = "";
        eachDiv.innerText = "";
    })
}

resetButton.addEventListener("click",resetGame);



allDiv.forEach((eachDiv) => {
    eachDiv.addEventListener("click", () => {

        //Filling the divisions with X or O
        if(playerTurn % 2 == 0 ){
            //Player 2 starts
            eachDiv.innerText = "O";
            playerTurn++;
        }

        else{
            //Player 1 starts
            eachDiv.innerText = "X";
            playerTurn++;
        }

        //Checking game winning condition
        //Checking if rows strike
        if(allDiv[0].innerText === allDiv[1].innerText && allDiv[1].innerText === allDiv[2].innerText ){
            if( allDiv[0].innerText === "X")
            resultNode.innerText = "Player 1 Wins!";

            if(allDiv[0].innerText === "O")
            resultNode.innerText = "Player 2 Wins!";
        }
        

        if(allDiv[3].innerText === allDiv[4].innerText && allDiv[4].innerText === allDiv[5].innerText ){
            if( allDiv[3].innerText === "X")
            resultNode.innerText = "Player 1 Wins!";

            if(allDiv[3].innerText === "O")
            resultNode.innerText = "Player 2 Wins!";
        }
        
        
        if(allDiv[6].innerText === allDiv[7].innerText && allDiv[7].innerText === allDiv[8].innerText ){
            if( allDiv[6].innerText === "X")
            resultNode.innerText = "Player 1 Wins!";

            if(allDiv[6].innerText === "O")
            resultNode.innerText = "Player 2 Wins!";
        }

        //Checking column Strike
        if(allDiv[0].innerText === allDiv[3].innerText && allDiv[3].innerText === allDiv[6].innerText ){
            if( allDiv[0].innerText === "X")
            resultNode.innerText = "Player 1 Wins!";

            if(allDiv[0].innerText === "O")
            resultNode.innerText = "Player 2 Wins!";
        }
        

        if(allDiv[1].innerText === allDiv[4].innerText && allDiv[4].innerText === allDiv[7].innerText ){
            if( allDiv[1].innerText === "X")
            resultNode.innerText = "Player 1 Wins!";

            if(allDiv[1].innerText === "O")
            resultNode.innerText = "Player 2 Wins!";
        }


        if(allDiv[2].innerText === allDiv[5].innerText && allDiv[5].innerText === allDiv[8].innerText ){
            if( allDiv[2].innerText === "X")
            resultNode.innerText = "Player 1 Wins!";

            if(allDiv[2].innerText === "O")
            resultNode.innerText = "Player 2 Wins!";
        }

        //Checking Diagonally
        if(allDiv[0].innerText === allDiv[4].innerText && allDiv[4].innerText === allDiv[8].innerText ){
            if( allDiv[0].innerText === "X")
            resultNode.innerText = "Player 1 Wins!";

            if(allDiv[0].innerText === "O")
            resultNode.innerText = "Player 2 Wins!";
        }

        if(allDiv[2].innerText === allDiv[4].innerText && allDiv[4].innerText === allDiv[6].innerText ){
            if( allDiv[2].innerText === "X")
            resultNode.innerText = "Player 1 Wins!";

            if(allDiv[2].innerText === "O")
            resultNode.innerText = "Player 2 Wins!";
        }
        
        let drawCond;

        //Draw condition
        for(let i=0; i<9; i++){
            if(allDiv[i].innerHTML !== "")
                drawCond = true;

            else{
                drawCond = false;
                break;
            }
        }
        
        if(drawCond === true || drawCond === false){
            if(drawCond)
            resultNode.innerHTML = "Draw!";
        }

        
    })
})