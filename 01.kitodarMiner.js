

function kitodarMiner(input){

    let silver = 0;
    let gold = 0; // always define a digit, array or object !!!
    let diamonds = 0;

    for(let i = 0; i < input.length; i++){
        let currentLine = input[i].split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } ); // split by multiple white spaces
        let mineName;
        let typeOfOre;
        let quantityOfOre;

        //TODO: split by specials simbols

        if(currentLine[1] != '-'){
            mineName = currentLine[1];
            typeOfOre = currentLine[3];
            quantityOfOre = Number(currentLine[4]);
        }else {
            typeOfOre = currentLine[2];
            quantityOfOre = Number(currentLine[3]);
        }

        console.log(typeOfOre);
        console.log(quantityOfOre);

        if(typeOfOre == "silver:"){
            silver += quantityOfOre;
        }
        if(typeOfOre == "diamonds:"){
            diamonds += quantityOfOre;
        }
        if(typeOfOre == "gold:"){
            gold += quantityOfOre;
        }


    }

    console.log("*Silver: " + silver);
    console.log("*Gold: " + gold);
    console.log("*Diamonds: " + diamonds);
}

let input = [
    'mine mina1 - silver:4',
    'mine mina2 - gold 					:			5',
    'mina nevaldna',
    'empty'
];

kitodarMiner(input);