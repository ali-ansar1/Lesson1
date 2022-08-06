// // data types

// /*
//     1. undefined.
//     3. null
//     3. Numbers
//     4. String
//     5. object
//     6. DateTime

// */
// console.log(typeof (myVar));
// /**
//  * Integer = Int (in computer)
//  * fraction/decimal = Float (in computer)
//  */
// var num = 5;
// // var num2= 3.5;
// // console.log(num, num2);
// // console.log(typeof(num), typeof(num2));
// // console.log(Number.parseInt("2.3"));
// // console.log(Number.parseFloat("2.3"));

// // date time
// var currentTime = new Date();
// // console.log(currentTime, typeof(currentTime));
// // console.log(currentTime.toLocaleDateString(), currentTime.getTime());

// // object
var person1 = {
    name: "Mohd Danish",
    height: 5.9,
    dob: new Date(1995, 4, 20),
    age: function () {
        var now = new Date();
        var years =  now.getFullYear()  - this.dob.getFullYear();
        var months = now.getMonth() - this.dob.getMonth();

        return `${years} yrs. ${months} months.`;
    },
    hobbies : [
        "reading",
        "coding"
    ],
    family: {
        father: "Maqsood Alam",
        MotherName: "Nikhat Parveen",
        siblings: [
            {
                name: "zeba",
                relation: "sister"
            },
            {
                name: "gulzar",
                relation: "brother"
            }
        ]
    }
}

console.log(person1, typeof(person1));
// // console.log(person1.age());


// /** Using variables and their assignments */
// // 1. using variables.
// var num1 = 5;
// var num2 = 8;

// console.log(num1 + num2);

// // 2. assignments.
// console.log("Before assignment num1 is ", num1)
// num1 = num2;

// console.log("After assignment num1 is ", num1)


// // strings are immutable.
// var str1 = "The quick brown fox jumps over the lazy dog.";
// console.log(str1);
// str1 = str1.replace("quick", "slow");
// console.log(str1);

// var str2 = "this is string 2";
// // console.log(str2);
// // str2 = str1;
// // console.log(str2);
// // str1.slice(0, 1);
// // console.log(str2);
// // console.log(str1);


// var personA = {
//     firstname: "Jhon",
//     lastname: "Wick",
//     age: 22
// }


// var personB = personA;

// console.log(personA, personB);
// personA.firstname = "Danish";
// personA.age = 30;
// console.log(personA, personB);

// personB = {
//     firstname: personA.firstname,
//     lastname: personA.lastname,
//     age: personA.age
// }
// personA.firstname = "Jhon";
// console.log(personA, personB);

// var personC  = JSON.parse(JSON.stringify(personA));
// console.log(personA, personC);
// personA.firstname = "Jerry";
// console.log(personA, personC);
// console.log()


// function

var count = 1;
function functionName () {
    console.log(count++);
    return;
}

console.log(typeof(functionName), functionName);

var id = setInterval(() => {
    functionName();
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 10000);