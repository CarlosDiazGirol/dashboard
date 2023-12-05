const body = document.body
const photos = [
  "../assets/img/job-savelsberg.jpg",
  "../assets/img/space.jpg",
  "../assets/img/marte.jpg",
  "../assets/img/lonely.jpg",
  "../assets/img/moon.jpg",
  "../assets/img/astronauta-nasa.jpg",
  "../assets/img/huella.jpg",
  "../assets/img/stars.jpg",
  "../assets/img/clouds.jpg",
  "../assets/img/nasa.jpg",
  "../assets/img/nebulosa.jpg",
  "../assets/img/storm.jpg",
  "../assets/img/astronauta.jpg",
  "../assets/img/red.jpg",
]

const changeBackground = () =>{
  const randomNumber = Math.floor(Math.random() * photos.length);
  newBackground = photos[randomNumber]
  body.style.backgroundImage = `url(${newBackground})`;
}


setInterval(() => {
  changeBackground()
}, 15000)

changeBackground()

