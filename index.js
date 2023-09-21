// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
  var bestCustomer;

  function setBestCustomer() {
    bestCustomer = undefined;
  }

  function setBestCustomer(){
    bestCustomer = 'not bob';
  }

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'initialValue'; // Define and initialize leastFavoriteCustomer

function changeLeastFavoriteCustomer(newLeastFavoriteCustomer) {
  leastFavoriteCustomer = newLeastFavoriteCustomer;
}

