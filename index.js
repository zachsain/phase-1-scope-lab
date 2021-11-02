// Write your solution in this file!

var customerName = "bob"

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase()
}

function setBestCustomer(bestCustomer) {
    window.bestCustomer = "not bob"
    return bestCustomer 
}

function overwriteBestCustomer(newCustomer) {
    return window.bestCustomer = newCustomer 
}

function changeLeastFavoriteCustomer(unsuccesful)  {
    const leastFavorite = "whatever"
    leastFavorite = unsuccesful 
}