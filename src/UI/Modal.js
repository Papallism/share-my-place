export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText
    this.contentTemplateElement = document.getElementById(contentId)
    this.modalTemplateElement = document.getElementById("modal-template")
  }

  show() {
    if ('content' in document.createElement('template')) {
      const modalInnerElements = document.importNode(this.modalTemplateElement.content, true)
      
      this.modalElement = modalInnerElements.querySelector('.modal')
      this.backdropElement = modalInnerElements.querySelector('.backdrop')

      const contentElement = document.importNode(this.contentTemplateElement.content, true)

      this.modalElement.appendChild(contentElement)

      document.body.insertAdjacentElement('afterbegin', this.modalElement)
      document.body.insertAdjacentElement('afterbegin', this.backdropElement)
    } else {
      alert(this.fallbackText)
    }
  }

  hide() {
    if (this.modalElement) {
      document.body.removeChild(this.modalElement)
      document.body.removeChild(this.backdropElement)

      this.modalElement = null
      this.backdropElement = null
    }
  }
}