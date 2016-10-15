

function examResults(input){
    let courseForAvgPoints = input.pop();
    let averageForCourse = 0;
    let countOfSpecialCourse = 0;
    let finalAvg;


    for(let i = 0; i < input.length; i++){
        let currentLine = input[i].split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } ); // split by multiple white spaces

        let student = currentLine[0];
        let course = currentLine[1];
        let examPoints = Number(currentLine[2]);
        let courseBonuses = Number(currentLine[3]);
        let coursePoints;

        if(examPoints >= 100){
            coursePoints =  examPoints - (examPoints * 0.8);
        }

        if(coursePoints == undefined){
            coursePoints = 0;
        }



        coursePoints += courseBonuses;



        let grade = ((coursePoints / 80) * 4) + 2;

        let finalCoursePoint = Math.round(coursePoints * 100) / 100;
        let finalGrade = Math.round(grade * 100) / 100;

        if (finalGrade > 6){
            finalGrade = 6;
        }


        if(course == courseForAvgPoints){
            averageForCourse += examPoints;
            countOfSpecialCourse++;
        }

        finalAvg = averageForCourse / countOfSpecialCourse;

        let finalCoursePointStr = finalCoursePoint.toFixed(2).toString().replace(/\.?0+$/, ''); // removing trailing zeroes / (^\.?0+) this for leading zeroes

        let result = student + ': Exam - ' + '"' + course + '"; Points - ' + finalCoursePointStr + '; Grade - ' + finalGrade.toFixed(2);

        if(examPoints < 100){
            result = student + ' failed at "' + course + '"';
        }
        console.log(result);


    }
    let finalAvgStr = finalAvg.toFixed(2).toString().replace(/\.?0+$/, '');
    console.log('"' + courseForAvgPoints + '" average points -> ' + finalAvgStr);
}


let input = [
    'Bankin    HTML&CSS                0          0',
    'RoYaL        HTML5&CSS        340         10',
    'Bi0GaMe      Java   10    10',
    'Stamat HQC   190 10',
    'MINKA OOP   230 10',
    'Java'
];

examResults(input);