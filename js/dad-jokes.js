var secondClick = false;

function newJoke() {
    fetch("https://icanhazdadjoke.com/", {headers: {Accept:"application/json"}})
    .then(response => response.json())
    .then(data => {
        if (secondClick)
            document.getElementById("dad-joke").textContent = data.joke;
        else {
            document.getElementById("dad-joke").textContent = "\"a joke.\"";
            setTimeout(() => document.getElementById("dad-joke").textContent = "Okay, click me again, I'll give you one for real this time.", 4000);
            secondClick = true;
        }
    });
}