//Fetch JSON DB
fetch("http://localhost:3000/current-exhibits")
.then (r => r.json())
.then (art => displayArt(art[0]))

//Create variables for Elements needed

function displayArt (art) {
const exTitle = document.getElementById("exhibit-title")
const exImg = document.getElementById("exhibit-image")
const exDescription = document.getElementById("exhibit-description")
const comments = document.getElementById("comments-section")

//Change text/img to content from JSON DB
exTitle.textContent = art.title
exImg.src = art.image
exDescription.textContent = art.description
art.comments.forEach((comment) => 
{
    const organizeComments = document.createElement('p')
    organizeComments.textContent = comment
    comments.append (organizeComments)
})

//Add Comment form functionality

const findForm = document.getElementById("comment-form")
findForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newComment = e.target['comment-input'].value
    const organizeComments = document.createElement('p')
    organizeComments.textContent = newComment
    comments.append (organizeComments)
})

//Add button functionality

const tickets = document.getElementById('buy-tickets-button')
const ticketCount = document.getElementById('tickets-bought')
tickets.addEventListener('click', () => {
    ticketCount.textContent = parseInt(ticketCount.textContent) + 1 + " Tickets Bought" 
})
}