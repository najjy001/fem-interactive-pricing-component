
const check = document.getElementById('switch');
const slider = document.getElementById('pageViews');
const pageViews = document.querySelector('.card__heading');
const price = document.querySelector('.card__ammount');
const recuring = document.querySelector('.card__recuring');
let billing = 'monthly';

const pricesArr = [8, 12, 16, 24, 36];
const pageViewsArr = ['10K', '50k', '100k', '500k', '1M']

check.addEventListener('change', function (e) {



    const val = +slider.value;
    if (check.checked) {
        recuring.textContent = `/ year`;
        setPrice(val);
        return;
    }
    
    recuring.textContent = `/ month`;
    setPrice(val);
})

const setPrice = function (index) {
    console.log(check.checked);
    pageViews.textContent = `${
      pageViewsArr[index - 1]
    } pageviews`.toUpperCase();
    if (!check.checked) {
        price.textContent = `$${pricesArr[index - 1]}.00`;
        
        return;
    }
    
    price.textContent = `$${pricesArr[index - 1] * 0.75 * 12}.00`;
   

};



slider.addEventListener('input', function (e) {
    const val = +slider.value;
    const percentage = ((val - 1) / 4) * 100;
    const gradient = `linear-gradient(to right, hsl(174, 77%, 80%) ${percentage}%, hsl(223, 50%, 87%) ${percentage}%)`;
    slider.style.backgroundImage = gradient;

    setPrice(val);


})