// javascript code for generate quote

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The best revenge is massive success. - Frank Sinatra",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "The secret of getting ahead is getting started. - Mark Twain",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
]

const quoteDiv = document.getElementById("quote");
const btn = document.getElementById("btn");

// event listner function
btn.addEventListener("click", generateQuote);

// onclick function

function generateQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDiv.textContent = quotes[randomIndex];
}