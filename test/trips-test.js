import { assert } from 'chai';
import Trip from '../src/trips'
import tripsMockData from '../src/test-data/trips-mock'

describe('trip class', () => {

	// beforeEach(() => {
	// 	trip = new Trip()
	// })

	it('should be a function', () => {
		assert.isFunction(Trip)
	})

})