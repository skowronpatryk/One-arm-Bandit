class Wallet {
    constructor(cash) {
        // Deklaracja początkowej wartości pieniędzy
        let _cash = cash;
        this.getCashValue = () => {
            return _cash;
        }

        this.checkCanSpin = (value) => {
            if (_cash > value) {
                return true;
            } else {
                return false;
            }
        }

        this.changeCash = (value, type) => {
            if (typeof value === 'number' && !isNaN(value)) {
                if (type == true) {
                    return _cash += value;
                } else if (type == false) {
                    return _cash -= value;
                } else {
                    throw new Error('Niepoprawny typ działania!');
                }
            } else {
                throw new Error('Wartość musi być numerem');
            }
        }
    }
}
