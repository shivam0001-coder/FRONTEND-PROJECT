function calculateBMI() {


var height = document.getElementById("height").value;
var weight = document.getElementById("weight").value;

if (height == "" || weight == "" || height <= 0 || weight <= 0) {
    document.getElementById("result").innerHTML =
        "Please enter valid height and weight";
}
else {
    var bmi = weight / (height * height);
    var category;

    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi < 25) {
        category = "Normal";
    }
    else {
        category = "Overweight";
    }

    document.getElementById("result").innerHTML =
        "Your BMI is: " + bmi.toFixed(2) +
        "<br>Category: " + category;
}


}
