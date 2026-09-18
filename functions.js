function changeColour(element) {
    element.style.backgroundColor = "black";
}

gridSize = 3;

function generateGrid(){
    //clear previous grid
    for (let i = 1; i <= gridSize * gridSize; i++){
        document.getElementById(i.toString()).style.backgroundColor = "white"; 
    }
    //generate new grid
    for (let i = 1; i <= gridSize * gridSize; i++){
        if (Math.floor(Math.random()*2) === 0){
            document.getElementById(i.toString()).style.backgroundColor = "black";
        }
    }
}

function checkIfComplete(){
    for (let i = 1; i <= gridSize * gridSize; i++){
        if (document.getElementById(i.toString()).style.backgroundColor != "black"){
            return false;
        }
    }
    return true;
}

function updateScore(score){
    document.getElementById('score').innerHTML = score;
}

called = false
async function run(){
    if (!called){
        called = true
        let score = 0;
        while (true){
            generateGrid();
            let complete = false;
            while (!complete){
                if (checkIfComplete()){
                    document.getElementById("grid").style.borderColor = "green";
                    complete = true;
                    score++;
                    updateScore(score);
                }
                await new Promise(r => setTimeout(r, 1));
            }
            await new Promise(r => setTimeout(r, 1000));
            document.getElementById("grid").style.borderColor = "red";
        }
    }
}