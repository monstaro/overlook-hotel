
import $ from 'jquery';
import './css/base.scss';
import Bookings from './classes/bookings.js'
import Manager from './classes/manager.js'
import Room from './classes/room.js'
import Users from './classes/users.js'
import frontDesk from './classes/frontDesk.js'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'



//API calls

const getUsers = () => {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
    .then(response => response.json())
    .then(apiData => console.log(apiData))
    .catch(error => console.log(error))
}
getUsers()

const getRooms = () => {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
    .then(response => response.json())
    .then(apiData => console.log(apiData))
    .catch(error => console.log(error))
}
getRooms()

const getBookings = () => {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
    .then(response => response.json())
    .then(apiData => console.log(apiData))
    .catch(error => console.log(error))
}
getBookings()

// const getAllData = () => {
//   Promise.all([getUsers(), getRooms(), getBookings()])
//   .then(allData => console.log(allData))
//   .catch(error => console.log(error))
// }

// getAllData()


const checkForUsernamePassword = () => {
  if (!$('.username').val()) {
    $('.username-error').addClass('error-load')
    $('.username-error').removeClass('hidden')
  }
  if (!$('.password').val()) {
    $('.password-error').removeClass('hidden')
  }
  if ($('.username').val() && $('.password').val()) {
    $('.username-error').addClass('hidden')
    $('.password-error').addClass('hidden')
    loginUser()
  }
}


const loginUser = () => {
  if ($('.username').val() === 'manager' && $('.password').val() === 'overlook2019') {
    window.location = './manager.html'
    loginManager()
  }
  if ($('.username').val() === 'guest50' && $('.password').val() === 'overlook2019') {
    window.location = './guest.html'
  }
}

const loginManager = () => {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
    .then(response => response.json())
    .then(apiData => loadReservations(apiData.bookings))
    .catch(error => console.log(error))
}
  
const loadReservations = (reservations) => {
  reservations.forEach(reservation => {
    let bookedReservation = new Reservation(reservation)
    frontDesk.allRooms.push(bookedReservation)
  });
  console.log(frontDesk.allRooms)
} 

//Event Listeners

$('.login-button').click(checkForUsernamePassword)
