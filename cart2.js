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
let addText = document.getElementById('add-text')
let cart =JSON.parse(localStorage.getItem("data")) || []
let shoppingCart = document.getElementById('shopping-cart')
let removeIcon = document.getElementById('remove-icon')
let subTotal1 = document.getElementById('subtotal1')
let subTotal2 = document.getElementById('subtotal2')
let totalFee = document.getElementById('total-fee')
let containerWrapper = document.querySelector('.container-wrapper')
let table2 = document.getElementById('table2')
let deliveryFee = 15
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

let calculation = () =>{
	cartAmount.innerHTML = cart.map((product) => product.item).reduce((x,y) => x + y,0)
}

calculation()

let generateItems = () =>{
	if (cart.length !== 0){
		return(shoppingCart.innerHTML = cart.map((product) =>{
			let{id,item} = product
			let search = products.find((y) => y.id === id) || []
			return`
	<div class="item">
	<div class="img-wrapper">
        <div id="remove-icon" onclick="removeItem(${id})"><i class="fa fa-times" aria-hidden="true"></i></div>
		<div class="img">
	       <img src=${search.imgSrc}>
		</div>
	</div>

	<div class="text-wrapper">
		<div class="product">   
	        <p>${search.name}</p>
	    </div>

		<div class="price">
			<p>&#36 ${search.price}</p>
		</div>
	
		<div class="btn">
		    <div onclick="decrement(${id})"><button>-</button></div>
            <div id="${id}" class="quantity">${product.item}</div>
            <div onclick="increment(${id})"><button>+</button></div>
		</div>

		<div class="subtotal" id="subtotal1">
			<div>&#36 ${item * search.price}</div>
		</div>
	</div>
	</div>
`
		})
		.join("")
		)
	}else{
		shoppingCart.innerHTML = ``
		table2.innerHTML = ``
		containerWrapper.innerHTML = `
		<div class="emptycart-text">
		<p>Your cart is currently empty.</p>
		<a href="burgers.html">Return to shop</a>
		</div>
		`
		displayCartAmount()
	}
}

generateItems()

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
	
	calculation()
	generateItems()
	update(selectedItem.id)
	localStorage.setItem("data",JSON.stringify(cart))
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
	generateItems()
	localStorage.setItem("data",JSON.stringify(cart))
}
let update = (id) => {
	let search = cart.find((product) => product.id === id)
	//console.log(search.item)
	document.getElementById(id).innerHTML = search.item 
	subtotalAmount()
	totalFeeAmount()
}

let removeItem = (id) =>{
	let selectedItem = id
	cart = cart.filter((product) =>product.id !== selectedItem.id)
	calculation()
	generateItems()
	subtotalAmount()
	totalFeeAmount()
	localStorage.setItem("data",JSON.stringify(cart))
}

//finding the total price plus delivery fee in the cart
let subtotalAmount = () =>{
		if(cart.length !== 0){
		let amount = cart.map((product) =>{
			let{item,id} = product
		    let search = products.find((y) => y.id === id) || []
		    return item * search.price
		}).reduce((x,y) => x + y ,0)
		subTotal2.innerHTML = `
			<div>Subtotal</div>
			<div>&#36 ${amount}</div>
		` 
	}else return
}
subtotalAmount()

let totalFeeAmount = () =>{
	if(cart.length !== 0){
		let amount = cart.map((product) =>{
			let{item,id} = product
		    let search = products.find((y) => y.id === id) || []
		    return item * search.price
		}).reduce((x,y) => x + y ,0) + deliveryFee
		totalFee.innerHTML = `
		    <div>Total</div>
			<div>&#36 ${amount}</div>	
		` 
	}else return
}
totalFeeAmount()

openmenuIcon.addEventListener("click", () =>{
	navcenterColumn.classList.add("show")
})

closemenuIcon.addEventListener("click", () =>{
	navcenterColumn.classList.remove("show")
})




