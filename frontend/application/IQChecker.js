
class IQChecker {
  constructor() {
    this.submit = document.querySelector('button[name="iq-run"]')
    this.init = this.init.bind(this)
    this.showResult = this.showResult.bind(this)
  }

  init() {
    this.submit.addEventListener('click', this.showResult)
  }

  showResult() {
    let result = document.querySelector('.iq-result')
    let checkboxList = document.querySelectorAll('.spheres__type')
    let nameLabel = document.querySelector('#troll_name')

    let isAdvocateSelected = false
    checkboxList.forEach((item, index) => {
      let isChecked = item.querySelector('input[type="checkbox"]:checked')
      let text = item.querySelector('.spheres__mark')

      if (isChecked && text.innerHTML == "Юрист") {
        isAdvocateSelected = text.innerHTML == "Юрист"
      }
    })

    // nameLabel.innerHTML = isAdvocateSelected ? 'Настя (60 баллов)' : 'Ты (60 баллов)'
    result.classList.add('iq-result--visible')

    result.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }
}

export default IQChecker;
