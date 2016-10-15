

function bunnyKill(input){
    let bombBunnies = input.pop().split(' ');

    let matrix = [];




    function isInMatrix(matrix, row, col) { // check is in coordinates are in matrix
        if((row >= 0 && row < matrix.length)
        && col >= 0 && col < matrix[row].length){
            return true;
        }

        return false;

    }

    function explode(matrix, bombRow, bombCols, bombDamage){
        for(let row = bombRow - 1; row <= bombRow + 1; row++){ // obtain a row of matrix
            for(let col = bombCols - 1; col <= bombCols + 1; col++){ // obtain a col of matrix
                if(isInMatrix(matrix, row, col)) {
                    matrix[row][col] -= bombDamage;
                }
            }
        }

        return matrix;
    }

    for(let i = 0; i < input.length; i++){
        let currentRow = input[i].split(' ').map((x) => Number(x));

        matrix.push(currentRow);
    }

    let snowballDamage = 0;
    let snowballKills = 0;

    for(let i = 0; i < bombBunnies.length; i++){
        let currentBombBunny = bombBunnies[i].split(',')
            .map((x) => Number(x));

        let bombRow = currentBombBunny[0];
        let bombCol = currentBombBunny[1];

        let bombDamage = matrix[bombRow][bombCol];



        if(bombDamage > 0) {
            snowballDamage += bombDamage;
            snowballKills++;

            matrix = explode(matrix, bombRow, bombCol, bombDamage);
        }
    }

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){ // full obtain of matrix, row by row, col by col
            let currentCell = matrix[row][col];

            if(currentCell > 0){
                snowballDamage += currentCell;
                snowballKills++;
            }
        }
    }

    console.log(snowballDamage);
    console.log(snowballKills);
}


let input = [
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
];

bunnyKill(input);