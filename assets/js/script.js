const value = document.getElementById("value");
const plusbutton = document.getElementById("plus");
const minusbutton = document.getElementById("minus");
const resetbutton = document.getElementById("reset");


const updateValue = () => {
    value.innerHTML=count;
};

let count = 0;
let intervalId = 0;

plusbutton.addEventListener('mousedown', () =>{
    intervalId = setInterval(() =>{
        count += 1;
        updateValue();
    }, 100);
});

minusbutton.addEventListener('mousedown', () =>{
    intervalId = setInterval(() =>{
        count -= 1;
        updateValue();
    }, 100);
});

resetbutton.addEventListener('click', () => {
    count = 0;
    updateValue();
});
document.addEventListener('mouseup', () => clearInterval(intervalId));
