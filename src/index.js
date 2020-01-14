/* eslint-disable max-len */
/* eslint-disable no-console */

import $ from 'jquery';
import './css/base.scss';
import Bookings from './classes/bookings.js'
import Manager from './classes/manager.js'
import Room from './classes/room.js'
import Guest from './classes/guest.js'
import FrontDesk from './classes/frontDesk.js'


// let date = new Date();
// let today;

let bookings;
let guestId; 

let frontDesk;


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'



//API calls

let getUsers = 
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
    .then(response => response.json())
    .then(data => data.users)
    .catch(error => console.log(error))


let getRooms = 
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
    .then(response => response.json())
    .then(data => data.rooms)
    .catch(error => console.log(error))


let getBookings = 
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
    .then(response => response.json())
    .then(data => data.bookings)
    .catch(error => console.log(error))




Promise.all([getUsers, getRooms, getBookings])
  .then(data => {
    getUsers = data[0];
    getRooms = data[1];
    getBookings = data[2];
  })
  .then(data => populateFrontDesk(data))
  .catch(error => console.log(error))

const populateFrontDesk = () => {
  frontDesk = new FrontDesk (getRooms, getBookings, getUsers)
  console.log(frontDesk)
}


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
  let guestName = $('.username').val().split('t')
  if ($('.username').val() === 'manager' && $('.password').val() === 'overlook2019') {
    window.location = './manager.html'
    loginManager()
  }
  if ($('.username').val() === 'guest' && $('.password').val() === 'overlook2019') {
    window.location = './guest.html'
    loginGuest()
  }
}

const loginManager = () => {

}

const loginGuest = () => {

}


// const doThing = () => {
//   console.log(guest)
//   $(".display").text(bookings.allRooms[0].number)
// }


//Event Listeners

$('.login-button').click(checkForUsernamePassword)
// $('.display').click(doThing)


