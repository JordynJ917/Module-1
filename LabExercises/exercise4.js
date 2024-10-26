//This function returns the sum of two numbers
function add(a, b) {
    return a + b;
}
if (add(4,8) != 12) throw error("addition failed test #1");
if (add(6,-4) != 2) throw error("addition failed test #2"); 
if (add(150,155) != 305) throw error("addition failed test #3");

//This function returns the difference of two numbers
function subtract(a,b) {
    return a - b;
}
if (subtract(10,6) != 4) throw error("subtraction failed test #1");
if (subtract(16,-1) != 17) throw error('subtraction failed test #2');
if (subtract(2,0) != 2) throw error("subtraction failed test #3");

//This function returns the product of two numbers
function multiply(a, b) {
    return a * b;
}
if (multiply(100,1) != 100) throw error("multiplication failed test #1");
if (multiply(10,5) != 50) throw error("multiplication failed test #2");
if (multiply(-4,7) != -28) throw error("multiplication failed test #3");

//This function returns the quotient of two numbers
function divide(a, b) {
    return a / b;
}
if (divide(12,3) != 4) throw error("division failed test #1"); 
if (divide(66,-6) != -11) throw error("division failed test #2");
if (divide(0,367) != 0) throw error("division failed test #3");

function printHello(name){
    console.log('Hello ' + name)
}

console.log(add(2,4)); //6
console.log(subtract(3,5)); //-2
console.log(multiply(4,6)); //24
console.log(divide(10,2)); //5
printHello('Jordyn') 
