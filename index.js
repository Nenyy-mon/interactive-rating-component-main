let numbers = document.querySelectorAll(".number")
let selectedDiv = document.querySelector(".select")
let selectedPar = document.querySelector('.selected')
let arrayRates = [1, 2, 3, 4, 5]
let btn = document.querySelector('.btnSubmit')
let firstDiv = document.getElementById('fullDiv')
let secondDiv = document.getElementById('hiddenToBe')


for (var i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function () {


        var el = numbers[0];
        while (el) {
            if (el.tagName === "DIV") {
                //remove class
                el.classList.remove("colored");

            }
            // pass to the new sibling
            el = el.nextSibling;
        }

        this.classList.add("colored");
    };
}

btn.addEventListener('click', function () {
    let selectedNumber;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i].classList.contains('colored')) {
            selectedNumber = arrayRates[i];
            break;
        }
    }

    // If no number is selected, do nothing
    if (selectedNumber === undefined) {
        return;
    }

    // Hide the firstDiv
    firstDiv.classList.add('hidden');
    // Show the secondDiv
    secondDiv.classList.remove('hidden');

    selectedPar.textContent = selectedPar.textContent + ` ${selectedNumber} out of 5`;
});



