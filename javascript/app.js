// event listener added to prevent quotes from generating on page load
window.addEventListener("load", function() {

    let btnClick = document.getElementById("btnStyle");
    btnClick.addEventListener("click", getQuotes);
});

// function for image animation
let heartImage = document.getElementById("heart");
let heartPosition = 0;

setInterval(function() {
    heartPosition += 1;
    heartImage.style.left = heartPosition + "px";
}, 10)


// array to loop through that stores the quotes
let quotes = ["Give yourself some grace.", "You are worthy of good things.", 
            "Be gentle with yourself.", "You deserve nice things.", 
            "Trust yourself to make decisions that reflect your values.",
            "You are worth more than you can produce", 
            "There is no shame in allowing yourself time to grow.",
            "Your joy is worth protecting.", "Vulnerability is strength.",
            "Love your body through all of its changes.", 
            "Give yourself permission to ask for and receive help when in need.",
            "Being tired and resting doesn't mean you're falling behind.",
            "You are deserving of a kind and gentle self love."]

// function to generate quotes
function getQuotes() {

    // function to call to select random string in array by it's index number
    let randomQuotes = Math.floor(Math.random() * (quotes.length));
    
    // method grabs random quote and places it within the quoteBox div
    document.getElementById("quoteBox").innerHTML = quotes[randomQuotes];
}



// function created to populate current date in the page

function makeDate() {

const today = document.getElementById('dateBox');

let todaysDate = new Date().toLocaleDateString();

today.append(todaysDate);

today.innerHTML = todaysDate;

} 

makeDate();