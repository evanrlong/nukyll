import {expect} from 'chai'
import index from '~/index.js'

describe('index', function () {
  describe('test()', function () {
    it('should return a string of "yay"', function () {
      expect(index.test()).to.equal('test')
    })
  })

  describe('test2()', function () {
    it('should return a number of 2', function () {
      expect(index.test2(2)).to.equal(2)
    })

    it('should return a number of 4', function () {
      expect(index.test2(4)).to.equal(4)
    })
  })
})
