// class = a blue print for creating objects
//          define what properties and methods they have
//          use a constructor for unique properties


class Player{
    score =0;

    pause(){
        console.log("You paused the game")
    }
    exit(){
        console.log("Ypu exited the game")
    }
}

const Player1 = new Player();
const Player2 = new Player();
const Player3 = new Player();
const Player4 = new Player();


Player1.score+= 1;

console.log(Player1.score);
console.log(Player2.score);

Player1.pause();
Player1.exit();