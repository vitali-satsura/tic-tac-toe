class TicTacToe {
    constructor() {
        this.field = [];
        this.field[0] = [];
        this.field[1] = [];
        this.field[2] = [];
        this.flag = true;
    }

    getCurrentPlayerSymbol() {
        if (this.flag) {

            return 'x';
        } else {

            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex) == null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.flag = !this.flag;
        }

    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        if ((this.field[0][0] == 'x' && this.field[0][1] == 'x' && this.field[0][2] == 'x') ||
            (this.field[1][0] == 'x' && this.field[1][1] == 'x' && this.field[1][2] == 'x') ||
            (this.field[2][0] == 'x' && this.field[2][1] == 'x' && this.field[2][2] == 'x') ||
            (this.field[0][0] == 'x' && this.field[1][0] == 'x' && this.field[2][0] == 'x') ||
            (this.field[0][1] == 'x' && this.field[1][1] == 'x' && this.field[2][1] == 'x') ||
            (this.field[0][2] == 'x' && this.field[1][2] == 'x' && this.field[2][2] == 'x') ||
            (this.field[0][0] == 'x' && this.field[1][1] == 'x' && this.field[2][2] == 'x') ||
            (this.field[2][0] == 'x' && this.field[1][1] == 'x' && this.field[0][2] == 'x')) {
            return 'x';
        }
        if ((this.field[0][0] == 'o' && this.field[0][1] == 'o' && this.field[0][2] == 'o') ||
            (this.field[1][0] == 'o' && this.field[1][1] == 'o' && this.field[1][2] == 'o') ||
            (this.field[2][0] == 'o' && this.field[2][1] == 'o' && this.field[2][2] == 'o') ||
            (this.field[0][0] == 'o' && this.field[1][0] == 'o' && this.field[2][0] == 'o') ||
            (this.field[0][1] == 'o' && this.field[1][1] == 'o' && this.field[2][1] == 'o') ||
            (this.field[0][2] == 'o' && this.field[1][2] == 'o' && this.field[2][2] == 'o') ||
            (this.field[0][0] == 'o' && this.field[1][1] == 'o' && this.field[2][2] == 'o') ||
            (this.field[2][0] == 'o' && this.field[1][1] == 'o' && this.field[0][2] == 'o')) {
            return 'o';
        }

        return null;

    }

    noMoreTurns() {
        let count = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.getFieldValue(i, j) == null) {
                    count++;
                }
            }
        }

        if (count === 0) return true;
        return false;
    }

    isDraw() {
        if (this.getWinner() == null && this.noMoreTurns()) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.field[rowIndex][colIndex] == 'x' || this.field[rowIndex][colIndex] == 'o') {
            return this.field[rowIndex][colIndex];
        } else {
            return null;
        }
    }
}

module.exports = TicTacToe;
