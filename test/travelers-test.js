import { assert } from 'chai';
import Traveler from '../src/travelers'
import travelerMockData from '../src/test-data/traveler-mock'
import destinationMockData from '../src/test-data/destinations-mock'
import tripsMockData from '../src/test-data/trips-mock'

describe('traveler class', () => {

	let traveler

	beforeEach(() => {
		traveler = new Traveler (travelerMockData, destinationMockData, tripsMockData)
	})

	it('should be a function', () => {
		assert.isFunction(Traveler)
	})


	it('should have a traveler data set', () => {
		assert.deepEqual(traveler.travelerData, [
			{
				"id": 1,
				"name": "Ham Leadbeater",
				"travelerType": "relaxer",
			}, {
				"id": 2,
				"name": "Rachael Vaughten",
				"travelerType": "thrill-seeker",
			}, {
				"id": 3,
				"name": "Sibby Dawidowitsch",
				"travelerType": "shopper",
			}, {
				"id": 4,
				"name": "Leila Thebeaud",
				"travelerType": "photographer",
			}, {
				"id": 5,
				"name": "Tiffy Grout",
				"travelerType": "thrill-seeker",
			}
		])
	})

	it('should have a destination data set', () => {
		assert.deepEqual(traveler.destinationData, [
			{
				"id": 1,
				"destination": "Lima, Peru",
				"estimatedLodgingCostPerDay": 70,
				"estimatedFlightCostPerPerson": 400,
				"image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
				"alt": "overview of city buildings with a clear sky"
			}, {
				"id": 2,
				"destination": "Stockholm, Sweden",
				"estimatedLodgingCostPerDay": 100,
				"estimatedFlightCostPerPerson": 780,
				"image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
				"alt": "city with boats on the water during the day time"
			},
			{
				"id": 3,
				"destination": "Sydney, Austrailia",
				"estimatedLodgingCostPerDay": 130,
				"estimatedFlightCostPerPerson": 950,
				"image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
				"alt": "opera house and city buildings on the water with boats"
			},
			{
				"id": 4,
				"destination": "Cartagena, Colombia",
				"estimatedLodgingCostPerDay": 65,
				"estimatedFlightCostPerPerson": 350,
				"image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
				"alt": "boats at a dock during the day time"
			},
			{
				"id": 5,
				"destination": "Madrid, Spain",
				"estimatedLodgingCostPerDay": 150,
				"estimatedFlightCostPerPerson": 650,
				"image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
				"alt": "city with clear skys and a road in the day time"
			}
		])
	})

	it('should have a trip data set', () => {
		assert.deepEqual(traveler.tripData, [
			{
				"id": 1,
				"userID": 1,
				"destinationID": 1,
				"travelers": 1,
				"date": "2022/09/16",
				"duration": 8,
				"status": "approved",
				"suggestedActivities": []
			},
			{
				"id": 2,
				"userID": 1,
				"destinationID": 2,
				"travelers": 5,
				"date": "2022/10/04",
				"duration": 18,
				"status": "approved",
				"suggestedActivities": []
			}, {
				"id": 3,
				"userID": 2,
				"destinationID": 3,
				"travelers": 4,
				"date": "2022/05/22",
				"duration": 17,
				"status": "approved",
				"suggestedActivities": []
			}, {
				"id": 4,
				"userID": 2,
				"destinationID": 4,
				"travelers": 2,
				"date": "2022/02/25",
				"duration": 10,
				"status": "approved",
				"suggestedActivities": []
			}, {
				"id": 5,
				"userID": 3,
				"destinationID": 5,
				"travelers": 3,
				"date": "2022/04/30",
				"duration": 18,
				"status": "approved",
				"suggestedActivities": []
			}
		])
	})

	it('traveler data at index 0 should be an object with id, name, and traveler properties', () => {
		assert.deepEqual(traveler.travelerData[0], {
			"id": 1,
			"name": "Ham Leadbeater",
			"travelerType": "relaxer",
		})
	})

	it('should get past trip for the id passed in', () => {
		assert.deepEqual(traveler.getPastTrips(1), [
			{
				"id": 1,
				"destination": "Lima, Peru",
				"estimatedLodgingCostPerDay": 70,
				"estimatedFlightCostPerPerson": 400,
				"image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
				"alt": "overview of city buildings with a clear sky"
			}, {
				"id": 2,
				"destination": "Stockholm, Sweden",
				"estimatedLodgingCostPerDay": 100,
				"estimatedFlightCostPerPerson": 780,
				"image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
				"alt": "city with boats on the water during the day time"
			}
		])
	})

})