
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
}

export default Network;
