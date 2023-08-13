
function calculaterBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100
    let bmi = weight / (height * height);
    bmi = parseFloat(bmi.toFixed(2));
    document.getElementById("bmiResult").innerHTML = bmi;
    console.log(bmi);
    const interpretation = getInterpretation(bmi);
    document.getElementById("bmiInterpretation").textContent = interpretation;
    if (isNaN(weight) || isNaN(height) || height === 0) {
        document.getElementById("bmiResult").textContent = "Invalid input";
        document.getElementById("bmiInterpretation").textContent = "";

    }
}

function getInterpretation(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}



