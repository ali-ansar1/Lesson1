//1 .For loop


// for(var i=0; i < 10; i++) {
//     console.log(i);
// }


// for (var index = 0, j = 2; index < 10; index++, j++) {
//     console.log(index, j);
// }

// for(var i=10; i > 0;  i--) {
//     console.log(i);
// }


var data = [
    {
        name: "Mohd danish",
        age: 23,
        isEmployed: true
    },
    {
        name: "Ali Ansari",
        age: 25,
        isEmployed: true
    },
    {
        name: "Mohd Gulzar",
        age: 33,
        isEmployed: false
    },
    {
        name: "Saddam Hussain",
        age: 22,
        isEmployed: false
    }
    
]
// for(let index = 0; index  < data.length; index++) {
//     var h3 = document.createElement('h3');
//     h3.innerText = (index + 1) + ". " + data[index];
//     document.body.append(h3);
// }

// var tbody = document.getElementById("table-body");
// for(let index= 0; index < data.length; index++) {
//     var tr = document.createElement("tr");
    
//     var td1 = document.createElement("td");
//     td1.innerText = index + 1;
//     var td2 = document.createElement("td");
//     td2.innerText = data[index].name;
//     var td3 = document.createElement("td");
//     td3.innerText = data[index].age;
//     var td4 = document.createElement("td");
//     td4.innerText = data[index] ? "Yes" : "No";
    
//     tr.append(td1);
//     tr.append(td2);
//     tr.append(td3);
//     tr.append(td4);
//     tbody.append(tr);
// }
    
var tbody = document.getElementById("table-body");
var index = 0;
while(index < data.length) {
    var tr = document.createElement("tr");
    
    var td1 = document.createElement("td");
    td1.innerText = index + 1;
    var td2 = document.createElement("td");
    td2.innerText = data[index].name;
    var td3 = document.createElement("td");
    td3.innerText = data[index].age;
    var td4 = document.createElement("td");
    td4.innerText = data[index] ? "Yes" : "No";
    
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tbody.append(tr);
    index++;
}
    