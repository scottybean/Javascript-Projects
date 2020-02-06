function something(){
    var a = 2 + 3;
    document.getElementById("Math").innerHTML = "2 + 3 = " + a;
}

function subtraction() {
    var x = 5 - 2;
    document.getElementById("Albert").innerHTML = "5 - 2 = " + x;
}

function multiplication() {
    var y = 496 * 1121;
    document.getElementById("Einstein").innerHTML ="496 * 1121 = " + y;
}

function division() {
    var t = 145 / 7634;
    document.getElementById("relativity").innerHTML="145 / 7634 = " + t;
}

function crazy() {
    var z = 76 * 4 - (2 + 98) / 156;
    document.getElementById("theory").innerHTML="76 * 4 - (2 + 98) / 156 = " + z;
}

function modulus() {
    var g = 100 % 3;
    document.getElementById("Goku").innerHTML="When you divide 100 by 3 you have a remainder of: " + g;
}

function operand() {
    var o = 50;
    document.getElementById("negation").innerHTML="The negation operator of 50 is " + -o;
}

var i = 4;
i++;
document.write(i);

document.write("<br>");

var d = 4;
d--;
document.write(d);

document.write("<br>");

window.alert(Math.random());

document.write("<br>");

window.alert(Math.random() * 100);

document.write("<br>");

document.getElementById("power").innerHTML = Math.pow(8,2);