const mobileButton = document.getElementById("mobileButton")
const menu = document.getElementById("mobileMenu")
const closeButton = document.getElementById("closeButton")

mobileButton.onclick = () =>menu.classList.remove('hidden')
closeButton.onclick = () => menu.classList.add("hidden")