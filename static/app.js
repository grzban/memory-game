const memoryGame={
    getX: function () {
        let x = document.forms.item(0).elements.X.value;
        return parseInt(x);
    },
    getY: function () {
        let y = document.forms.item(0).elements.Y.value;
        return parseInt(y);
    },
    setX: function(x) {
        this.columnCount = x;
    },
    setY: function(y) {
      this.rowCount = y;
    },
    rowCount: 2,
    columnCount: 2,
    countOfTiles: function () {
        return this.rowCount * this.columnCount;
    },
    pictures: [
        "fab fa-android",
        "fas fa-address-book",
        "fab fa-adn",
        "fab fa-apple",
        "fas fa-basketball-ball",
        "fab fa-avianex",
        "fas fa-key",
        "fas fa-bomb",
        "fas fa-beer",
        "fas fa-gamepad",
        "fas fa-ambulance",
        "fas fa-fighter-jet",
        "fab fa-bitbucket",
        "fab fa-vine",
        "fas fa-arrow-circle-right",
        "fab fa-spotify",
        "fab fa-blackberry",
        "fab fa-buysellads",
        "fas fa-calculator",
        "fas fa-caret-down",
        "fas fa-caret-left",
        "fab fa-centercode",
        "fas fa-chart-area",
        "fas fa-chart-line",
        "fas fa-chess-king",
        "fas fa-chess-pawn",
        "fas fa-chess-rook",
        "fas fa-chevron-up",
        "fab fa-cloudscale",
        "fab fa-cloudsmith",
        "fas fa-crosshairs",
        "fab fa-cuttlefish",
        "fab fa-deviantart",
        "fab fa-dot-circle",
        "fab fa-earlybirds",
        "fab fa-ellipsis-h",
        "fab fa-ellipsis-v",
        "fab fa-facebook-f",
        "fab fa-file-audio",
        "fab fa-file-excel",
        "fab fa-file-image",
        "fab fa-file-video",
        "fab fa-firstdraft",
        "fas fa-motorcycle",
        "fas fa-pencil-alt",
        "fas fa-piggy-bank"
    ],
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    generateBoard: function() {
        let board = [];
        let i = 0;
        let j = 0;
        while (i < this.countOfTiles()) {
            let index = this.getRandomInt(0, this.countOfTiles() - 1);
            if (typeof board[index] == 'undefined'){
                board[index] = this.pictures[j];
                i++;
            } else {
                continue;
            }
            if (i % 2 == 0 ){
                j++;
            }
        }
        return board;
    },
    generateBoardView: function(board) {
        let boardView = document.querySelector('.game_board');
        let table = document.createElement('table');
        let boardElement = 0;
        for (let i = 0; i < this.rowCount; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < this.columnCount; j++) {
                let element = document.createElement('td');
                let divElement = document.createElement('div');
                element.appendChild(divElement);
                divElement.classList.add('unactive');
                let classValue = board[boardElement];
                divElement.innerHTML = '<i class="' + classValue + '"></i>';
                row.appendChild(element);
                boardElement++;
            }
            table.appendChild(row);
        }
        boardView.innerHTML = "</table>";
        boardView.appendChild(table);
        return boardView;
    },
    startGame: function () {
        let board = this.generateBoard(this.rowCount, this.columnCount);
        this.generateBoardView(board);
        for (let i = 0; i < board.length; i++) {
            let tile = document.querySelector('.unactive');
            console.log(tile);
            tile.onclick = function (e) {
               alert("Hello");
            };
        }

    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.game-start').addEventListener('click', function() {
        memoryGame.setX(memoryGame.getX());
        memoryGame.setY(memoryGame.getY());
        document.querySelector("button").remove();
        document.querySelector("form").remove();
        memoryGame.startGame();
    });
});
