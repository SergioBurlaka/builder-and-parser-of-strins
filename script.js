

var zero = ' – \n| |\n| |\n| |\n – \n';
/*
    –
   | |
   | |
   | |
    –
*/
var one = ' | \n | \n | \n | \n | \n';
/*
    |
    |
    |
    |
    |
*/
var two = ' – \n  |\n – \n|  \n – \n';
/*
    –
     |
    –
   |
    –
*/
var three = ' – \n  |\n – \n  |\n – \n';
/*
    –
     |
    –
     |
    –
*/
var four = '| |\n| |\n – \n  |\n  |\n';
/*
   | |
   | |
    –
     |
     |
 */
var five = ' – \n|  \n – \n  |\n – \n';
/*
    –
   |
    –
     |
    –
*/
var six = ' – \n|  \n – \n| |\n – \n';
/*
    –
   |
    –
   | |
    –
*/

var seven = '–– \n  |\n  |\n  |\n  |\n';
/*
  ––
    |
    |
    |
    |
*/
var eight  = ' – \n| |\n – \n| |\n – \n';
/*
    –
   | |
    –
   | |
    –
*/
var nine  = ' – \n| |\n – \n  |\n – \n';
/*
    –
   | |
    –
     |
    –
*/

var matchingNumbers = {
    0:' – \n| |\n| |\n| |\n – \n',
    1:' | \n | \n | \n | \n | \n',
    2:' – \n  |\n – \n|  \n – \n',
    3:' – \n  |\n – \n  |\n – \n',
    4:'| |\n| |\n – \n  |\n  |\n',
    5:' – \n|  \n – \n  |\n – \n',
    6:' – \n|  \n – \n| |\n – \n',
    7:'–– \n  |\n  |\n  |\n  |\n',
    8:' – \n| |\n – \n| |\n – \n',
    9:' – \n| |\n – \n  |\n – \n'
};

// building string

    function findIndexesOfLineFeed(str) {
        var arrOfIndexes = [];
        for(var i=0; i < str.length; i++){
            if(str[i] == '\n'){
                arrOfIndexes.push(i);
            }
        }
        return arrOfIndexes;
    }



    function sliceString(arr, stringForSlicing) {
        var arrOfStrings = [];

        for (var i = 0; i < arr.length; i++) {
            if (i == 0) {
                arrOfStrings.push(stringForSlicing.slice(0, arr[0]));
                continue
            }

            arrOfStrings.push(stringForSlicing.slice(arr[i-1]+1, arr[i]));
        }

        return arrOfStrings

    }




    function sumStringToArr(arrOfStrings) {

        var tempStrArr = [];

        for(var i =0 ; i < arrOfStrings.length; i++){
            var lineFeedInStrArr = findIndexesOfLineFeed(arrOfStrings[i]);
            var arrFinish = sliceString(lineFeedInStrArr, arrOfStrings[i]);
            if( i == 0){
                tempStrArr = arrFinish;
                continue
            }

            for(var j = 0; j < tempStrArr.length; j++ ){
                tempStrArr[j] = tempStrArr[j] + arrFinish[j];
            }

        }

        return buildString(tempStrArr);

    }


    function buildString(arr) {
        var str = '';
        for(var i = 0; i< arr.length; i++){
            str = str + arr[i]+'\n'
        }

        return str
    }

    // 708932
    var newString  = [seven, zero, eight, nine, three, two];

    var resultOfStringBuild = sumStringToArr(newString);
    console.log(resultOfStringBuild);

    /*
   ––  –  –  –  –  –
     || || || |  |  |
     || | –  –  –  –
     || || |  |  ||
     | –  –  –  –  –

     */



    // parsing string

    function parseStringBylines(str) {
        var arrOfLines = [];
        var startIndex = 0;
        for(var i=0; i < str.length; i++ ){
            if(str[i] == '\n'){
                arrOfLines.push(str.slice(startIndex, i ));
                startIndex = i+1;
            }
        }

        return arrOfLines;
    }


    
    function parseLineBySigns(str, lengthOfSign) {
        var arrOfSigns = [];
        var startOfSlicing = 0;
        for(var i=0; i <= str.length; i++){
            if(i % lengthOfSign == 0 && i !== 0){
                arrOfSigns.push(str.slice(startOfSlicing,i));
                startOfSlicing = i;
            }
        }
        return arrOfSigns;
    }



    function buildSignsFromLines(arrFirst, arrSecond) {

        for(var i=0; i < arrSecond.length; i++){
            arrSecond[i] = arrSecond[i] + arrFirst[i]+ '\n';
        }

    }

    function compareString(objectOfNumbers, string) {

        for(var key in objectOfNumbers ){

            if(objectOfNumbers.hasOwnProperty(key)
                && objectOfNumbers[key] == string){
                return key
            }

        }
    }



    function changeSignToNumber(objectOfNumbers, arrOfSigns) {
        var arrOfNumbers = [];
        for(var i=0; i < arrOfSigns.length; i++){
            var tempStr = arrOfSigns[i];
            arrOfNumbers.push(compareString(objectOfNumbers, tempStr));
        }
        return arrOfNumbers;
    }


    function initArrOfSigns(arrLines, lengthOfSign) {
        var arrForSigns = [];
        for(var i=0; i< arrLines[0].length; i++){
            if(i % lengthOfSign == 0 ){
                arrForSigns.push('')
            }
        }
        return arrForSigns;
    }


    function getNumbersFromString(str, widthOfSign) {

        var arrLines = parseStringBylines(str);
        var arrOfSigns = initArrOfSigns(arrLines, widthOfSign);

        for (var i = 0; i < arrLines.length; i++) {

            var tempArrOfSigns = parseLineBySigns(arrLines[i], widthOfSign);
            buildSignsFromLines(tempArrOfSigns, arrOfSigns)
        }

        return changeSignToNumber(matchingNumbers, arrOfSigns);

    }



    var widthSign = 3;

    console.log(getNumbersFromString(resultOfStringBuild, widthSign));

    //  ["7", "0", "8", "9", "3", "2"]
