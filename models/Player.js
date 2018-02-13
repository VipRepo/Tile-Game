export default class Player {
    constructor(name) {
        this.score = 0;
        this.name = name;
    }

    increaseScore() {
        console.log("Increasing score");
        this.score++;
    }

    decreaseScore() {
        console.log("Decreasing score");
        this.score--;
    }

    getScore() {
        return this.score;
    }
}