var prompt = require ('prompt-sync').prompt;

var turn = true;
var output='O';
var boardValue= [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
var input;
var index=[,];
var x;
var y;
var gameMoves=0;
var player1;
var player2;
var valid;


var turn = true;
var output='O';
var boardValue= [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
var input;
var index=[,];
var x;
var y;
var gameMoves=0;
var player1;
var player2;
var valid;


//normal mode with two player
function NormalMode() {
// for heading and title
    var heading = 'WELCOME TO TIC TAC TOE GAME (Normal Mode)';
    console.log(heading);


    player1 = prompt('Please Enter Your Name',' ');
    player2 = prompt('Please Enter Your Name',' ');
//function that draw an empty board
    drawBoard();

//game loop
    while (gameMoves < 9) {
//turn chech with boolean variable if true then player1 make move else player 2
        if (turn) {
            var checker = true;
//unless we input correct value

            console.log(player1 + 'Player 1 Your Turn Now');
            output = 'O';
            var validInput;

            input = prompt('Enter Your Move');
            validInput = inputValidator(input);
            if(validInput){
                boardValue[x][y] = output;

                checker = false;
// game counter helpful for drawchecker.
                gameMoves++;
                turn = false;
                reDraw();
                var winCheck = check1();
                drawCheck();
            }
            else {
                trun= true;



            }
        }
// for player 2
        else {
            var checker = true;
            while (checker) {
                output = 'X';
                console.log(player2 + 'Player 2 Your Turn Now');


                var validInput;
                input = prompt('Enter Your Move');
                validInput = inputValidator(input);
                if(validInput){
                    boardValue[x][y] = output;

                    checker = false;
// game counter helpful for drawchecker.
                    gameMoves++;
                    turn = true;
                    reDraw();
                    var winCheck = check1();
                    drawCheck();
                }
                else {
                    trun= false;



                }

            }


        }
    }
}
// for hard mode
function HardMode() {
    var heading = 'WELCOME TO TIC TAC TOE GAME (Hard Mode)';
    console.log(heading);
        gameMoves=0;
    turn= true;

        player1 = prompt('Please Enter Your Name');
        player2 = prompt('Please Enter Your Name');

        drawBoard();


        while (gameMoves < 9) {
            if (turn) {
                console.log(player1 + ' Its Your Turn!');
                output = 'O';

                input = prompt('Enter Your Move');
// if enter forfeirt game over after printing other player win

                var validInput;

                    if (input == 'forfeit') {

                        console.log('Game Over \n' + player2 + ' Wins!');
                        gameMoves = 9;

                    }
                    var validInput;
                    input = prompt('Enter Your Move');
                    validInput = inputValidator(input);
                    if (validInput) {
                        boardValue[x][y] = output;

                        checker = false;
// game counter helpful for drawchecker.
                        gameMoves++;
                        turn = false;
                        reDraw();
                        var winCheck = check1();
                        drawCheck();
                    }
                    else {
                        trun = true;


                    }




            }
            else {
                var checker = true;

                    output = 'X';
                    console.log(player2 + ' Its Your Turn!');

                var validInput;
                input = prompt('Enter Your Move');
                validInput = inputValidator(input);
                if (validInput) {
                    boardValue[x][y] = output;

                    checker = false;
// game counter helpful for drawchecker.
                    gameMoves++;
                    turn = true;
                    reDraw();
                    var winCheck = check1();
                    drawCheck();
                }
                else {
                    trun = false;


                }

                }
            }




}

function inputValidator(input) {

    index = input.split(' ');
    if (!(index[0] > 9)) {
        // array start form 0 and our valur in board start form 1 so we decrement.
        x = parseInt(index[0]);
        y = parseInt(index[1]);
        x = x - 1;
        y = y - 1;
        validation1=true;
    }

    else {
        console.info('Invalid input: you must enter the x and y coordinates separated by spaces.');
        validation1=false;
    }
    if (!(x < 0 && x > 2 && y < 0 && y > 2)) {
        validation2=true;
    }
    else {
        console.info('Invalid input: that space is already taken.');
        validation2=false;
    }

    if (boardValue[x][y] == ' ') {
        validation3=true;
    }
    else {
        console.info('Invalid input: those coordinates are outside the playable area');
        validation3=false;
    }
    return (validation1&&validation2&&validation3);




}


function drawBoard() {
    console.log('Player 1: ' + player1 + '\tSign : O');
    console.log('Player 1: ' + player2 + '\tSign : X');
    boardValue = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];

    console.log('```\n 1 \t 2\t 3\n~~~~~~~~~~~~~\n1| ' + printValue(0, 0) + '| ' + printValue(0, 1) + '| ' + printValue(0, 2) + '|\n~~~~~~~~~~~~~\n2| ' + printValue(1, 0) + '| ' + printValue(1, 1) + '| ' + printValue(1, 2) + '|\n~~~~~~~~~~~~~\n3| ' + printValue(2, 0) + '| ' + printValue(2, 1) + '|' + printValue(2, 2) + '|\n~~~~~~~~~~~~~\n```');
}

//use to get value
function printValue(x, y) {

    return boardValue[x][y];
}

// it draw when we make any move
function reDraw() {
    console.log('Player 1: ' + player1 + '\tSign : O');
    console.log('Player 2: ' + player2 + '\tSign : X');
    console.log('```\n 1 \t 2\t 3\n~~~~~~~~~~~~~\n1| ' + printValue(0, 0) + '| ' + printValue(0, 1) + '| ' + printValue(0, 2) + '|\n~~~~~~~~~~~~~\n2| ' + printValue(1, 0) + '| ' + printValue(1, 1)
        + '| ' + printValue(1, 2) + '|\n~~~~~~~~~~~~~\n3| ' + printValue(2, 0) + '| ' + printValue(2, 1) + '|' + printValue(2, 2) + '|\n~~~~~~~~~~~~~\n```');
}

function drawCheck() {

    if (gameMoves == 9) {

        console.info('Game Draw');
        reDraw();
        console.info('Game Draw');

    }
}

//checker for player 2 is winning.
function check2() {
    if (boardValue[0][0] == 'X' && boardValue[0][1] == 'X' && boardValue[0][2] == 'X') {

        console.info(player2 + 'You Win!');
        gameMoves=9;

    }
    else if (boardValue[1][0] == 'X' && boardValue[1][1] == 'X' && boardValue[1][2] == 'X') {

        console.info(player2 + 'You Win!');
        gameMoves=9;
    }
    else if (boardValue[2][0] == 'X' && boardValue[2][1] == 'X' && boardValue[2][2] == 'X') {

        console.info(player2 + 'You Win!');
        gameMoves=9;
    }
    else if (boardValue[0][0] == 'X' && boardValue[1][1] == 'X' && boardValue[2][2] == 'X') {

        console.info(player2 + 'You Win!');
        gameMoves=9;
    }
    else if (boardValue[0][0] == 'X' && boardValue[1][0] == 'X' && boardValue[2][0] == 'X') {

        console.info(player2 + 'You Win!');
        gameMoves=9;
    }
    else if (boardValue[0][1] == 'X' && boardValue[1][1] == 'X' && boardValue[2][1] == 'X') {

        console.info(player2 + 'You Win!');
        gameMoves=9;
    }
    else if (boardValue[0][2] == 'X' && boardValue[1][2] == 'X' && boardValue[2][2] == 'X') {

        console.info(player2 + 'You Win!');
        gameMoves=9;
    }
    else if (boardValue[0][0] == 'X' && boardValue[1][1] == 'X' && boardValue[2][2] == 'X') {

        console.info(player2 + 'You Win!');
        gameMoves=9;
    }
    else if (boardValue[0][2] == 'X' && boardValue[1][1] == 'X' && boardValue[2][0] == 'X') {

        console.info(player2 + 'You Win!');
        gameMoves=9;
    }

    else {

        check1();
        drawCheck();
    }

}

//its a checker for player1
function check1() {
    if (boardValue[0][0] == 'O' && boardValue[0][1] == 'O' && boardValue[0][2] == 'O') {

        console.info(player1 + 'You Win!');
        gameMoves = 9;
    }
    else if (boardValue[1][0] == 'O' && boardValue[1][1] == 'O' && boardValue[1][2] == 'O') {

        console.info(player1 + 'You Win!');
        gameMoves = 9;
    }
    else if (boardValue[2][0] == 'O' && boardValue[2][1] == 'O' && boardValue[2][2] == 'O') {

        console.info(player1 + 'You Win!');
        gameMoves = 9;
    }
    else if (boardValue[0][0] == 'O' && boardValue[1][1] == 'O' && boardValue[2][2] == 'O') {
        console.info(player1 + 'You Win!');
        drawBoard();
    }
    else if (boardValue[0][0] == 'O' && boardValue[1][0] == 'O' && boardValue[2][0] == 'O') {
        console.info(player1 + 'You Win!');
        gameMoves = 9;
    }
    else if (boardValue[0][1] == 'O' && boardValue[1][1] == 'O' && boardValue[2][1] == 'O') {
        console.info(player1 + 'You Win!');
        gameMoves = 9;
    
    else if (boardValue[0][2] == 'O' && boardValue[1][2] == 'O' && boardValue[2][2] == 'O') {
        console.info(player1 + 'You Win!');
        gameMoves = 9;
    }
    else if (boardValue[0][0] == 'O' && boardValue[1][1] == 'O' && boardValue[2][2] == 'O') {
        console.info(player1 + 'You Win!');
        gameMoves = 9;
    }
    else if (boardValue[0][2] == 'O' && boardValue[1][1] == 'O' && boardValue[2][0] == 'O') {
        console.info(player1 + 'You Win!');
        gameMoves = 9;
    }
    
}
function compCheck() {
    if (boardValue[0][0] == 'X' && boardValue[0][1] == 'X' && boardValue[0][2] == 'X') {
        console.info(player2 + 'You Lose!');
        drawBoard();
    }
    else if (boardValue[1][0] == 'X' && boardValue[1][1] == 'X' && boardValue[1][2] == 'X') {
        console.info(player2 + 'You Lose!');
        drawBoard();
    }
    else if (boardValue[2][0] == 'X' && boardValue[2][1] == 'X' && boardValue[2][2] == 'X') {
        console.info(player2 + 'You Lose!');
        drawBoard();
    }
    else if (boardValue[0][0] == 'X' && boardValue[1][1] == 'X' && boardValue[2][2] == 'X') {
        console.info(player2 + 'You Lose!');
        drawBoard();
    }
    else if (boardValue[0][0] == 'X' && boardValue[1][0] == 'X' && boardValue[2][0] == 'X') {
        console.info(player2 + "You Lose!");
        drawBoard();
    }
    else if (boardValue[0][1] == 'X' && boardValue[1][1] == 'X' && boardValue[2][1] == 'X') {
        console.info(player2 + 'You Lose!');
        drawBoard();
    }
    else if (boardValue[0][2] == 'X' && boardValue[1][2] == 'X' && boardValue[2][2] == 'X') {
        console.info(player2 + 'You Lose!');
        drawBoard();
    }
    else if (boardValue[0][0] == 'X' && boardValue[1][1] == 'X' && boardValue[2][2] == 'X') {
        console.info(player2 + 'You Lose!');
        drawBoard();
    }
    else if (boardValue[0][2] == 'X' && boardValue[1][1] == 'X' && boardValue[2][0] == 'X') {
        console.info(player2 + 'You Lose!');
        drawBoard();
    }

    else {

        check1();
        drawCheck();
    }

}

//for nightmare
function nightMareMode() {
    var heading = 'WELCOME TO TIC TAC TOE GAME (Nightmare Mode)';
    console.log(heading);

    player1=prompt('Please enter your name: ');
    var gameOver = false;
    


    console.log(player1 + 'Your Sign is: O');
    console.log('Computer Sign is: X');
    while (gameOver) {
        if (turn) {

//unless we input correct value
            var validInput;
            input = prompt('Enter Your Move');
            validInput = inputValidator(input);
            if (validInput) {
                boardValue[x][y] = output;

                // game counter helpful for drawchecker.
                gameMoves++;
                turn = false;
                reDraw();
                check1();

            }
            else {
                trun = true;


            }
            }

        else {
            console.log('Computers turn');
            var check = true;
            while (check) {
                var X = Math.floor(Math.random() * 3);
                var Y = Math.floor(Math.random() * 3);
                var check = boardValue[x][y];
                if (check == " ") {
                    boardValue[x][y] = output;
                    reDraw();
                    compCheck();

                    gameMoves++;
                    check = false;
                }
            }
        }
    }
}

var heading = 'WELLCOME TO TIC TAC TOE GAME';

console.log(heading);


end:{

    NormalMode();
    console.log('Game Over');
    console.log('Do you want to play again?');
    var choice = prompt('Do you want to enter |Y/N|');
    if (choice == 'Y' || choice == 'y') {
        HardMode();
    }
    else {
        console.log("");
        break end;

    }

    console.log('Game Over');
    console.log('Do you want to play again?');
    var choice = prompt('Do you want to enter |Y/N|');
    if (choice == 'Y' || choice == 'y') {
        nightMareMode();
    }
    else {
        console.log('Thank you!');
        break end;
    }
}
console.log('Game Over');