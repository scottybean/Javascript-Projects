var x = 90;
function Add_Numbers_1() {
    document.write(65 + x + "<br>");
}
function Add_Numbers_2() {
    document.write(60 - x);
}

Add_Numbers_1();
Add_Numbers_2();

function Add_Numbers_3() {
    var y = 5;
    document.write(y + 5 + "<br>");
}


Add_Numbers_3();


function time() {
    if (new Date().getHours() < 18) {
        document.getElementById("clock").innerHTML = "How are you today?";
    }
}

function testNum(a) {
    if (a > 0) {
        return "positive";
    } else {
        return "NOT positive";
    }
}
document.write(testNum(-5));

function test() {
    weight = document.getElementById("weight").value;
    if (weight >= 20) {
        answer = "You should probably diet";
    }
    else {
        answer = "Keep doin yo thang";
        }
        document.getElementById("answer").innerHTML = answer;
    }

    function Time_function() {
        var Time = new Date().getHours();
        var Reply;
        if (time < 12 == Time < 0) {
            Reply = "it is morning time!";
        }
        else if (Time > 12 == Time < 18) {
            Reply = "It is the afternoon";
        }
        else {
            Reply = "It is evening time.";
        }
        document.getElementById("Time_of_day").innerHTML = Reply;
    }