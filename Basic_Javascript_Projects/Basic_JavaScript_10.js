function To_Count() {
    var smigit = "";
    var T = 1;
    while (T<11) {
        smigit += "<br>" + T;
        T++;
    }
    document.getElementById("Counting").innerHTML = smigit;
}

function myFunction() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("demo").innerHTML=n;
}

var Instruments=["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function For_Loop() {
    for (Y=0; Y<Instruments.length; Y++) {
        Content += Instruments[Y]+ "<br>";
    }
    document.getElementById("List_Of_Instruments").innerHTML=Content;
}

function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML= "in this picture, the cat is " + Cat_Picture[3] + ".";
}

function constant_function() {
    const Animal = {species:"turtle",  type:"sea", color:"green"};
    Animal.color = "red";
    Animal.age = "80";
    document.getElementById("Constant").innerHTML = "The turtles age seemed to be close to " + Animal.age + " and really seemed to enjoy living in the " + Animal.type;
}

var x = 55;
document.write("<br>" + x);
{
    let x = 99;
    document.write("<br>" + x);
}
document.write("<br>" + x);

var x = return_function(7, 2);

function return_function(c,d) {
    return c+d;
}
document.getElementById("slemo").innerHTML = x; 

let game = {
    sport: "football ",
    team: "seahawks ",
    location: "Seattle ",
    description : function() {
        return "The best game on earth is " + this.sport + " and the best " + game.sport + " team is obviously the " + game.team;
    }
};
document.getElementById("game_object").innerHTML = game.description();

var text = "";
var i;
for (i=5; i<10; i--) {
    if (i===0) {break;}
    text += "the number is " + i + "<br>";
}
document.getElementById("break").innerHTML= text;

var dext = ""
var L;
for (L = 0; L < 7; L++) {
    if (L===4) {continue; }
    dext += "the number is " + L + "<br>";
}
document.getElementById("continue").innerHTML = dext;