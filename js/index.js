console.log("object");

const check = document.getElementById('switch');

check.addEventListener('change', function (e) {
    console.log(check.checked);
})