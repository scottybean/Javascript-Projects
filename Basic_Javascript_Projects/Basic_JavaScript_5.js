document.write(typeof 6);

function my_Function() {
    document.getElementById("test").innerHTML = 0/0;
}

function thisFunction() {
    document.getElementById("notest").innerHTML = isNaN ("hi!");
}

function hiya() {
    document.getElementById("nan").innerHTML = isNaN('2435');
}

document.getElementById("infinity").innerHTML = 3E546;


document.write(-3E310);

document.write(10>5);

console.log(2+2);

document.write("43" + 5);

console.log(2>4);

document.write(3==3);

var x = 10;
var y = 10;
document.write(x===y);

var a = 10;
var b = 20;
document.write(a===b);

var c = 10;
var d = "ten";
document.write(c===d);

var e = 10;
var f = "dog";
document.write(e===f);

document.write(6>3 && 9>4);

document.write(5>9 && 5>3);

document.write(5>6 || 5>4);

document.write(4>5 ||4>7);

function not_Function() {
    document.getElementById("Not").innerHTML = !(6>7);
}

function double() {
    document.getElementById("doubleNot").innerHTML = !(7>6);
}