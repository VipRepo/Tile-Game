import Player from './Player';

export default class Game {
    constructor(n) {
        console.log("Creating game");
        this.init(n);
        window.addEventListener("wow", () => {
                this.player.increaseScore();
                document.getElementById("score").innerText = this.player.getScore();
        });
    
    }

    init(n) {
        this.tiles = [];
        this.speed = 1000;
        this.createPlayers();
        this.createTiles(n);
        this.play();
    }

    createPlayers() {
       this.player = new Player('Vipul');
    }

    createTiles(n) {
        let tiles = [];
        let table = document.createElement('table');
        for(let i =0; i< n; i++) {
            let row = document.createElement('tr');
            table.appendChild(row);
            for(let j =0; j< n; j++) {
                let cell = document.createElement('td');
                let tile = this.createTile();
                this.tiles.push(tile);
                cell.appendChild(tile);
                row.appendChild(cell);
            }   
        }

        document.getElementsByTagName('body')[0].appendChild(table);
    }

    createTile() {
       return document.createElement('tile-box'); 
    }

    play() {
        let round = true;
        setInterval(() => {
            if(round) {
                round = false;

        let randomNumber = this.getRandomInt(0, this.tiles.length-1);
        let tile = this.tiles[randomNumber];
        let event = new Event('blinkOn');
        tile.dispatchEvent(event);

        setTimeout(() => {
            let event = new Event('blinkOff');
            tile.dispatchEvent(event);
            round = true;
        }, 800);
     }   
        }, this.speed)
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}