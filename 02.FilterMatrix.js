

function filterMatrix(input) {
    let sequence = input.pop();
    let matrix = [];

    let equalsParts = [];
    
    for(let i = 0; i < input.length; i++){ //read matrix
        let currentLine = input[i].split(' ');

        matrix.push(currentLine);
    }


    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length - 1; col++){ // obtain foreach cell in matrix
            let currentCell = matrix[row][col];
            let nextCell = matrix[row][col + 1];

            if (currentCell === nextCell){
                equalsParts.push(currentCell);
                equalsParts.push(nextCell);
            }


            console.log("current " + currentCell);
            console.log("next " +  nextCell);
            console.log("equals " + equalsParts.join(','));
        }
    }

 //TODO:DON'T WORK YET
}


let input = [
    '1 2 3 3',
    '3 5 7 8',
    '3 2 2 1',
    '3'
];

filterMatrix(input);


function solve(arr) { //TODO: this work
    var targetLength = parseInt(arr.pop());
    var sequence = arr.join(' ').split(' ');

    var currentCount = 1;
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] === sequence[i + 1]) {
            currentCount++;
            if (currentCount == targetLength) {
                for (var k = i + 1; k > i + 1 - targetLength; k--) {
                    sequence[k] = false;
                }
                currentCount = 1;
            }
        } else {
            currentCount = 1;
        }
    }

    var resultArr = [];
    var index = -1;
    for (i = 0; i < arr.length; i++) {
        var currentRow = arr[i].split(' ');
        var outputRow = [];
        for (var j = 0; j < currentRow.length; j++) {
            if (sequence[++index] !== false) {
                outputRow.push(sequence[index]);
            }
        }
        resultArr.push(outputRow);
    }

    while(resultArr.length > 0) {
        var row = resultArr.shift();
        if (row.length > 0) {
            console.log(row.join(' '));
        } else {
            console.log('(empty)');
        }
    }
}