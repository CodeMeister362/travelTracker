// CSS (SCSS) file
import './css/styles.css';

// images
import './images/turing-logo.png'
import './images/airplane (2).png'
import './images/alps.jpg'
import './images/luggage.jpg'

// Local Files
import Traveler from './travelers'
import travelerMockData from './test-data/traveler-mock'
import tripsMockData from './test-data/trips-mock'
import destinationMockData from './test-data/destinations-mock'
import NewTrip from './newTrip'
import NewDestination from './newDestination'

// API Imports
const travelerApi = fetch('http://localhost:3001/api/v1/travelers').then(res => res.json())
const destinationApi = fetch('http://localhost:3001/api/v1/destinations').then(res => res.json())
const tripsApi = fetch('http://localhost:3001/api/v1/trips').then(res => res.json())

const getStartedBtn = document.querySelector('.get-started-btn')
const pastTripsDisplay = document.querySelector('.past-trips')
const upcomingTripsDisplay = document.querySelector('.upcoming-trips')
const spentDataDisplay = document.querySelector('.spent-data')
const inputDate = document.querySelector('.date')
const inputDuration = document.querySelector('.duration')
const inputTravelers = document.querySelector('.num-travelers')
const inputDestinations = document.querySelector('.destinations')
const bookButton = document.querySelector('.book-btn')

function getRandomInt() {
	return Math.floor(Math.random() * 50);
};
const randomNum = getRandomInt();

getStartedBtn.addEventListener('click', () => {
	Promise.all([travelerApi, destinationApi, tripsApi])
		.then(allApiData => {

		let	allData = new Traveler(allApiData[0].travelers, allApiData[1].destinations, allApiData[2].trips)
		
		let pastTripData = allData.getPastTrips(randomNum).map(trip => {
			return `<li>${trip.destination}</li>`
		}).join('')
			pastTripsDisplay.innerHTML = 
				`<h3>Past Trips</h3>
					<ul>
						${pastTripData}
					</ul>
				`

		let allTimeSpent = allData.getTotalCost(randomNum).toFixed(2)
			spentDataDisplay.innerHTML = 
			`<h3>Spent To Date</h3>
				<ul>
				$	${allTimeSpent}
				</ul>
			`	
		})
})

bookButton.addEventListener('click', () => {
	Promise.all([travelerApi, destinationApi, tripsApi])
		.then(allApiData => {

		let	allData = new Traveler(allApiData[0].travelers, allApiData[1].destinations, allApiData[2].trips)

		let newTripId = (allApiData[2].trips.length + 1)
		
		let placeID = allData.destinationData.find(place => {
			if(place.destination === inputDestinations.value) {
				return place.id
			}
		})

		const postNewTrip = () => {
			if(inputDate.value && inputDuration.value && inputTravelers.value && inputDestinations.value){
				const dataToPost = new NewTrip(newTripId, randomNum, placeID.id, inputTravelers.value, inputDate.value, inputDuration.value, 'pending', [])
				console.log(dataToPost)
				fetch('http://localhost:3001/api/v1/trips',{
					method: 'POST',
					body: JSON.stringify(dataToPost), 
					headers: {
						'Content-Type': 'application/json'
					}
				})
				let upcomingTripData = allData.getUpcomingTrips(randomNum).map(trip => {
					return `<li>${trip.destination}</li>`
				}).join('')
					upcomingTripsDisplay.innerHTML = 
					`<h3>Upcoming Trips</h3>
						<ul>
							${upcomingTripData}
						</ul>
					`
				} 
		}
		postNewTrip()
	})
})







