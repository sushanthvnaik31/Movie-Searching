
alert("🎬 Welcome to MovieZone!");


console.log("MovieZone Website Loaded Successfully");


function showMovie(movieName) {
    alert("You selected: " + movieName);
}


function watchTrailer() {
    alert("Trailer will be available soon!");
}


function changeBackground() {
    document.body.style.backgroundColor = "#f4f4f4";
}


let today = new Date();
console.log("Today's Date: " + today);


let visitors = 1;
visitors++;
console.log("Visitors: " + visitors);


document.addEventListener("click", function () {
    console.log("Button or page clicked!");
});


setTimeout(function () {
    alert("Enjoy watching movies!");
}, 3000);