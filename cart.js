let iconCart = document.getElementById('icon-cart')
let popUp = document.querySelector('.pop-up')
let cartTab = document.querySelector('.cart-tab')
let total = document.getElementById('total')
let closeIconCart = document.getElementById('close-icon')
let closeIconpopUp = document.querySelector('.pop-up-icon')
let addCart = document.querySelectorAll('.add-btn')
let productList = document.querySelector('.shop-wrapper')
let cartAmount = document.getElementById('cart-amount')
let listCart = document.querySelector('.list-cart')
let addText = document.querySelector('.add-text')
let cart =JSON.parse(localStorage.getItem("data")) || []
let openmenuIcon = document.getElementById('bar-icon')
let closemenuIcon = document.getElementById('times-icon')
let navcenterColumn = document.querySelector('.center-column')


//displaying cart-amount
let displayCartAmount = () =>{
	if(cart.length === 0){
		cartAmount.style.display = "none"
	}
	else{
		cartAmount.style.display = "flex"
	}
}

displayCartAmount()
//render products
const initApp = () => {
	return (productList.innerHTML = products.map( (product) =>{
		let{id,name,price,imgSrc} = product
		let search = cart.find((product) => product.id === id) || []
		return `
	<div class="item id="product-id-${id}" ">
	<img src=${imgSrc}>
	<p>${name}<br>&#36 ${price}</p>
	<div class="btn">
       <div onclick="decrement(${id})"><button>-</button></div>
       <div id="${id}" class="quantity">${search.item === undefined ? 0 : search.item}</div>
       <div onclick="increment(${id})"><button>+</button></div>
	</div>
	<div class="add-btn" onclick="addToCart()"><button>Add to Cart</button></div>
	<div class="add-text hide"><u>Added to Cart</u></div>
    </div>
	`
	}).join(""))
}
initApp()


//increment,decrement and updating the cart and the items
let increment = (id) => {
	let selectedItem = id
	let search = cart.find((product) => product.id === selectedItem.id)
	if (search === undefined) {
		cart.push({
		id: selectedItem.id,
		item: 1,
	})
	}
	else{
		search.item += 1
	}
	
	//console.log(cart)
	update(selectedItem.id)
}
let decrement = (id) => {
	let selectedItem = id
	let search = cart.find((product) => product.id === selectedItem.id) 
	if (search === undefined)return
	else if (search.item === 0) return
	else{
		search.item -= 1
	}
	calculation()
	update(selectedItem.id)
	cart = cart.filter((product) => product.item !== 0)
	generateCartItems()
	localStorage.setItem("data",JSON.stringify(cart))
}
let update = (id) => {
	let search = cart.find((product) => product.id === id)
	//console.log(search.item)
	document.getElementById(id).innerHTML = search.item 
	totalAmount()
}

let calculation = () =>{
	cartAmount.innerHTML = cart.map((product) => product.item).reduce((x,y) => x + y,0)
}

calculation()


//generating items in the cart
let generateCartItems = () => {
	if (cart.length !== 0){
		return (listCart.innerHTML = cart.map((product) =>{
		let{id,item} = product
		let search = products.find((y) => y.id === id) || []
		return`
		<div class="item">
			<div class="image"><img src=${search.imgSrc}></div>
			<div class="name"><h1>${search.name}</h1> <p>${product.item} &times $ ${search.price}</p></div>
			<div class="item-icon" onclick="removeItem(${id})"><i class="fa fa-times-circle" aria-hidden="true"></i></div>
		</div>
		`
	})
	.join("")
  )	
	}
	else{
		cartTab.classList.add('hide')
		displayCartAmount()
	}
}
generateCartItems()

//adding items in the cart
let addToCart = () =>{
	calculation()
	displayCartAmount()
	localStorage.setItem("data",JSON.stringify(cart))
	generateCartItems()
}


//removing items in the cart
let removeItem = (id) =>{
	let selectedItem = id
	cart = cart.filter((product) =>product.id !== selectedItem.id)
	calculation()
	generateCartItems()
	totalAmount()
	localStorage.setItem("data",JSON.stringify(cart))
}

//finding the total price in the cart
let totalAmount = () =>{
	if(cart.length !== 0){
		let amount = cart.map((product) =>{
			let{item,id} = product
		    let search = products.find((y) => y.id === id) || []
		    return item * search.price
		}).reduce((x,y) => x + y,0)
		total.innerHTML = `
		<h1>Subtotal:&#36 ${amount}</h>		
		` 
	}else return
}
totalAmount()

// showing and not displaying the cart
iconCart.addEventListener("click", () =>{
	if(cart.length === 0){
		popUp.classList.remove('hide')
	}
	else{
		cartTab.classList.remove("hide")
	}
})

closeIconCart.addEventListener("click", () =>{
	cartTab.classList.add('hide')
})

//hiding the pop up
closeIconpopUp.addEventListener("click", () =>{
	popUp.classList.add('hide')
})

openmenuIcon.addEventListener("click", () =>{
	navcenterColumn.classList.add("show")
})

closemenuIcon.addEventListener("click", () =>{
	navcenterColumn.classList.remove("show")
})