class GameInfo {
    constructor() {
        this.results = [];
    }

    addNewResult(win, bid) {
        let result = {
            win: win,
            bid: bid
        }

        console.log(result);
        this.results.push(result);
    }

    updateInfo() {
        // Aktualizacja warunków gry
        let games = this.results.length;
        // Jeśli wartość THIS.element.WIN = true, czyli WIN = 1
        let winGames = this.results.filter(result => result.win).length;
        let loseGames = this.results.filter(result => !result.win).length;
        return [games, winGames, loseGames];
    }
}
