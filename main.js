function buildCustomers() {
    let list = []
    for (let customer of customers) {
        let temp = {}
        temp.name = _.capitalize(customer.name.first) + " " + _.capitalize(customer.name.last) 
        temp.email = customer.email
        temp.address1 = _.startCase(customer.location.street)
        temp.address2 = _.startCase(customer.location.city) + ", " + nameToAbbr(customer.location.state) + " " + customer.location.postcode
        temp.dob = "DOB: " + moment(customer.dob).format("MMM D, YYYY")
        temp.since = "Customer since: " + moment(customer.registered).format("MMM D, YYYY")
        temp.pic = customer.picture.large
        list.push(temp)
    }

    let paneTemplate = document.querySelector("#customer-template").innerHTML
    let paneGenerator = _.template(paneTemplate)
    let paneTarget = document.querySelector(".display-box")

    for (let item of list) {
        let paneHTML = paneGenerator(item)
        paneTarget.innerHTML += paneHTML
    }
}

buildCustomers()
