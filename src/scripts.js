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
const travelerName = document.querySelector('.travelerName')
const estimateBtn = document.querySelector('.get-estimate')
const showEstimate = document.querySelector('.estimate')
const loginName = document.querySelector('#user-name')
const loginPassword = document.querySelector('#password')
const unHide = document.querySelector('.hidden')

Promise.all([travelerApi, destinationApi, tripsApi])
	.then(allApiData => {

	let	allData = new Traveler(allApiData[0].travelers, allApiData[1].destinations, allApiData[2].trips)
	
	getStartedBtn.addEventListener('click', () => {
		let userNum = Number(loginName.value.slice(8,10))
		let travelerUserName
		if(userNum <= 50 && userNum >= 1) {
			travelerUserName = `traveler${userNum}`
		} else {
			alert('User Not Found')
		}

		if(loginName.value === travelerUserName && loginPassword.value === 'travel') {
			unHide.classList.remove('hidden')
			let pastTripData = allData.getPastTrips(userNum).map(trip => {
				return `<li>${trip.destination}</li>`
			}).join('')
			pastTripsDisplay.innerHTML = 
				`<h2>Past Trips</h2>
					<ul>
						${pastTripData}
					</ul>
				`
			let upcomingTripData = allData.getUpcomingTrips(userNum).map(trip => {
				return `<li>${trip.destination}</li>`
			}).join('')
			upcomingTripsDisplay.innerHTML = 
			`<h2>Upcoming Trips</h2>
				<ul>
					${upcomingTripData}
				</ul>
			`
			travelerName.innerHTML = `Welcome back ${allData.travelerData[userNum - 1].name}!`
			let allTimeSpent = allData.getTotalCost(userNum).toFixed(2)
				spentDataDisplay.innerHTML = 
				`<h2>Spent To Date</h2>
					<p>$ ${allTimeSpent} (10% Agent Fee Added)</p>
				`	
		} else {
			alert('Password is not correct.')
		}
	})
		
	bookButton.addEventListener('click', () => {
		let newTripId = (allApiData[2].trips.length + 1)
		let userNum = Number(loginName.value.slice(8,10))
		let placeID = allData.destinationData.find(place => {
			if(place.destination === inputDestinations.value) {
				return place.id
			}
		})
	
		const postNewTrip = () => {
			if(inputDate.value && inputDuration.value && inputTravelers.value && inputDestinations.value){
				const dataToPost = new NewTrip(newTripId, userNum, placeID.id, parseInt(inputTravelers.value), inputDate.value.replace(/-/g, '/'), parseInt(inputDuration.value), 'pending', [])
				fetch('http://localhost:3001/api/v1/trips', {
					method: 'POST',
					body: JSON.stringify(dataToPost), 
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(data => data.json())
				.then(data => console.log(data))
				.catch(err => console.log(`Error at: ${err}`))
				let newTripDestination = allData.destinationData.filter(place => {
					return place.id === dataToPost.destinationID
				})
				let upcomingTripData = allData.getUpcomingTrips(userNum).map(trip => {
					return `<li>${trip.destination}</li>`
				}).join('')
					upcomingTripsDisplay.innerHTML = 
					`<h2>Upcoming Trips</h2>
						<ul>
							<li>Pending Trip: ${newTripDestination[0].destination}</li>
							${upcomingTripData}
						</ul>
					`
				} 
		}
		postNewTrip()
	})
	
	estimateBtn.addEventListener('click', () => {
		if(inputDate.value && inputDuration.value && inputTravelers.value && inputDestinations.value){
			let newTripDestination = allData.destinationData.find(place => {
				return place.destination === inputDestinations.value
			})
			console.log(newTripDestination)
			let newTripCost = allData.getNewTripCost(newTripDestination.id, inputTravelers.value, inputDuration.value) 
			let tripPlusAgentFee = newTripCost + (newTripCost * .1)
			showEstimate.innerHTML = `$ ${tripPlusAgentFee} (10% Agent Fee Added)`
		}
	})
}).catch(err => {
	console.log(err)
	alert(err)
})















