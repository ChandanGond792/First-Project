const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const bmi_value = document.querySelector("#bmi-value");
const bmi_status = document.querySelector("#bmi-status");
const calculate = document.querySelector("#calculate-bmi");

calculate.addEventListener('click', () => {
    if (height.value.trim() === "" || weight.value.trim() === "") {
        alert('Please enter your height and weight');
        return;
    }

    let height_value = parseFloat(height.value);
    let weight_value = parseFloat(weight.value);
    let height_value_meters = height_value / 100;

    let bmi = weight_value / (height_value_meters * height_value_meters);

    bmi_value.textContent = bmi.toFixed(2);

    if (bmi < 18.5) {
        bmi_status.textContent = "Underweight";
    } else if (bmi < 24.9) {
        bmi_status.textContent = "Normal weight";
    } else if (bmi < 29.9) {
        bmi_status.textContent = "Overweight";
    } else {
        bmi_status.textContent = "Obesity";
    }
});
