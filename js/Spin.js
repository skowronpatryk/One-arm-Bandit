class Spin {
    constructor() {
        this.possibilites = ['green', 'yellow', 'red', 'blue'];
        let _result = this.drawResult();
        this.getResult = () => {
            return _result;
        }
    }

    drawResult() {
        let colors = [];
        for (let i = 0; i < 12; i++) {
            const index = Math.floor(Math.random() * this.possibilites.length);
            let color = this.possibilites[index];
            colors.push(color);
        }
        
        return colors;
    }
}