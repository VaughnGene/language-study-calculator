const reps = document.querySelector('#desiredReps')
const sub = document.querySelector('#calculate')
const output = document.querySelector('.output')

function time_convert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + minutes;
}

function finalCalculation() {
    //validate numbers
    if (reps.value == "") {
        output.innerHTML = `<p>Please input a number</p>`
    }
    // calculate if numbers are okay
    else {
        // formula
        let timePerRep = .442
        let timeToFinish = reps.value * timePerRep

        output.innerHTML = time_convert(timeToFinish.toFixed()) + ' time to completion'
    }

}

sub.addEventListener('click', finalCalculation)

reps.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        sub.click();
    }
});
