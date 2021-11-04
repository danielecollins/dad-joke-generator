var secondClick = false;
var alreadyClicked = false;

function newJoke() {
    fetch("https://icanhazdadjoke.com/", {headers: {Accept:"application/json"}})
    .then(response => response.json())
    .then(data => {
        if (secondClick) {
            alreadyClicked = true;
            document.getElementById("dad-joke").textContent = data.joke;
        } 
        else {
            document.getElementById("dad-joke").textContent = "\"a joke.\"";
            setTimeout(() => !alreadyClicked ? document.getElementById("dad-joke").textContent = "Okay, click me again, I'll give you one for real this time." : console.log("User clicked out of message."), 4000);
            secondClick = true;
        }
    });
}