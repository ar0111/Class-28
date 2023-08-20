let price = 50;
price = 60;

// console.log(price);

// const numbers = [10, 20, 30, 50, 70];
// numbers = [100, 50, 90];
// console.log(numbers);

let total = 0;
// for(i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     // console.log(element);
//     total += element;
// }

// console.log(total);

const student = {
    roll: 100,
    name: 'Arafat',
    job: 'Journalist'
}

// student = {
//     roll: 101,
//     name: 'Arafat',
//     job: 'Journalist'
// }

// function add(num1, num2 = 0){
    // if(num2 == undefined){
    //     num2 = 0;
    // }

    // num2 = num2 || 0;
    // return num1 + num2;
// }

// const result = add(20);
// console.log(result);

const singer = "Ayyub Baccu";
const meye = "meye tumi ki dukko chino";
const kobita = "kobita tumi shopno charini";

const multiple = singer + '\n' + meye + '\n' + kobita;
// console.log(multiple);

const multipleNew = `Ayyub Baccu
meye tumi ki dukko chino
kobita tumi shopno charini
`

// console.log(multipleNew);

const multipleNew2 = `${singer}
${meye}
${kobita}
`

// console.log(multipleNew2);

const names = ["arafat", 'rahim', 'karim'];
const count = 3;
const old = '<h1 class="design">' + count + '</h1';

// console.log(old);

const new2 = `<h1 class="design">' + ${names.length} + '</h1'`;

// console.log(new2);

const first = "Arafat";
const last = "Rahman";

const fullOld = first + last;
// console.log(fullOld);
// console.log(`Md ${first} ${last}`);

// function add(num1, num2){
//     return num1 + num2;
// }

// console.log(add(20, 30));

const add2 = function add(num1, num2){
    return num1 + num2;
}

const add3 = function (num1, num2){
    return num1 + num2;
}

const add4 = (num1, num2) => num1 + num2;


// const result = add2(20, 30);
// const result = add3(20, 30);
const result = add4(20, 30);
// console.log(result);

// const add = (num1, num2, num3) => num1 + num2 + num3;
// const sum = add(60, 40, 60);

// const add = (num1) => num1 * 5;
// const sum = add(5);

// const getName = () => "Arafat Rahman";

const doMath = (x, y) =>{
    const diff = x - y;
    const sum = x + y;
    const result = diff * sum;

    return result;
}

// console.log(doMath(20, 10));

const numbers = [12, 20, 30, 50, 600, 800, 900];

// console.log(numbers);
// console.log(...numbers);

const max = Math.max(12, 50, 60, 90, 52, 63, 10, 9);

// console.log(max);

const maxArrayNumber = Math.max(...numbers);
console.log(maxArrayNumber);

let max2 = 0;

for(const number of numbers){
    if(number > max2) {
        max2 = number;
    }
}

// console.log(max2);

