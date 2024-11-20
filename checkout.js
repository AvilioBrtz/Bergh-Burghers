let firstInput = document.getElementById('firstname')
let lastInput = document.getElementById('lastname')
let emailInput = document.getElementById('email')
let phoneInput = document.getElementById('phone')
let cityInput = document.getElementById('city')
let streetInput = document.getElementById('street')
let submitBtn = document.getElementById('btn')
let errorMsg = document.getElementById('error-message')

let address = {
	name:"",
	email:"",
	phone:"",
	city:"",
	street:"",
	cartProducts:""
}

console.log(cart)
submitBtn.addEventListener('click', () =>{
	let first = firstInput.value
	let last = lastInput.value
	let email = emailInput.value
	let phone = phoneInput.value
	let city = cityInput.value
	let street = streetInput.value

	if(firstInput.required && !first){
		return errorMsg.textContent = "Please fill in your first name!"
	}

	if(lastInput.required && !last){
		return errorMsg.textContent = "Please fill in your last name!"
	}

	if(phoneInput.required && !phone){
		return errorMsg.textContent = "Please fill in your phone number!"
	}

	if(cityInput.required && !city){
		return errorMsg.textContent = "Please fill in the town to deliver!"
	}

	address.name = first + " " + last
	address.email = email
	address.phone = phone
	address.city = city
	address.street = street
	console.log(address)

	firstInput.value = ""
	lastInput.value = ""
	phoneInput.value = ""
	emailInput.value = ""
	cityInput.value = ""
	streetInput.value = ""

	alert("Order created successfully")
	localStorage.removeItem("data")
	window.location.assign("https://aviliobrtz.github.io/Bergh-Burghers/index.html");
})