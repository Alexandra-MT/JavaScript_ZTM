// by default all js is in the window element  
const  quoteContainer = document.getElementById('quote-container');
const  quoteText = document.getElementById('quote');
const  authorText = document.getElementById('author');
const  twitterBtn = document.getElementById('twitter');
const  newQuoteBtn = document.getElementById('new-quote');
//Global variable
let apiQuotes = [];

//Show New Quote
function newQuote(){
    // Pick a random quote from API
    //apiQuotes[random number];
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Unknown
    /*if(!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }
    //Check Quote lenght to determine styling
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;*/

    authorText.textContent = quote.author ? quote.author : 'Unknown';
    quote.text.length > 50 ? quoteText.classList.add('long-quote') : quoteText.classList.remove('long-quote');
    quoteText.textContent = quote.text;
}
// Get Quotes From API
    async function getQuotes() {
        const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
        try {
            //we set response when we actually have data
            const response = await fetch(apiUrl);
            apiQuotes = await response.json(); //array of objects
            console.log(apiQuotes);
            newQuote();
        }catch(error){
            //Catch Error Here
        }
    }
//Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    //Open twitter window in a new tab
    window.open(twitterUrl, '_blank');
}

//New quote btn
newQuoteBtn.addEventListener('click', newQuote);
//TWITTER btn
twitterBtn.addEventListener('click', tweetQuote);
//On Load
getQuotes();