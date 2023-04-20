import { assert } from 'chai';
import Traveler from '../src/travelers'
import travelerMockData from '../src/test-data/traveler-mock'

describe('traveler class', () => {

	let traveler

	beforeEach(() => {
		traveler = new Traveler (travelerMockData)
	})

	it('should be a function', () => {
		assert.isFunction(Traveler)
	})

	it('should contain all properties of data set', () => {
		assert.deepEqual(traveler.data[0], {
			"id": 1,
			"name": "Ham Leadbeater",
			"travelerType": "relaxer",
		})
	})

})