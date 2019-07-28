class Results {
    static cashback(result, bid) {
        if (result == 1) {
            return bid * 2;
        } else if (result == 2) {
            return bid * 100;
        } else {
            return bid;
        }
    }

    static checkWin(tab) {
        // if (tab[0] == 'green' && tab[1] == 'green' && tab[2] == 'green' || tab[0] == 'green' && tab[4] == 'green' && tab[8] == 'green' || tab[3] == 'green' && tab[4] == 'green' && tab[5] == 'green' || tab[6] == 'green' && tab[7] == 'green' && tab[8] == 'green' || tab[6] == 'green' && tab[4] == 'green' && tab[2] == 'green'){
        //     return 1;
        // } else if (tab[0] == 'blue' && tab[1] == 'blue' && tab[2] == 'blue' || tab[0] == 'blue' && tab[4] == 'blue' && tab[8] == 'blue' || tab[3] == 'blue' && tab[4] == 'blue' && tab[5] == 'blue' || tab[6] == 'blue' && tab[7] == 'blue' && tab[8] == 'blue' || tab[6] == 'blue' && tab[4] == 'blue' && tab[2] == 'blue') {
        //     return 2;
        // } else if (tab[0] == 'yellow' && tab[1] == 'yellow' && tab[2] == 'yellow' || tab[0] == 'yellow' && tab[4] == 'yellow' && tab[8] == 'yellow' || tab[3] == 'yellow' && tab[4] == 'yellow' && tab[5] == 'yellow' || tab[6] == 'yellow' && tab[7] == 'yellow' && tab[8] == 'yellow' || tab[6] == 'yellow' && tab[4] == 'yellow' && tab[2] == 'yellow') {
        //     return 3;
        // } else if (tab[0] == 'red' && tab[1] == 'red' && tab[2] == 'red' || tab[0] == 'red' && tab[4] == 'red' && tab[8] == 'red' || tab[3] == 'red' && tab[4] == 'red' && tab[5] == 'red' || tab[6] == 'red' && tab[7] == 'red' && tab[8] == 'red' || tab[6] == 'red' && tab[4] == 'red' && tab[2] == 'red'){
        //     return 4;
        // } else if (tab[0] == 'pink' && tab[1] == 'pink' && tab[2] == 'pink' || tab[0] == 'pink' && tab[4] == 'pink' && tab[8] == 'pink' || tab[3] == 'pink' && tab[4] == 'pink' && tab[5] == 'pink' || tab[6] == 'pink' && tab[7] == 'pink' && tab[8] == 'pink' || tab[6] == 'pink' && tab[4] == 'pink' && tab[2] == 'pink') {
        //     return 4;
        // } else if (tab[0] == 'brown' && tab[1] == 'brown' && tab[2] == 'brown' || tab[0] == 'brown' && tab[4] == 'brown' && tab[8] == 'brown' || tab[3] == 'brown' && tab[4] == 'brown' && tab[5] == 'brown' || tab[6] == 'brown' && tab[7] == 'brown' && tab[8] == 'brown' || tab[6] == 'brown' && tab[4] == 'brown' && tab[2] == 'brown') {
        //     return 4;
        // } else {
        //     return false;
        // }

        if (tab[0] == 'green' && tab[1] == 'green' && tab[2] == 'green' && tab[3] == 'green' || tab[4] == 'green' && tab[5] == 'green' && tab[6] == 'green' && tab[7] == 'green' || tab[8] == 'green' && tab[9] == 'green' && tab[10] == 'green' && tab[11] == 'green') {
            return 2;
        } else if (tab[0] == 'red' && tab[1] == 'red' && tab[2] == 'red' && tab[3] == 'red' || tab[4] == 'red' && tab[5] == 'red' && tab[6] == 'red' && tab[7] == 'red' || tab[8] == 'red' && tab[9] == 'red' && tab[10] == 'red' && tab[11] == 'red') {
            return 2;
        } else if (tab[0] == 'yellow' && tab[1] == 'yellow' && tab[2] == 'yellow' && tab[3] == 'yellow' || tab[4] == 'yellow' && tab[5] == 'yellow' && tab[6] == 'yellow' && tab[7] == 'yellow' || tab[8] == 'yellow' && tab[9] == 'yellow' && tab[10] == 'yellow' && tab[11] == 'yellow') {
            return 2;
        } else if (tab[0] == 'blue' && tab[1] == 'blue' && tab[2] == 'blue' && tab[3] == 'blue' || tab[4] == 'blue' && tab[5] == 'blue' && tab[6] == 'blue' && tab[7] == 'blue' || tab[8] == 'blue' && tab[9] == 'blue' && tab[10] == 'blue' && tab[11] == 'blue') {
            return 2;
        } else if (tab[0] == 'pink' && tab[1] == 'pink' && tab[2] == 'pink' && tab[3] == 'pink' || tab[4] == 'pink' && tab[5] == 'pink' && tab[6] == 'pink' && tab[7] == 'pink' || tab[8] == 'pink' && tab[9] == 'pink' && tab[10] == 'pink' && tab[11] == 'pink') {
            return 2;
        } else if (tab[0] == 'black' && tab[1] == 'black' && tab[2] == 'black' && tab[3] == 'black' || tab[4] == 'black' && tab[5] == 'black' && tab[6] == 'black' && tab[7] == 'black' || tab[8] == 'black' && tab[9] == 'black' && tab[10] == 'black' && tab[11] == 'black') {
            return 2;
        } else if (tab[0] == 'green' && tab[1] == 'green' && tab[2] == 'green' || tab[4] == 'green' && tab[5] == 'green' && tab[6] == 'green' || tab[8] == 'green' && tab[9] == 'green' && tab[10] == 'green' || tab[0] == 'green' && tab[5] == 'green' && tab[10] == 'green' || tab[8] == 'green' && tab[5] == 'green' && tab[2] == 'green') {
            return 1;
        } else if (tab[0] == 'red' && tab[1] == 'red' && tab[2] == 'red' || tab[4] == 'red' && tab[5] == 'red' && tab[6] == 'red' || tab[8] == 'red' && tab[9] == 'red' && tab[10] == 'red' || tab[0] == 'red' && tab[5] == 'red' && tab[10] == 'red' || tab[8] == 'red' && tab[5] == 'red' && tab[2] == 'red') {
            return 1;
        } else if (tab[0] == 'yellow' && tab[1] == 'yellow' && tab[2] == 'yellow' || tab[4] == 'yellow' && tab[5] == 'yellow' && tab[6] == 'yellow' || tab[8] == 'yellow' && tab[9] == 'yellow' && tab[10] == 'yellow' || tab[0] == 'yellow' && tab[5] == 'yellow' && tab[10] == 'yellow' || tab[8] == 'yellow' && tab[5] == 'yellow' && tab[2] == 'yellow') {
            return 1;
        } else if (tab[0] == 'blue' && tab[1] == 'blue' && tab[2] == 'blue' || tab[4] == 'blue' && tab[5] == 'blue' && tab[6] == 'blue' || tab[8] == 'blue' && tab[9] == 'blue' && tab[10] == 'blue' || tab[0] == 'blue' && tab[5] == 'blue' && tab[10] == 'blue' || tab[8] == 'blue' && tab[5] == 'blue' && tab[2] == 'blue') {
            return 1;
        } else if (tab[0] == 'pink' && tab[1] == 'pink' && tab[2] == 'pink' || tab[4] == 'pink' && tab[5] == 'pink' && tab[6] == 'pink' || tab[8] == 'pink' && tab[9] == 'pink' && tab[10] == 'pink' || tab[0] == 'pink' && tab[5] == 'pink' && tab[10] == 'pink' || tab[8] == 'pink' && tab[5] == 'pink' && tab[2] == 'pink') {
            return 1;
        } else if (tab[0] == 'black' && tab[1] == 'black' && tab[2] == 'black' || tab[4] == 'black' && tab[5] == 'black' && tab[6] == 'black' || tab[8] == 'black' && tab[9] == 'black' && tab[10] == 'black' || tab[0] == 'black' && tab[5] == 'black' && tab[10] == 'black' || tab[8] == 'black' && tab[5] == 'black' && tab[2] == 'black') {
            return 1;
        } else {
            return false;
        }
    }
}