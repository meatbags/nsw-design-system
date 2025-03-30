class QrCode {
  constructor(element) {
    this.element = element
    this.elementImageWrapper = this.element && this.element.querySelector('.nsw-qr-code__image-wrapper')
    this.elementStatus = this.element && this.element.querySelector('.nsw-qr-code__status')
    this.elementLink = this.element && this.element.querySelector('a')
  }

  init() {
    if (!this.element || !this.elementImageWrapper || !this.elementLink) return

    if (window.QRCode) {
      this.renderQRCode()
    } else {
      window.addEventListener('load', () => {
        this.renderQRCode()
      })
    }
  }

  renderQRCode() {
    new window.QRCode(this.elementImageWrapper, { text: this.elementLink.getAttribute('href') })
  }
}

export default QrCode
