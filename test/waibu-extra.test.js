/* global describe, it, beforeEach */

import { expect } from 'chai'

import factory from '../index.js'

describe('WaibuExtra', () => {
  let app
  let WaibuExtra
  let wx

  beforeEach(async () => {
    app = {
      baseClass: {
        Base: class Base {
          constructor (pkgName, appRef) {
            this.pkgName = pkgName
            this.app = appRef
          }
        }
      }
    }

    WaibuExtra = await factory.call({ app }, 'waibu-extra')
    wx = new WaibuExtra()
  })

  it('creates instance with package and app references', () => {
    expect(wx.pkgName).to.equal('waibu-extra')
    expect(wx.app).to.equal(app)
  })

  it('sets default waibu prefix to wx', () => {
    expect(wx.config.waibu.prefix).to.equal('wx')
  })

  it('has expected default libraries list', () => {
    expect(wx.config.libs).to.deep.equal([
      'masonry',
      'highlightjs',
      'imagesloaded',
      'tempusDominus',
      'popperjs',
      'echarts',
      'holderjs',
      'tom-select',
      'flag-icons',
      'cheap-ruler',
      'canvas-gauges'
    ])
  })

  it('uses array type for libs config', () => {
    expect(Array.isArray(wx.config.libs)).to.equal(true)
    expect(wx.config.libs.length).to.be.greaterThan(0)
  })
})
