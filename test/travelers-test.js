import { assert } from 'chai';
import Traveler from '../src/travelers'
import travelerMockData from '../src/test-data/traveler-mock'

describe('traveler class', () => {

	// beforeEach(() => {
	// 	traveler = new Traveler ()
	// })
	it('should be a function', () => {
		assert.isFunction(Traveler)
	})

})