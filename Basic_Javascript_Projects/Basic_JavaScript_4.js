function vehicle() {
    var car = {
        make: "Mustang",
        color: "Red",
        model: "GT",
        year: 2020,
        sound: "Vroooom!"
    };
    delete car.model;
    document.getElementById("Dictionary").innerHTML = car.model;
}