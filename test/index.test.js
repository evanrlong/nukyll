import {expect} from 'chai'
import index from '~/index.js'

describe('index', function () {
  describe('test()', function () {
    it('should return a string of "yay"', function () {
      expect(index.test()).to.be.equal('test')
    })
  })
})
