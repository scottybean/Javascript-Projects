function complete() {
    var first = "Turtles are the ";
    var second = "coolest animals ";
    var third = "in the freaking world!"
    var total = first.concat(second, third);
    document.getElementById("Connect").innerHTML = total;
}

function yaaa() {
    var hiber = "Lanters eat mosqitos for dinner er day";
    var snipper = hiber.slice(12,20);
    document.getElementById("yooo").innerHTML = snipper;
} 

var sentence = "Why do today what you can do tomorrow?";
document.write(sentence.toUpperCase());

function find_it() {
    var d = "Figure this thing out";
    var da = d.search("out");
    document.getElementById("please").innerHTML = da;
}

function most_fun() {
    var x = 9738;
    document.getElementById("like_that").innerHTML = x.toString();
}

function precision_method() {
    var y = 245432543.345432542;
    document.getElementById("Precision").innerHTML = y.toPrecision(7);
}

function myFunction() {
    var num = 5.54689;
    var n = num.toFixed(2);
    document.getElementById("demo").innerHTML = n;
}

function myFunction2() {
    var str = "Hello, World!";
    var res = str.valueOf();
    document.getElementById("demo2").innerHTML = res;
}