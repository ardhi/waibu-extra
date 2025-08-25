async function factory (pkgName) {
  const me = this

  class WaibuExtra extends this.lib.Plugin {
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
