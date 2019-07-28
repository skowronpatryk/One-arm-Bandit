class Game {
    constructor(startMoney) {
        this.stats = new GameInfo();
        this.wallet = new Wallet(startMoney);

        this.gameNumber = document.querySelector('.gameNumber');
        this.winNumber = document.querySelector('.winNumber');
        this.loseNumber = document.querySelector('.loseNumber');
        this.bidInput = document.querySelector('.bid');
        this.leftCash = document.querySelector('.currentCash');
        this.lastResult = document.querySelector('.lastSpin');
        this.gameWindows = [...document.querySelectorAll('div.gameItem')];
        this.showInfoWindow = document.querySelector('.game-info');

        document.querySelector('.btn15').addEventListener('click', this.add15ToValue.bind(this));

        document.querySelector('.btn2').addEventListener('click', this.add2ToValue.bind(this));

        document.querySelector('.btn05').addEventListener('click', this.add05ToValue.bind(this));

        document.querySelector('.btnstart').addEventListener('click', this.startGame.bind(this));

        document.querySelector('.show-info').addEventListener('click', this.showInfo.bind(this));

        document.querySelector('.close-game-info').addEventListener('click', this.closeInfo.bind(this));

        this.render();
    }

    render(colors = ['gray', 'gray', 'gray','gray', 'gray', 'gray','gray', 'gray', 'gray'], money = this.wallet.getCashValue(), stats = [0, 0, 0], lastSpin = 0) {
        this.leftCash.textContent = money;
        this.lastResult.textContent = lastSpin;
        this.gameNumber.textContent = stats[0];
        this.winNumber.textContent = stats[1];
        this.loseNumber.textContent = stats[2];
        this.gameWindows.forEach((window, index) => {
            window.style.backgroundColor = colors[index];
        });
    }

    startGame() {
        const bid = Math.floor(this.bidInput.value);

        if (this.bidInput.value < 1) {
            return alert('Zwiększ stawkę!');
        }

        if (!this.wallet.checkCanSpin(bid)) {
            return alert('Nie masz wystarczjącej ilości środków!');
        }

        // POBIERANIE

        let spin = new Spin();
        let colors = spin.drawResult();
        let win = Results.checkWin(colors);
        let wonCash = Results.cashback(win, bid);

        this.stats.addNewResult(win, bid);
        this.wallet.changeCash(wonCash, win);

        this.render(colors, this.wallet.getCashValue(), this.stats.updateInfo(), win ? `Wygrałeś ${wonCash}$` : `Przegrałeś ${bid}$`);
    }

    add15ToValue() {
        let bid = Math.floor(this.bidInput.value)
        bid = (bid / 2) + bid;
        return this.bidInput.value = bid;
    }

    add2ToValue() {
        let bid = Math.floor(this.bidInput.value);
        bid = bid * 2;
        return this.bidInput.value = bid;
    }

    add05ToValue() {
        let bid = Math.floor(this.bidInput.value);
        bid = bid / 2;
        return this.bidInput.value = bid;
    }

    showInfo() {
        if (this.showInfoWindow.style.left !== 0) {
            this.showInfoWindow.style.left = '0px';
        }
    }

    closeInfo() {
        this.showInfoWindow.style.left = '-999px';
    }

}

const game = new Game(200); 