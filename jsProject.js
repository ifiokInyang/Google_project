let selectedColor = 'red';

function changeColor (oldColor, color){
  if(oldColor) document.getElementById(oldColor).classList.remove('active')
   if(color) document.getElementById(color).classList.add('active')
}
console.log('started');



document.addEventListener("DOMContentLoaded", (event) => {
   let interval; 
   
   const startTimer = () => {
        interval =  setInterval(() => {
    if(selectedColor === 'red') {
        changeColor('red', 'yellow')
        selectedColor = 'yellow'

        console.log(selectedColor);
    } else  if(selectedColor === 'yellow') {
        selectedColor = 'green'
        changeColor('yellow', 'green')
        console.log(selectedColor);
    } else if(selectedColor === 'green') {
        changeColor('green', 'red')
        selectedColor = 'red'
        console.log(selectedColor);
    }
}, 1000);

}
const stopTimer = () => {
    clearInterval(interval)
    interval = null
}


document.getElementById("btn").onclick = function () {
    console.log('ready');
    if(interval){
            stopTimer()
             changeColor(selectedColor)
    } else 
    {
        startTimer()
        changeColor(null, 'red')
    }
}
});