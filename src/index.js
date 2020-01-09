
import $ from 'jquery';
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

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