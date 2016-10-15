
function ajaxRequestValidator(input) {


    let hash = input.pop().split('');

    function validateToken(hash, token) {

        for(let i = 0; i < hash.length; i += 2){
            let neededOccurences = Number(hash[i]);
            let neededCharacter = hash[i + 1];

            if((token.match(new RegExp(neededCharacter, "g")) || []).length == neededOccurences){
                return true;
            }
        }
        return false;
    }

    for(let i = 0; i < input.length; i += 3){

        let methodPattern = /$Method: (GET|POST|PUT|DELETE)/g;
        let credentialsPattern = /Credentials: (Basic|Bearer) ([a-zA-Z0-9]+)/g;
        let contentPattern = /^Content: [a-zA-Z0-9.]+$/g;

        let methodMatch = methodPattern.exec(input[i]);
        let credentialsMatch = credentialsPattern.exec(input[i + 1]);
        let contentMatch = contentPattern.exec(input[i + 2]);

        let resultResponse = "";

        if(methodMatch && credentialsMatch && contentMatch){

            let method = methodMatch[1];

            let authenticationType = credentialsMatch[1];
            let authenticationToken = credentialsMatch[2];

            resultResponse = "Response–Method:" + method;

            switch (method){
                case 'GET':
                     resultResponse += "&Code:200&Header:" + authenticationToken ;
                    break;
                case 'POST':
                case 'PUT':
                case 'DELETE':
                    if(authenticationType == 'Basic'){
                        resultResponse += '&Code:401';
                    }else{
                        resultResponse += "&Code:200&Header:" + authenticationToken ;
                    }
                    break;
            }

            if(!validateToken(hash, authenticationToken)){
                resultResponse += "&Code:403"
            }

        }else {
            resultResponse = "Code:400";
        }

        console.log(resultResponse);
    }
}

let input = [
    'Method: GET',
    'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd.1782452.278asd',
    'Method: POST',
    'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    '2q'
];

ajaxRequestValidator(input);