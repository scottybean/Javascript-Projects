function displayType(cars) {
    var carsType = cars.getAttribute("data-cars-model");
    alert(carsType + " is in the " + cars.innerHTML + " company!");
}