import { assert } from 'chai';
import Destination from '../src/destinations'
import destinationMockData from '../src/test-data/destinations-mock'

describe('destination class', () => {

	let destination

	beforeEach(() => {
		destination = new Destination(destinationMockData)
	})

		it('should be a function', () => {
			assert.isFunction(Destination)
		})

		it('should be an object with properties', () => {
			assert.deepEqual(destination.data[0], {
				id: 1,
				destination: "Lima, Peru",
				estimatedLodgingCostPerDay: 70,
				estimatedFlightCostPerPerson: 400,
				image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
				alt: "overview of city buildings with a clear sky"
			}
			)})

		})

