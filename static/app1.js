/*
const block = document.querySelector('');
block.addEventListener('onclick', function (e) {
    e.preventDefault();
    block.classList.add('active');
    console.log(block)
});
*/
/*

function listOfPictures(){
    var pictures = [];
    pictures.push({id: 1, picture: "fas fa-sync-alt"});
    pictures.push({id: 2, picture: "fas fa-sync-alt"});
    pictures.push({id: 3, picture: "fas fa-sync-alt"});
    pictures.push({id: 4, picture: "fas fa-sync-alt"});
    pictures.push({id: 5, picture: "fas fa-sync-alt"});
    pictures.push({id: 6, picture: "fas fa-sync-alt"});
    pictures.push({id: 7, picture: "fas fa-sync-alt"});
    pictures.push({id: 8, picture: "fas fa-sync-alt"});
    pictures.push({id: 9, picture: "fas fa-sync-alt"});
    pictures.push({id: 10, picture: "fas fa-sync-alt"});
    pictures.push({id: 11, picture: "fas fa-sync-alt"});
    pictures.push({id: 12, picture: "fas fa-sync-alt"});
    pictures.push({id: 13, picture: "fas fa-sync-alt"});
    pictures.push({id: 14, picture: "fas fa-sync-alt"});
    pictures.push({id: 15, picture: "fas fa-sync-alt"});
    pictures.push({id: 16, picture: "fas fa-sync-alt"});
    pictures.push({id: 17, picture: "fas fa-sync-alt"});
    pictures.push({id: 18, picture: "fas fa-sync-alt"});
    pictures.push({id: 19, picture: "fas fa-sync-alt"});
    pictures.push({id: 20, picture: "fas fa-sync-alt"});
    pictures.push({id: 21, picture: "fas fa-sync-alt"});
    pictures.push({id: 22, picture: "fas fa-sync-alt"});
    pictures.push({id: 23, picture: "fas fa-sync-alt"});
    pictures.push({id: 24, picture: "fas fa-sync-alt"});
    pictures.push({id: 25, picture: "fas fa-sync-alt"});
    return pictures;
}

//console.log(listOfPictures()[0].id, listOfPictures()[0].picture);

var x;

function setX(x) {
    this.x = x;
}

function getX() {
    return this.x;
}

console.log("X: " + getX());

function countBoardDimention(x, y) {
    return x * y;
}

function countNeedPictures(boardDimention) {
    return boardDimention/2;
}

function choosePictures(tabOfPictures) {
    for(let i = 0; i < countNeedPictures(); i++) {

    }
}

function generateBoardPosition(x, y){
    positions = [];
    for(let i = 0; i< y; i++){
        for(let j = 0; j< x; j++){
            positions.push(i + "" + j);
        }
    }
    return positions;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateBoard(x, y) {
    positions = generateBoardPosition(x, y)
    board = [];

    while (positions.length > 0){
        position = getRandomInt(0, positions.length-1);
        try {
            let pos = positions[position]
            board.push(pos);
            positions.splice(position, 1)
        } catch (e) {
            continue;
        }
    }
    return board;
}

*/

