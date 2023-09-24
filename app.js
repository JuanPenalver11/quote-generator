let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let btn = document.querySelector('.btn')

const quotes = [
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth"
    },
    {
        quote: "Money and success do not change people; they merely amplify what is already there.",
        author: "Will Smith"
    },
    {
        quote: "In order to write about life first you must live it.",
        author: "Hemingway"
    },
    {
        quote: "The big lesson in life, baby, is never be scared of anyone or anything.",
        author: "Sinatra"
    },
    {
        quote: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
        author: "Burnett"
    },
    {
        quote: "The unexamined life is not worth living.",
        author: "Socrates"
    }
];

btn.addEventListener("click", function () {

    let randomQuote = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[randomQuote].quote;
    author.innerText = quotes[randomQuote].author;


})