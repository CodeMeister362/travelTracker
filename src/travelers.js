class Traveler {
	constructor(travelerMockData, destinationMockData, tripsMockData) {
		this.travelerData = travelerMockData
		this.destinationData = destinationMockData
		this.tripData = tripsMockData
	}

	getPastTrips = (id) => {
		let destinationIDArr = []
		this.tripData.filter(trip => {
			if(trip.userID === id){
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
		
	
}

export default Traveler