
const COLORS = ['#eee', '#eea', '#eaa', '#aea', '#aae', '#aee'];

class StyleFactory {
  constructor() {
    this.COLORS = COLORS;
  }

  static getRandomColor(){
    let reach  = COLORS.length;
    return (Math.random()*reach >> 0);
  }

  static setBodyColor() {
      let random = this.getRandomColor();
      document.body.style.backgroundColor=COLORS[random];
  }

  static initColorTimeout(timeout) {
    setInterval(() => this.setBodyColor(), timeout);
  }
}

export default StyleFactory;
