async function factory (pkgName) {
  const me = this

  return class WaibuExtra extends this.lib.Plugin {
    constructor () {
      super(pkgName, me.app)
      this.alias = 'wx'
      this.dependencies = ['waibu-static', 'waibu']
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
}

export default factory
