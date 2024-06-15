let reviews = [
  {
    id: 1, 
    name: "Christine Jones",
    text: "Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Cupiditate enim distinctio unde sequi sit iste libero adipisci.",
    imgSrc: "img/christopher.jpg",
  },

  {
    id: 2, 
    name: "Prince Akachi",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut autem quod deserunt molestias sed, itaque facere libero incidunt aut aperiam, facilis repellat totam modi.",
    imgSrc: "img/prince-akachi.jpg",
  },

  {
    id: 3, 
    name: "Michael Dam",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui, vel amet in. Maxime expedita explicabo non magni unde labore a quod natus.",
    imgSrc: "img/michael-dam.jpg",
  },

  {
    id: 4, 
    name: "Foto Sushi",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Ea, accusamus nam labore dolores. Reprehenderit, doloribus. ",
    imgSrc: "img/foto-sushi.jpg",
  },

  {
    id: 5, 
    name: "Andrey Parker",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quasi voluptatem voluptates reiciendis asperiores quos at ipsa dolore.",
    imgSrc: "img/andrey.jpg",
  },

  {
    id: 6, 
    name: "Cesar Rincon",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, sequi in nesciunt voluptatem officia aut nisi, minima vero sit qui.",
    imgSrc: "img/cesar-rincon.jpg",
  }
]

let prevBtn = document.getElementById('backward')
let nextBtn = document.getElementById('forward')
let img = document.getElementById('person-img')
let name = document.querySelector('.name')
let comment = document.getElementById('text')
let currentItem = 0


window.addEventListener("DOMContentLoaded", () =>{
  showPerson()
})

// show person based on item
let showPerson = () => {
  let item = reviews[currentItem]
  img.src = item.imgSrc
  name.textContent = item.name
  comment.textContent = item.text
  console.log(item.imgSrc)
}


nextBtn.addEventListener("click", () =>{
  currentItem = (currentItem + 1) % reviews.length
  if (currentItem >= reviews.length) {
    currentItem = 0
  }
  showPerson()
})

prevBtn.addEventListener("click", () =>{
  currentItem = (currentItem - 1 + reviews.length) % reviews.length
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson()
})




/*let reviews = [
{
  id: 1, 
  name: "Christine Jones",
  text: "Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Cupiditate enim distinctio unde sequi sit iste libero adipisci.",
  imgSrc: "/Users/Brian/OneDrive/Pictures/christopher.jpg",
},

{
  id: 2, 
  name: "Prince Akachi",
  text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut autem quod deserunt molestias sed, itaque facere libero incidunt aut aperiam, facilis repellat totam modi.",
  imgSrc: "/Users/Brian/OneDrive/Pictures/prince-akachi.jpg",
},

{
  id: 3, 
  name: "Michael Dam",
  text: "Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Cupiditate enim distinctio unde sequi sit iste libero adipisci.",
  imgSrc: "/Users/Brian/OneDrive/Pictures/michael-dam.jpg",
},

{
  id: 4, 
  name: "Foto Sushi",
  text: "Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Cupiditate enim distinctio unde sequi sit iste libero adipisci.",
  imgSrc: "/Users/Brian/OneDrive/Pictures/foto-sushi.jpg",
},

{
  id: 5, 
  name: "Andrey Parker",
  text: "Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Cupiditate enim distinctio unde sequi sit iste libero adipisci.",
  imgSrc: "/Users/Brian/OneDrive/Pictures/andrey.jpg",
},

{
  id: 6, 
  name: "Cesar Rincon",
  text: "Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Cupiditate enim distinctio unde sequi sit iste libero adipisci.",
  imgSrc: "/Users/Brian/OneDrive/Pictures/cesar-rincon.jpg",
}

]

let prevBtn = document.getElementById('backward')
let nextBtn = document.getElementById('forward')
let img = document.querySelector('.img')
let name = document.querySelector('.name')
let comment = document.querySelector('.text')
let currentItem = 0


window.addEventListener("DOMContentLoaded", () =>{
  showPerson()
})

// show person based on item
let showPerson = () => {
  let item = reviews[currentItem]
  img.src = item.imgSrc
  name.textContent = item.name
  comment.textContent = item.text
}


nextBtn.addEventListener("click", () =>{
  currentItem++
  showPerson()
})*/







