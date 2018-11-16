
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
    result.classList.add('iq-result--visible')

    result.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }
}

export default IQChecker;
