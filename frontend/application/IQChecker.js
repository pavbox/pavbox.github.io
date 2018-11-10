
class IQChecker {
  constructor() {
    this.submit = document.querySelector('button[name="iq-run"]');
    this.init = this.init.bind(this);
    this.showResult = this.showResult.bind(this);
  }

  init() {
    this.submit.addEventListener('click', this.showResult)
  }

  showResult() {
    let result = document.querySelector('.iq-result');
    let checkboxList = document.querySelectorAll('.spheres__type--checked');
    let nameLabel = document.querySelector('#troll_name')

    checkboxList.forEach((item, index) => {
      let text = item.querySelector('.spheres__mark')

      if (text == "Юрист") {
        nameLabel.innerHTML = 'Настя (60 баллов)'
      } else {
        nameLabel.innerHTML = 'Ты (60 баллов)'
      }
    })

    result.classList.add('iq-result--visible')

    result.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"}
    );
  }
}

export default IQChecker;
