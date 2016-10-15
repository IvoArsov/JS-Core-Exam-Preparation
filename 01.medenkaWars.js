
function medenkaWars(input) {
    let vitkorDealtDmg = 0;
    let naskorDealtDmg = 0;

    let vitkorConsecutiveAttacks = 0;
    let naskorConsecutiveAttacks = 0;

    let vitkorPrevDmg = Number.NEGATIVE_INFINITY;
    let naskorPrevDmg = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < input.length; i++){
        let currentInputLine = input[i].split(' ');

        let countOfMedenkas = Number(currentInputLine[0]);
        let medenkaType = currentInputLine[1];

        if(medenkaType == 'white'){
            let medenkaDmg = countOfMedenkas * 60;

            if(medenkaDmg == vitkorPrevDmg){
                vitkorConsecutiveAttacks++;
            }else {
                vitkorConsecutiveAttacks = 1;
            }

            if(vitkorConsecutiveAttacks == 2){
                vitkorDealtDmg += medenkaDmg * 2.75;
                vitkorPrevDmg = medenkaDmg * 2.75;
                vitkorConsecutiveAttacks = 0;
            }else{
                vitkorDealtDmg += medenkaDmg;
                vitkorPrevDmg = medenkaDmg;
            }

        }else{
            let medenkaDmg = countOfMedenkas * 60;

            if(medenkaDmg == naskorPrevDmg){
                naskorConsecutiveAttacks++;
            }else {
                naskorConsecutiveAttacks = 1;
            }

            if(naskorConsecutiveAttacks == 5){
                naskorDealtDmg += medenkaDmg * 4.5;
                naskorPrevDmg = medenkaDmg * 4.5;
                naskorConsecutiveAttacks = 0;
            }else{
                naskorDealtDmg += medenkaDmg;
                naskorPrevDmg = medenkaDmg;
            }
        }
    }

    if(vitkorDealtDmg > naskorDealtDmg){
        console.log("Winner - Vitkor");
        console.log("Damage - " + vitkorDealtDmg);
    }else{
        console.log("Winner - Naskor");
        console.log("Damage - " + naskorDealtDmg);
    }
}

medenkaWars(['2 dark medenkas',
            '1 white medenkas',
            '2 dark medenkas',
            '2 dark medenkas',
            '15 white medenkas',
            '2 dark medenkas',
            '2 dark medenkas']
);