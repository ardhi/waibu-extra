/**
 * Plugin factory.
 *
 * **Never** call this function directly!!! It's only-meant to be called by the {@link https://ardhi.github.io/bajo|Bajo framework} during plugin initialization.
 *
 * @param {string} pkgName - NPM package name
 * @returns {WaibuExtra}
 */
async function factory (pkgName) {
  const me = this

  /**
   * WaibuExtra class definition
   *
   * @class
   */
  class WaibuExtra extends this.app.baseClass.Base {
    /**
     * Constructor
     */
    constructor () {
      super(pkgName, me.app)

      /**
       * @property {object} [config={}] - Configuration object
       * @property {object} [config.waibu={}] - Waibu configuration for this plugin
       * @property {string} [config.waibu.prefix] - Prefix for Waibu routes
       * @property {string[]} [config.libs=[]] - List of libraries to be activated in WaibuStatic
       */
      this.config = {
        waibu: {
          prefix: 'wx'
        },
        libs: ['masonry', 'highlightjs', 'imagesloaded', 'tempusDominus', 'popperjs',
          'echarts', 'holderjs', 'tom-select', 'flag-icons', 'cheap-ruler',
          'canvas-gauges'
        ]
      }
    }
  }

  return WaibuExtra
}

export default factory
