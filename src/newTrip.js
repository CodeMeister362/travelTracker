class NewTrip {
	constructor(id, userID, destinationID, travelers, data, duration, status) {
		this.id = id
		this.userID = userID
		this.destinationID = destinationID
		this.travelers = travelers
		this.date = data
		this.duration = duration
		this.status = status
		this.suggestedActivites = []
	}
}

export default NewTrip