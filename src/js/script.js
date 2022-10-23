const buyButton = document.getElementById('buy-button')
const cartForm = document.getElementById('cart-form')


const addTicket = document.getElementById('add-ticket-one')
const removeTicket = document.getElementById('remove-ticket-one')
const ticket = document.getElementById('ticket-one')
const ticketPrice = document.getElementById('ticket-price-one')


addTicket.addEventListener("click", (e) => {
    e.preventDefault();
    ticket.innerText = parseInt(ticket.innerText)+1
    ticketPrice.innerText = "R$ " + parseInt(ticket.innerText)*90 + ",00 por " + ticket.innerText + " ingressos"
})

removeTicket.addEventListener("click", (e) => {
    e.preventDefault();
    if(parseInt(ticket.innerText) > 0) {
        ticket.innerText = parseInt(ticket.innerText)-1
        ticketPrice.innerText = "R$ " + parseInt(ticket.innerText)*90 + ",00 por " + ticket.innerText + " ingressos"
    } else {
        ticketPrice.innerText = "R$ 90,00 por pessoa"
    }
})


cartForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = cartForm.nome.value;
    const email =  cartForm.email.value;
    const quantityTickets = ticket.innerText;

    window.localStorage.setItem('nome', nome)
    window.localStorage.setItem('email', email)
    window.localStorage.setItem('quantityTickets', quantityTickets)
    window.location.href = "finalizacao.html"
})



const addTicketTwo = document.getElementById('add-ticket-two')
const removeTicketTwo = document.getElementById('remove-ticket-two')
const ticketTwo = document.getElementById('ticket-two')
const ticketPriceTwo = document.getElementById('ticket-price-two')
