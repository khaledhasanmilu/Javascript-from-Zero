const count = document.querySelector('.count');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const resetBtn = document.querySelector('.reset');

minusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText);
    count.innerText = countValue - 1;
    if (parseInt(count.innerText) < 0) {
        count.style.color = 'red';
    }
    else if (parseInt(count.innerText) === 0) {
        count.style.color = 'black';
    }
    
});
plusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText);
    count.innerText = countValue + 1;
    if (parseInt(count.innerText) >0) {
        count.style.color = 'Green';
    } else if (parseInt(count.innerText) === 0) {
        count.style.color = 'black';
    }
    
});
resetBtn.addEventListener('click', () => {
    count.innerText = 0;
    count.style.color = 'black';
});