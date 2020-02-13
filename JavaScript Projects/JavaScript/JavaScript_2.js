function validateForm() {
    var x = document.forms["fname"]["firstname"].value;
    var y = document.forms["fname"]["lastname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    if (y=="") {
        alert("Name must be filled out");
        return false;
    }
}