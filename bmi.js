document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let height = parseFloat(document.getElementById('height').value) / 100;
    let weight = parseFloat(document.getElementById('weight').value);

    if (height > 0 && weight > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        let result = '';

        if (bmi < 18.5) {
            result = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            result = 'Overweight';
        } else {
            result = 'Obesity';
        }

        document.getElementById('result').innerHTML = `Your BMI is ${bmi} (${result})`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid height and weight.';
    }
});
