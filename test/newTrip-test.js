import { assert } from 'chai'
import NewTrip from '../src/newTrip'

describe('new Trip class', () => {

	let trip

	beforeEach(() => {
		trip = new NewTrip(3, 32, 14, 1, 12/14/2020, 5, 'pending')
	})

	it('should be a function', () => {
		assert.isFunction(NewTrip)
	})

	it('should have an id', () => {
		assert.equal(trip.id, 3)
	})

	it('should have a user id', () => {
		assert.equal(trip.userID, 32)
	})

	it('should have a destinationID', () => {
		assert.equal(trip.destinationID, 14)
	})

	it('should have travelers', () => {
		assert.equal(trip.travelers, 1)
	})

	it('should have date', () => {
		assert.equal(trip.date, 12/14/2020)
	})

	it('should have duration', () => {
		assert.equal(trip.duration, 5)
	})

	it('should have status', () => {
		assert.equal(trip.status, 'pending')
	})

	it('should have an empty array for activities', () => {
		assert.deepEqual(trip.suggestedActivities, [])
	})
})