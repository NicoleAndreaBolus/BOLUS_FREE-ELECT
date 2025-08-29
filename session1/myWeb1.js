// Normal Variable Declaration
$name = "Colin";
console.log($name);

// Using 'var'
var $lname = "Vinuya";
console.log($lname);

// Using 'let'
let $mySal = 25000;
    $mySal = 50000; // Re-assigning a new value (this will overwrite the previous value)

let $Address = "San Fernando City, Pampanga";

// Using 'const'

const pi = 3.1415;
console.log(pi);

// Concatenation
let fullName = $name + " " + $lname;
console.log("Hello, " + fullName + "!");
console.log("Hello, " + $name + ". How are you?");

// ------ Output ------
console.log("Hello, BSIT 3B!");
console.log("Welcome to our JavaScript Class!");
document.getElementById("myAddress").innerHTML = $Address;
console.log($mySal);


