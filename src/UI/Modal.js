export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText
    this.contentTemplateElement = document.getElementById(contentId)
    this.modalTemplateElement = document.getElementById("modal-template")
  }

  show() {
    if ('content' in document.createElement('template')) {
      const modalInnerElements = document.importNode(this.modalTemplateElement.content, true)
      const modalElement = modalInnerElements.querySelector('.modal')
      const backdropElement = modalInnerElements.querySelector('.backdrop')

      const contentElement = document.importNode(this.contentTemplateElement.content, true)

      modalElement.appendChild(contentElement)

      document.body.insertAdjacentElement('afterbegin', modalElement)
      document.body.insertAdjacentElement('afterbegin', backdropElement)
    } else {
      alert(this.fallbackText)
    }
  }

  hide() {

  }
}