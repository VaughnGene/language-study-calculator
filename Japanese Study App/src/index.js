//Links to the parts of the HTML document.

//The input field where the reps are typed (number)
const reps = document.querySelector('#desiredReps')

//the actual button to submit the input
const sub = document.querySelector('#calculate')

//Where the output information will be display.
const output = document.querySelector('.output')

//the makes the enter key availible to use instead of clicking the buton
reps.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        sub.click();
    }
});

sub.addEventListener('click', finalCalculation)


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