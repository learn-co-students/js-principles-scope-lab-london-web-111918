var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  return bestCustomer = 'not bob'; // Global scope defined within a function is not best practice. Used for illustration purposes!
}

function overwriteBestCustomer() {
  return bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = ''

function changeLeastFavoriteCustomer() {
  return leastFavoriteCustomer = 'john'
}
