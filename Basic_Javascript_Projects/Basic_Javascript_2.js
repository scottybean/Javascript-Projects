function Scotty(){
    var x = "Heck yeah he is!"
    var y = x.fontcolor("blue");
document.getElementById("demo").innerHTML= y;
}

function table(){
    var sentence = "I am the best pingpong player";
    sentence += " in the world!";
    document.getElementById("pingpong").innerHTML = sentence;
}

function toCelsius(f) {
    return (5/9) * (f-32);
}
document.getElementById("temp").innerHTML = toCelsius(40);