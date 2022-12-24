let quoteOfTheDay = document.querySelector('.quote');
let btn = document.getElementsByClassName('generate');
let allQuotes =[];

function generate(){
    fetch('https://type.fit/api/quotes')
    .then((response)=> {
        return response.json();
    })
    .then((response)=> {
        allQuotes = response;
        let quote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
        quoteOfTheDay.textContent = quote.text;
    }) 
    .catch((err)=> console.log(err));
}
btn.addEventListener('click', generate(quoteOfTheDay));