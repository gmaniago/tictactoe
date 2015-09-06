var prompt = require ('prompt-sync').prompt;

var turn = true;
var output='O';
var boardValue= [[" "," "," "],[" "," "," "],[" "," "," "]];
var input;
var index=[,];
var x;
var y;
var gameMoves=0;
var player1;
var player2;


//normal mode with two player
function NormalMode() {
// for heading and title
    var heading = 'WELCOME TO A GAME OF TIC TAC TOE!! (Normal Mode)';
    console.log(heading);
    underline('=', heading.length);
    player1 =prompt("Please Enter Your Name.");
    player2 =prompt("Please Enter Your Name.");
//function that draw an empty board
    drawBoard();

//game loop 
    while (gameMoves < 9) {
//turn chech with boolean variable if true then player1 make move else player 2
        if (turn) {
            var checker = true;
//unless we input correct value  
            while (checker) {
                console.log(player1 + "It's Your Turn!");
                output = 'O';
                input = prompt("Enter Your Move");
                try {
                    index = input.split(" ")
                }
                catch (err) {
                    console.info("Invalid input: you must enter the x and y coordinates separated by spaces");
                }
                // array start form 0 and our valur in board start form 1 so we decrement.
                x = parseInt(index[0]);
                y = parseInt(index[1]);
                x = x - 1;
                y = y - 1;
                if (x < 0 && x > 2 && y < 0 && y > 2) {
                    console.info("Invalid input: those coordinates are outside the playable area");
                }
                var check = boardValue[x][y];
                if (check == " ") {
                    boardValue[x][y] = output;

                    checker = false;
                    // game counter helpful for drawchecker.
                    gameMoves++;
                    turn = false;

                reDraw();
                check1();
                drawCheck()
                }
            else {
                    console.info("Invalid input: that space is already taken.");

                }
            }
        }
// for player 2 
        else {
            var checker = true;
            while (checker) {
                output = 'X';
                console.log(player2 + "It's Your Turn");

                input = prompt("Enter Your Move");

                try {
                    index = input.split(" ");
                }
                catch (err) {
                    console.info("Invalid input: you must enter the x and y coordinates separated by spaces");
                }
                x = parseInt(index[0]);
                y = parseInt(index[1]);
                x = x - 1;
                y = y - 1;
                if (x < 0 && x > 2 && y < 0 && y > 2) {
                    console.info("Invalid input: those coordinates are outside the playable area");

                }
                var check = boardValue[x][y];
                if (check == " ") {
                    boardValue[x][y] = output;
                    checker = false;
                    gameMoves++;

                    turn = true;


                    reDraw();
                    check2();
                    drawCheck()
                }
        else {
                console.info("Invalid input: that space is already taken.");

            }


        }


    }
}

