class Traveler {
	constructor(travelerMockData, destinationMockData, tripsMockData) {
		this.travelerData = travelerMockData
		this.destinationData = destinationMockData
		this.tripData = tripsMockData
	}

	getPastTrips = (id) => {
		let destinationIDArr = []
		this.tripData.forEach(trip => {
			if(trip.userID === id && trip.status !== 'pending'){
				 destinationIDArr.push(trip.destinationID) 
			}
		})
		let places = []
		this.destinationData.forEach(place => {
			destinationIDArr.forEach(id => {
				if(id === place.id){
					places.push(place)
				}
			})
		})
		if(places.length >= 1) {
			return places
		} else {
			return 'Error: User Not Found'
		}
	}

	getUpcomingTrips = (id) => {
		let destinationIDArr = []
		this.tripData.forEach(trip => {
			if(trip.userID === id && trip.status === 'pending'){
				 destinationIDArr.push(trip.destinationID) 
			}
		})
		let places = []
		this.destinationData.forEach(place => {
			destinationIDArr.forEach(id => {
				if(id === place.id){
					places.push(place)
				}
			})
		})
		return places
	}

	getTotalCost = (id) => {
		let pastTrips = this.getPastTrips(id)
		let flightCosts = 0
		let lodgingCosts = 0
		let totalCost = 0
		let withAgentFee = 0
		let costOfTrips = []
		let allTimeTotal = 0

		this.tripData.map(trip => {
			pastTrips.forEach(past => {
				if(past.id === trip.destinationID){
					flightCosts =	trip.travelers * past.estimatedFlightCostPerPerson
					lodgingCosts = trip.duration * past.estimatedLodgingCostPerDay
					totalCost = flightCosts + lodgingCosts
					withAgentFee = (totalCost * .1) + totalCost
					costOfTrips.push(withAgentFee)
				}
			})
		})
		const allPrice = () => {
			costOfTrips.map(cost => {
				return	allTimeTotal += cost
			})
		}
		allPrice()
		return allTimeTotal
	}

	getNewTripCost = (destinationId, numOfTravelers, numOfDays) => {
		let destination = this.destinationData.find(data => {
			return data.id === destinationId
		})
		let flightCost = destination.estimatedFlightCostPerPerson * numOfTravelers
		let lodgingCost = destination.estimatedLodgingCostPerDay * numOfDays
		let total = flightCost + lodgingCost
		return total
	}
}

export default Traveler