const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const countDisplay = document.getElementById('counter');
let counterValue = 0; // Initialize the counter value to 0

// Add an event listener to the increment button
increment.addEventListener('click', () => {
counterValue ++;
    countDisplay.textContent = counterValue;
});

// Add an event listener to the decrement button
decrement.addEventListener('click', ()=>{
    counterValue --;
    countDisplay.textContent = counterValue;
})


// Add an event listener to the reset button
reset.addEventListener('click', ()=>{
    counterValue = 0;
    countDisplay.textContent = counterValue;
})

