const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const quoteImage = document.getElementById('image')

let myNumber = -1;

// let apiQuotes = [];

// Show New Quote
function newQuote() {
    let randomNumber = getRandomNumber();
    // Checks to see if the New quote is the same as the last quote given
    while (randomNumber == myNumber) {
        randomNumber = getRandomNumber();
    }
    myNumber = randomNumber;
    const quote = localQuotes[myNumber];
    quoteText.textContent = quote.text;
    quoteImage.src=localQuotes[myNumber].image;

    // Checks to see if there is an Author
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }

    // Checks to see if it's a really long Quote and adjusts the size
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote');        
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

// Get Quotes form API
// async function getQuotes() {
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         alert(error);
//         // Catch Error here
//     }
// }

//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank'); //The '_blank' makes it so Twitter opens in a new Tab.
}

// Gets random number from 0 to number of objects in localQuotes[]
function getRandomNumber(){
    return Math.floor(Math.random() * localQuotes.length);
}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterButton.addEventListener('click', tweetQuote);

// On Load
// getQuotes();
newQuote();