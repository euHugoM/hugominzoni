const visitors = document.querySelector('.checkout-qtd');
var random;

visitors.innerHTML = `<p> 1 recruiter is here.</p> <p>Hire me right now!</p> <p>Only 1 available!</p>`



window.addEventListener('load', () => {
    setInterval(valueCount, 12000);
});




function valueCount() {
    random = Math.floor(Math.random() * 4) + 1;

    if (random === 1) {
        visitors.innerHTML = `<p>${random} recruiter is here.</p> <p>Hire me right now!</p> <p>Only 1 available!</p>`
    } else {
        visitors.innerHTML = `<p>${random} recruiters are here.</p> <p>Hire me right now!</p> <p>Only 1 available!</p>`
    }
}