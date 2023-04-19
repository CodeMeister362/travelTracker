import { assert } from 'chai';
import Destination from '../src/destinations'
import destinationMockData from '../src/test-data/destinations-mock'

describe('destination class', () => {

	// beforeEach(() => {
	// 	destination = new Destination ()
	// })
	it('should be a function', () => {
		assert.isFunction(Destination)
	})

})