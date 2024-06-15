let closeEye = document.querySelector('.close')
let openEye = document.querySelector('.open')
let password = document.getElementById('password')


openEye.addEventListener("click", () =>{
	if(password.value.length !== 0){
		password.type = "text"
		closeEye.classList.add("show")
		openEye.classList.add("show")
	}else return
}) 

closeEye.addEventListener("click", () => {
	password.type = "password"
	closeEye.classList.remove("show")
	openEye.classList.remove("show")
})