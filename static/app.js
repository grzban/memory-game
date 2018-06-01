let pictures = {
    0: "fas fa-sync-alt",
    1: "fab fa-android",
    2: "fas fa-address-book",
    3: "fab fa-adn",
    4: "fab fa-apple",
    5: "fas fa-basketball-ball",
    6: "fab fa-avianex",
    7: "fas fa-key",
    8: "fas fa-bomb",
    9: "fas fa-beer",
    10: "fas fa-gamepad",
    11: "fas fa-ambulance",
    12: "fas fa-fighter-jet",
    13: "fab fa-bitbucket",
    14: "fab fa-vine",
    15: "fas fa-arrow-circle-right",
    16: "fab fa-spotify",
    17: "fab fa-blackberry",
    18: "fab fa-buysellads",
    19: "fas fa-calculator",
    20: "fas fa-caret-down",
    21: "fas fa-caret-left",
    22: "fab fa-centercode",
    23: "fas fa-chart-area",
    24: "fas fa-chart-line",
    25: "fas fa-chess-king",
    26: "fas fa-chess-pawn",
    27: "fas fa-chess-rook",
    28: "fas fa-chevron-up",
    29: "fab fa-cloudscale",
    30: "fab fa-cloudsmith",
    31: "fas fa-crosshairs",
    32: "fab fa-cuttlefish",
    33: "fab fa-deviantart",
    34: "fas fa-dot-circle",
    35: "fab fa-earlybirds",
    36: "fas fa-ellipsis-h",
    37: "fas fa-ellipsis-v",
    38: "fab fa-facebook-f",
    39: "fas fa-file-audio",
    40: "fas fa-file-excel",
    41: "fas fa-file-image",
    42: "fas fa-file-video",
    43: "fab fa-firstdraft",
    44: "fas fa-motorcycle",
    45: "fas fa-pencil-alt",
    46: "fas fa-piggy-bank"
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var rows = 4;
var columns = 4;
var moveCounts = 0;

function incrementMoveCounts(){
    return this.moveCounts++;
}

function setColumns(columns) {
    this.columns = columns;
}

function setRows(rows) {
    this.rows = rows;
}

function getCountOfTiles() {
    return  rows * columns;
}

function generateGamePictures() {
    let countOfGamePictures = getCountOfTiles()/2;
    let gamePictures = [];
    let i = 0;
    while (i < countOfGamePictures) {
        let index = getRandomInt(1, 46);
        if (typeof pictures[index] == 'undefined') {
            continue;
        }
        let picture = {
            id: i,
            image: pictures[index],
            usedCount: 2
        }
        gamePictures.push(picture);
        delete pictures[index];
        i++;
    }
    return gamePictures;
}

function generateBoard() {
    moveCounts = 0;
    let board = [];
    let pictures = generateGamePictures();
    let countOfPictures = pictures.length;
    for (let i = 1; i <= rows; i++){
        for (let j = 1; j <= columns; j++){
            let pictureIndex;
            let cuntOfUsing;
            while (true) {
                pictureIndex = getRandomInt(0, countOfPictures - 1);
                cuntOfUsing = pictures[pictureIndex].usedCount;
                if (cuntOfUsing != 0) {
                    break;
                }
            }
            pictures[pictureIndex].usedCount = cuntOfUsing - 1;
            let tile = {
                id: i + "" + j,
                image: pictures[pictureIndex].image,
                status: "inactive"
            }
            board.push(tile);
        }
    }
    return board;
}


function findPositionInBoard(tileId, board) {
    let i = 0
    while (i < board.length) {
        if (board[i].id == tileId) {
            return i;
        }
        i++;
    }
}

function changeStatus(index, board) {
    if(board[index].status == "active"){
        board[index].status = "inactive";
    } else if(board[index].status == "resolved") {

    } else {
        board[index].status = "active";
    }
    return board;
}

function checkResolve(moves, board) {
    if (board[moves[0]].image == board[moves[1]].image){
        board[moves[0]].status = "resolved";
        board[moves[1]].status = "resolved";
    }
    return board;
}
let moves = [];

function checkIfFinished(board) {
    let i = 0;
    while (i < board.length) {
        if (board[i].status != "resolved"){
            return false;
        }
        i++;
    }
    return true;
}

function gameView(board) {
    let table = document.querySelector("#game_table");
    table.innerHTML = '';
    let idNumber = 0;
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j<columns; j++) {
            let column = document.createElement('td');
            column.id = "tile_" + board[idNumber].id;
            let tile = document.createElement("i");
            let tileStatus = board[idNumber].status;
            if( tileStatus == "active"){
                tile.className = board[idNumber].image;
            } else if (tileStatus == "resolved") {

            } else {
                tile.className = pictures["0"];
            }

            tile.id = "tile_" + board[idNumber].id;

            column.onclick = function(e){
                e.defaultPrevented = true;
                let tileId = e.target.id.split("_")[1];
                let clickedTileIndex = findPositionInBoard(tileId, board);
                changeStatus(clickedTileIndex, board);
                moves.push(clickedTileIndex);
                if (moves.length == 2) {
                    checkResolve(moves, board);
                }

                if (moves.length == 3) {
                    changeStatus(moves[0], board);
                    changeStatus(moves[1], board);
                    let tmp = moves[2];
                    moves = [];
                    moves.push(tmp);
                    gameView(board);
                }

                this.moveCounts += incrementMoveCounts();
                gameView(board);
                if (checkIfFinished(board)){
                    finishGame();
                }
            };
            column.appendChild(tile);
            row.appendChild(column);
            idNumber++;
        }
        table.appendChild(row);
    }
    showScores(getMoveCounts());
}

function showScores(moveCounts) {
    let scores = document.getElementById("scores");
    scores.innerText = '';
    let moveCountsDiv = document.createElement("div");
    let moveCountsTxt = document.createTextNode("Move counts: " + moveCounts);
    moveCountsDiv.appendChild(moveCountsTxt);
    scores.appendChild(moveCountsDiv);
}

function finishGame() {
    let finishMessage = document.getElementById("finish_message");
    finishMessage.style.display = "block"
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        finishMessage.style.display = "none";
        window.location.href ="/";
    };
    let finishMessageDiv = document.getElementById("finish_message_div");
    let finishMessageP = document.createElement('p');
    let finishMessageTXT = document.createTextNode("You won in " + getMoveCounts() + " moves!");
    finishMessageP.appendChild(finishMessageTXT);
    finishMessageDiv.appendChild(finishMessageP);
    let tryAgainButton = document.getElementById("try_again");
    tryAgainButton.onclick = function () {
        window.location.href ="/";
    }

}

function getMoveCounts() {
    return this.moveCounts;
}
