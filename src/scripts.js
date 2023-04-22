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

// API Imports
let travelerApi = fetch('http://localhost:3001/api/v1/travelers').then(res => res.json())
let destinationApi = fetch('http://localhost:3001/api/v1/destinations').then(res => res.json())
let tripsApi = fetch('http://localhost:3001/api/v1/trips').then(res => res.json())



const getStartedBtn = document.querySelector('.get-started-btn')
const pastTripsDisplay = document.querySelector('.past-trips')
const upcomingTripsDisplay = document.querySelector('.upcoming-trips')
const spentDataDisplay = document.querySelector('.spent-data')

function getRandomInt() {
	return Math.floor(Math.random() * 50);
};
const randomNum = getRandomInt();

getStartedBtn.addEventListener('click', () => {

	Promise.all([travelerApi, destinationApi, tripsApi])
		.then(allApiData => {

			const allData = new Traveler(allApiData[0].travelers, allApiData[1].destinations, allApiData[2].trips)

				
			let pastTripData = allData.getPastTrips(randomNum).map(trip => {
				return `<li>${trip.destination}</li>`
			}).join('')
			
				pastTripsDisplay.innerHTML = 
					`
					<h3>Past Trips</h3>
					<ul>
						${pastTripData}
					</ul>
					`

				let allTimeSpent = allData.getTotalCost(randomNum)
					spentDataDisplay.innerHTML = 
					`
					<h3>Spent To Date</h3>
					<ul>
					$	${allTimeSpent}
					`
			})

			.catch(err=>{
				console.log('somethings gone wrong', err)
		})

})