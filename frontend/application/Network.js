
class Network {
  constructor() {
    this.getJoke = this.getJoke.bind(this);
  }

  getJoke() {
    const xhr = new XMLHttpRequest();

    const resolver = function() {
        if (this.readyState == 4 && this.status == 200) {
           let joke = JSON.parse(xhr.responseText).value;

           let board = document.querySelector('.chuck__content');
           board.innerHTML = joke;
        }
    };

    xhr.onreadystatechange = resolver;
    xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);
    xhr.send();
  }

  sendNumber(number) {
    const xhr = new XMLHttpRequest();
    const parameters = 'number=' + number;

    const resolver = function() {
        if (this.readyState == 4 && this.status == 200) {
           console.log(this.readyState)
        }
    };

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = resolver;
    xhr.open('POST', '/request', true);
    xhr.send(parameters);
  }
}

export default Network;
