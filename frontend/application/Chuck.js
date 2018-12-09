
import Network from './Network';

class Chuck {
  constructor(initDefaultEvents, unsetDefaultEvents, chuckImage) {
    this.talk = this.talk.bind(this); // call chuck
    this.thanks = this.thanks.bind(this); // close chuck
    this.mouseoverChuck = this.mouseoverChuck.bind(this);
    this.mouseleftFromChuck = this.mouseleftFromChuck.bind(this);
    this.changeAnimationKeyFrame = this.changeAnimationKeyFrame.bind(this);

    this.initDefaultEvents  = initDefaultEvents;
    this.unsetDefaultEvents = unsetDefaultEvents;

    this.jokeBoard = document.querySelector('.chuck__joke');
    this.chuckImage = chuckImage;

    this.network = new Network();
  }

  mouseoverChuck(e) {
    let item = e.target;
    // calculate Bottom value
    let currentBottom = - (60 + (item.offsetTop + 1));
    this.changeAnimationKeyFrame(currentBottom);
    item.classList.add('animation-focused');
  }

  mouseleftFromChuck(e) {
    (e.target).classList.remove('animation-focused')
  }

  changeAnimationKeyFrame(currentBottom) {
    const rules = document.styleSheets[0].cssRules;
    let newRule;

    for (let item in rules) {
      if (rules.hasOwnProperty(item) && (rules[item].constructor.name == "CSSKeyframesRule")) {
        if (rules[item].name == "animation-focused") {
          newRule = rules[item].cssText.replace(/bottom: (-?\d{1,})px;/, `bottom: ${currentBottom}px`);
        }

        if (newRule !== undefined) {
          document.styleSheets[0].deleteRule(item);
          document.styleSheets[0].insertRule(newRule, item);
        }
      }
    }
  }

  talk(e) {
    let item = e.target;
    item.classList.remove('animation-focused')
    item.classList.remove('animation-jumping')

    this.unsetDefaultEvents();

    this.jokeBoard.classList.add('chuck__joke--open');
    this.network.getJoke();

    // slow unsetting events
    setTimeout(() => { item.style.bottom = "10px" }, 10);
  }

  thanks(e) {
    let item = e.target;
    this.chuckImage.classList.add('animation-jumping')

    this.initDefaultEvents();
    this.jokeBoard.classList.remove('chuck__joke--open');

    setTimeout(() => { this.chuckImage.removeAttribute('style') }, 0);
  }
}

export default Chuck;
