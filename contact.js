let questionWrappers = document.querySelectorAll('.question-wrapper')
let downBtns = document.querySelectorAll('.down')
let upBtns = document.querySelectorAll('.up')
let isquestionWrapperOpen = null
let name = document.getElementById('name')
let email = document.getElementById('email')
let message = document.getElementById('message')
let nameError = document.querySelector('name-error')
let emailError = document.querySelector('email-error')
let messageError = document.querySelector('message-error')


downBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (isquestionWrapperOpen && isquestionWrapperOpen !== e.currentTarget.parentElement.parentElement.parentElement) {
      isquestionWrapperOpen.classList.remove("show-text")
    }
    let questionWrapper = e.currentTarget.parentElement.parentElement.parentElement
    questionWrapper.classList.add("show-text")
    isquestionWrapperOpen = questionWrapper
  })
})

upBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let questionWrapper = e.currentTarget.parentElement.parentElement.parentElement
    questionWrapper.classList.remove("show-text")
    isquestionWrapperOpen = (isquestionWrapperOpen === questionWrapper) ? null : isquestionWrapperOpen
  })
})

let validateName = () =>{
	if(name.value.length === 0){
		nameError.innerHTML = `<p>Name is required</P>`
		return false
	}
	if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
		nameError.innerHTML = `Write Full Name`
		return false
	}
	nameError.innerHTML = `valid`
	return true
}































/*let questionWrapper = document.querySelectorAll('.question-wrapper')
let downBtn = document.querySelectorAll('.down')
let upBtn = document.querySelectorAll('.up')
let isquestionWrapperOpen = null

downBtn.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		if (isquestionWrapperOpen && isquestionWrapperOpen !== question){
			isquestionWrapperOpen.classList.add("show-text")
		}
		let question = e.currentTarget.parentElement.parentElement.parentElement
		question.classList.add("show-text")
		isquestionWrapperOpen = question
	})
})


upBtn.forEach((btn) => {
	btn.addEventListener("click", (e) =>{
		let questionWrapper = e.currentTarget.parentElement.parentElement.parentElement
		questionWrapper.classList.remove("show-text")
	})
})*/

