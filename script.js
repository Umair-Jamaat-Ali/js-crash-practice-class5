// Array practice


let month = ["January", "Februrary", "March", "April", "May", "August", "December"];
month.shift(); // Removed first index

console.log(month, length);


let month1 = ["January", "Februrary", "March", "April", "May", "August","Jun", "July", "December"];

month1.unshift("Janu"); // Add first index 

console.log(month1, length);


let month2 = ["January", "Februrary", "March", "April", "May", "August","Jun", "July", "December"];

month2.push("November"); // adds one or more elements to the end of an array

console.log(month2);


let month3 = ["January", "Februrary", "March", "April", "May", "August","Jun", "July", "December"];

month3.pop(); //  removes the last element from an array and returns it

console.log(month3);



let month4 = ["January", "Februrary", "March", "April", "May", "August","Jun", "July", "December"];

month4.splice(2, 6);  // removes elements from an array at a specific index

console.log(month4);


let month5 = ["January", "Februrary", "March", "April", "May", "August","Jun", "July", "December"];


month5.splice(2 , 4 , "Umair");   // adds elements from an array at a specific index
console.log(month5);


let month6 = ["January", "Februrary", "March", "April", "May", "August","Jun", "July", "December"];
// forEach... loops through array values,,, yeh k ander sb values ko chalata hy...
month6.forEach( function (month6, index) {
    console.log(month6, index);
});


let month7 = ["January", "Februrary", "March", "April", "May", "August","Jun", "July", "December"];

// slice

let newMonth = month7.slice(0, 3); // returns a new array that is a subset of an existing array
console.log(newMonth);


let month8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// filter k liay hum hamesha new variable mein istimal kr skty hain,,, or function mein istimal huta hy
// filter mein hum ksi cheez ko dhondny k liay istimal krty hain... 

let newMonth1 = month8.filter(function (month8) {
    // ia pory if k bijay hum short way b istimal kr skty hain..
    return month8 % 2 === 0;
    
    // if(month8 % 2 === 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
});
console.log(newMonth1, month8);

// sort.... arrange the order or re-arrange the order


let month9 = [1, 2, 3,17, 4, 0, 13, 5, 6, 7, 8, 9, 10, 11, 12];
let newMonth9= month9.sort(function (a, b) {
    if( a > b){
        return 1;
    }
    else{
        return -1;
    }
});
console.log(month9);
console.log(newMonth9);


// Reduce.. is used to add value in array . this value may be number or string


let month10 = [1, 2, 3,17, 4, 0, 13, 5, 6, 7, 8, 9, 10, 11, 12];

let newMonth10 = month10.reduce(function (preValue, currValue){
return preValue + currValue;
},0 );
console.log(newMonth10);


let birCeleb = ["Happy", "Birthday", "May", "You", "Live", "Long"];
let newBir = birCeleb.reduce(function (preVal, curVal) {
    return preVal + " " + curVal
});

console.log(newBir);


// map function to double the values of array elements....
// is ko hum ksi number ko ksi digit k sth multiply krny k liay used krty hain



let month11 = [1, 2, 3,17, 4, 0, 13, 5, 6, 7, 8, 9, 10, 11, 12];

let newMonth11 = month11.map((month11) => month11 * 3);
console.log(newMonth11);

// concat... is used to merges the two or more array

let merge = birCeleb.concat(month11);
console.log(merge);

//

