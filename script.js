// N1
// const numbersArray = [8, 27, 54, 15, 63];
// let sum = 0;

// function getSum(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         let sumOfNumbers = numbers[i];
//         sum += sumOfNumbers;
//     }
//     return sum;
// }
//     let result = getSum(numbersArray);
//     console.log(result);


// N2 სხვა ვერსია
// function greeting(name) {
//     if (age > 18){
//         alert(`Welcome to our website  ${name} `);
//     } else {
//         alert(`You don't have permission ${name}`);
//     }
// }
// function afterResult(callback) {
//     const age = prompt("Please tell us your age.");
//     callback(age)
// }

//     afterResult(greeting)

// N2

// function greeting(name) {
//     alert(`Welcome to our website ${name}`)
// }
// function userInfo(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name)
// }
//     userInfo(greeting)


// N3 

// function square(number) {
//     let squareOfNumber = 0;
//     squareOfNumber = Math.pow(number, 2)
//     return squareOfNumber
// }
//     const answer = square(15);
//     const resultElement = document.createElement("p");
//     resultElement.textContent = (`Square of 15 is ${answer}`);
//     document.body.appendChild(resultElement);


// N4 -?????

// const getPerson = (person) => {
//     return { ...person, status: "New", point: 40, age: 30}
// }
//     const student = {
//         name: "John",
//         age: 40,
//     }
//     getPerson(student);
//     console.log(student)
// N5

// function compare(x, y) {
//     if (x > y) {
//         return [`X is greater than Y`];
//     } else if (x < y) {
//         return [`Y is greater than X`];
//     } else {
//         return [`X is equal to Y`]
//     }
// }
// const numbers = compare(50, 50)
// console.log(numbers);


 
// N6

// let text = ("Welcome to Tbilisi");
// function getTextSize(text) {
//     if (text.length < 6) {
//         return 
//     }
// }
// console.log(text)

// N7 ???




// N8
// function arrayToString(array) {
//     return array.toString();
// }
// let numbersArray = [10, 20, 30, 40, 50];
// let result = arrayToString(numbersArray);
// console.log(result)


// N9

// function getName(name) {
//     const myName = document.createElement("p");
//     myName.textContent = name;
//     document.body.appendChild(myName);
// }   
//     getName("Giorgi")


// 10 ???

function getFullNameOnAlert() {
    const name = "Giorgi Khaziuri";
    alert(`Hello, ${name}`);


    let button = document.getElementById("click-button");
    button.addEventListener("click", () => {
        alert(`Hello ${name}`)
    })
}

