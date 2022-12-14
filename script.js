const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const characterText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const quoteImage = document.getElementById('image')
const loader = document.getElementById('loader');

let myNumber = -1;
let myImage = 0;

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// Hide Loading

function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// let apiQuotes = [];

// Show New Quote
function newQuote() {
    loading();
    let randomNumber = getRandomNumber();
    while (randomNumber == myNumber) {              // Checks to see if the New quote is the same as the last quote given
        randomNumber = getRandomNumber();           // While the random number is the same as myNumber, it will keep trying to get a different random Number
    }
    myNumber = randomNumber;                        // Sets myNumber to the Random Number
    const quote = localQuotes[myNumber];            // Grabs the object associated with my random number from the quotes.js array. (quotes.js linked via index.HTML)
    quoteText.textContent = quote.text;             // Stores the quote from new object.text retrieved from pervious line
    quoteImage.src=localQuotes[myNumber].image;     // Changes the image as well

    if (!quote.character) {                            // Checks to see if there is an Author
        characterText.textContent = "Unknown";         // If there isn't, returns "Unknown"
    } else {
        characterText.textContent = quote.character;      // Changes Author to new object.author retrieved from pervious line
    }

    if (quote.text.length > 100) {                  // Checks to see if it's a really long
        quoteText.classList.add('long-quote');      // If it is a really long quote, adds size adjustment
    } else {
        quoteText.classList.remove('long-quote');   // If it's not really long, it removes the size adjustment
    }
    quoteText.textContent = quote.text;             // Changes the quote to stored quote
    complete();
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
    const twitterUrl = `https://twitter.com/intent/tweet?text=${myImage}${quoteText.textContent} - ${characterText.textContent}`;
    window.open(twitterUrl, '_blank'); //The '_blank' makes it so Twitter opens in a new Tab.
}

// Gets random number from 0 to number of objects in localQuotes[]
function getRandomNumber(){
    return Math.floor(Math.random() * localQuotes.length);
}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterButton.addEventListener('click', tweetQuote);


//Classwork here:
// const newArray = localQuotes.map((item) => item.character)
// //console.log(newArray)

// const quotesfoo = (item) => item.text;
// const arrayOfQuotes = localQuotes.map(quotesfoo)
// //console.log(arrayOfQuotes)

// const copyOfLocalQuotes = localQuotes.map((item) => {
//     const myNewArray = Object.assign({}, item)
//     return myNewArray
// })

// console.log(copyOfLocalQuotes)

// function varFunction(value) {
//     console.log('Frank');
// }

//Classwork here:

// On Load
// getQuotes();
newQuote();