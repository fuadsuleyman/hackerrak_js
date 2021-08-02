// passed 100%

// task link
// https://www.hackerrank.com/challenges/two-characters/problem

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Length of string: ", function(len) {
    rl.question("Enter string: ", function(myStr) {
        console.log(`length: ${len}, string: ${myStr}`);
   
        // only check this string alternate or not
        const isAlternate = (s) => {
            // console.log(`inside of isAlternate: ${s}`)
            // firstLetter = s.chatAt[0];
            // secondLetter = s.chatAt[1];
            let flag = true;
            for (let i = 0; i < s.length; i++) { 
                if (i+1 !== s.length){
                    if (s[i] === s[i+1]){
                        flag = false;
                    }
                }
            }
            return flag;
        }
        
        // check below function
        // const result = isAlternate(myStr);
        // console.log(`Is this string alternate: ${result}`)

        // add letters of string to array which don't repeat //////
        const getArrayOfLetters = (s) => {
            const myArr = [];
            const firstLetter = s.charAt(0);
            myArr.push(firstLetter);
            for (let i of s){
                let inArray = false;
                for (let k of myArr) {
                    if (k === i){
                        inArray = true
                    }
                }
                if (inArray === false){
                    myArr.push(i);
                }
            }
            // console.log(`first letter: ${firstLetter}`)
            return myArr;
        }
        
        // checking below function
        // const result = getArrayOfLetters(myStr);
        // console.log(`getArrayOfLetters: ${result}`)


        // create combinations //////
        // const combineResultArr = []
        // const result = [];
        // result.length = 2;
        // function combine(input, len, start) {
        // if(len === 0) {
        //     console.log( result.join("-") ); //process here the result
        //     combineResultArr.push(result.join("-"));
        //     return;
        // }
        // for (let i = start; i <= input.length - len; i++) {
        //     result[result.length - len] = input[i];
        //     combine(input, len-1, i+1 );
        // }
        // }
        // testing below function
        // const exampleArr = ['a','b','e','f'];
        // combine(exampleArr, result.length, 0);
        // console.log('Combines: ' + combineResultArr);


        // return length of conbinations which we want remove //////
        const getLengthOfCombinatins = (arr) => {
            if(arr.length > 2){
                let len = arr.length;
                return len - 2;
            }
            return 0;
        }

        // checking below function
        // const exampleArr = ['a', 'b', 'e', 'f', 'c', 'd'];
        // const result = getLengthOfCombinatins(exampleArr);
        // console.log('comLEN: ' + result);
        
        // remove combine letters from word then check if alternate add this to array of alternArr //////
        const getAlternArray = (s, combineResultArr) => {
            const alternArr = []
            
            for (let i of combineResultArr){
                let tempI = i.split('-').join('');
                // console.log('- after removeing -: ' + tempI);
                let tempStr = s;
                let newStr = ''
                for (let k of tempI) {
                    // console.log('k: ' + k)
                    newStr = tempStr.split(k).join('');
                    tempStr = newStr;
                    // console.log('sildikce tempStr: ' + newStr)
                }
                // console.log(`combinasiyani silenden sonra: ${newStr}`)
                let flag = isAlternate(tempStr);
                // console.log('flag: ' + flag);
                if (flag){
                    alternArr.push(tempStr)
                }
                // console.log('---------------------------------------------')
                
            }
            return alternArr;
        }

        // check below function
        // let myString = 'beabeefeab';
        // let combRes = ['a-b', 'a-e', 'a-f', 'b-e', 'b-f', 'e-f'];
        // const resultArr = getAlternArray(myString, combRes);
        // console.log(resultArr);


        // final result function //////
        const getFinalResult = (arr) => {
            if(arr.length === 0) {
                return 0;
            }
            const lenArr = []
            for (let i of arr) {
                lenArr.push(i.length);
            }
            lenArr.sort(function(a, b){
                return a - b;
            })
            return lenArr[lenArr.length-1]
        }

        // const examyArr = []
        // const finRes = getFinalResult(examyArr);
        // console.log('Final res: ' + finRes);


        function alternate(s) {
            if (s.length === 1){
                return 0
            }
            const arrayOfLetters = getArrayOfLetters(s); // 1 step
            const LengthOfCombinatins = getLengthOfCombinatins(arrayOfLetters); // 2 step
            
            const combineResultArr = []
            const result = [];
            result.length = LengthOfCombinatins;
            function combine(input, len, start) {
                if(len === 0) {
                    // console.log( result.join("-") ); //process here the result
                    combineResultArr.push(result.join("-"));
                    return;
                }
                for (let i = start; i <= input.length - len; i++) {
                    result[result.length - len] = input[i];
                    combine(input, len-1, i+1 );
                }
            }
            combine(arrayOfLetters, result.length, 0) // 3 step
            const alternesArr = getAlternArray(s, combineResultArr) // 4 step
            const last_result = getFinalResult(alternesArr) // 5 step
            return last_result
        }
        
        const lastResult = alternate(myStr);
        console.log(`Result: ${lastResult}`) 
        
        rl.close();
    });
});

rl.on("close", function() {
    // console.log("\nBYE BYE !!!");
    process.exit(0);
});


// // const l = parseInt(prompt().trim(), 10);
// const s = prompt();

// // const result = alternate(s);
// alternate(s)

// function alternate(s) {
//     // Write your code here
//     // console.log(`You entered integer: ${l}`)
//     console.log(`You entered string: ${s}`)
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const l = parseInt(readLine().trim(), 10);

//     const s = readLine();

//     const result = alternate(s);

//     ws.write(result + '\n');

//     ws.end();
// }


// sequence
// 1. getArrayOfLetters witch don't repeat
// 2. getLengthOfCombinatins
// 3. combine
// 4. getAlternArray(inside use isAlternate)
// 5. getFinalResult