function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", "1971", "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Animal(Type, Size, Country) {
    this.Animal_Type = Type;
    this.Animal_Size = Size;
    this.Animal_Country = Country;
}
var Panda = new Animal("Bear", "Large", "China");
var Gecko = new Animal("Reptile", "Small", "Indonesia");
var Elephant = new Animal("Mammal", "Giant", "Africa");
function ohYeah() {
    document.getElementById("New_and_This").innerHTML = "Pandas are a type of " + Panda.Animal_Type + " that are very " + Panda.Animal_Size + " and live in " + Panda.Animal_Country;
}

function Laptop(Company, Year, Processor) {
    this.CompanyName = Company;
    this.Year = Year;
    this.Processor = Processor;
}
var Microsoft = new Laptop("Dell", 2017, "Intel i7");
document.getElementById("Demo").innerHTML = "My laptop is a " + Microsoft.CompanyName + " and was made in " + Microsoft.Year + " with a " + Microsoft.Processor + " Processor.";

function Nested() {
    document.getElementById("Nested_Function").innerHTML = Count ();
    function Count() {
        var Starting_Point = 5
        function Plus_One() {Starting_Point +=3;}
        Plus_One()
        return Starting_Point;
    }
}