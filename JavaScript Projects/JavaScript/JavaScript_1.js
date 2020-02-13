function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " are a great animal!";
    switch(Animals) {
        case "Lion":
            Animal_Output = "Lions" + Animal_String;
        break;
        case "Tiger":
            Animal_Output = "Tigers" + Animal_String;
        break;
        case "Elephant":
            Animal_Output = "Elephants" + Animal_String;
        break;
        case "Bear":
            Animal_Output = "Bears" + Animal_String;
        break;
        case "Dog":
            Animal_Output = "Dogs" + Animal_String;
        break;
        case "Turtle":
            Animal_Output = "Turtles" + Animal_String;
        break;
        default:
        Animal_Output = "Please enter an animal exactly as written on the above list";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

function Class_Name() {
    var A = document.getElementsByClassName("Push");
    A[1].innerHTML = "I told you so!";
    A[3].innerHTML ="I told you so!"
}

var C = document.getElementById("ID_Name");
var ctx = C.getContext("2d");
ctx.font = "80px Arial";
ctx.strokeText("BOOYEAHH!", 2, 100);

var D = document.getElementById("my_ID");
var ctx = D.getContext("2d");
var grd = ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "black");
grd.addColorStop(0.5, "blue");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(2, 2, 490, 240);