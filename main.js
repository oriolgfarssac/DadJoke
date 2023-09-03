const change = document.getElementById('joke');

function dadJoke () {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        change.innerHTML = data.joke;
    })
    .catch(error => {
        console.error('Error fetching dad joke:', error);
    });
}

function norrisJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        change.innerHTML = data.value;
    })
    .catch(error => {
        console.error('Error fetching Chuck Norris joke:', error);
    });
}

function manateJoke(){
    fetch('https://manateejokesapi.herokuapp.com/manatees/random')
    .then(response => response.json())
    .then(data => {
        change.innerHTML = data.setup;
        change.innerHTML += '  ';
        change.innerHTML += data.punchline;
    })
}