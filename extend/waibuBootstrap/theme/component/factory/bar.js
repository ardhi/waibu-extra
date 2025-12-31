async function script () {
  return class WxBar extends this.baseFactory {
    constructor (options) {
      super(options)
      this.params.noTag = true
      this.type = this.params.attr.type ?? 'pills'
    }

    build = async () => {
      const sentence = `
        <c:grid-row>
          <c:grid-col col="4-lg 12-md" text="nowrap align:center align:start-lg">
            <c:heading type="3-display" content="${this.params.attr.heading ?? ''}" />
          </c:grid-col>
          <c:grid-col col="8-lg 12-md" flex="justify-content:end-lg justify-content:center align-items:center">
            <c:nav type="${this.type}" tag="ul">
              ${this.params.html}
            </c:nav>
          </c:grid-col>
        </c:grid-row>
      `
      this.params.html = await this.component.buildSentence(sentence)
    }
  }
}

export default script
