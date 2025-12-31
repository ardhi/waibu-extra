/**
 * Plugin factory
 *
 * @param {string} pkgName - NPM package name
 * @returns {class}
 */
async function factory (pkgName) {
  const me = this

  /**
   * WaibuExtra class
   *
   * @class
   */
  class WaibuExtra extends this.app.baseClass.Base {
    static alias = 'wx'
    static dependencies = ['waibu-static', 'waibu']

    constructor () {
      super(pkgName, me.app)
      this.config = {
        waibu: {
          prefix: 'extra'
        },
        libs: ['masonry', 'highlightjs', 'imagesloaded', 'tempusDominus', 'popperjs',
          'echarts', 'holderjs', 'tom-select', 'flag-icons', 'cheap-ruler',
          'canvas-gauges'
        ]
      }
    }

    init = async () => {
    }
  }

  return WaibuExtra
}

export default factory
