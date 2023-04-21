// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/airplane (2).png'
import './images/alps.jpg'
import './images/luggage.jpg'

// Local Files
import Traveler from './travelers'
import travelerMockData from './test-data/traveler-mock'
import tripsMockData from './test-data/trips-mock'
import destinationMockData from './test-data/destinations-mock'

const getStartedBtn = document.querySelector('.get-started-btn')
const pastTripsDisplay = document.querySelector('.past-trips')
const upcomingTripsDisplay = document.querySelector('.upcoming-trips')
const spentDataDisplay = document.querySelector('.spent-data')

function getRandomInt() {
	return Math.floor(Math.random() * 3);
};
const randomNum = getRandomInt();

const allData = new Traveler(travelerMockData, destinationMockData, tripsMockData)

getStartedBtn.addEventListener('click', () => {

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
})