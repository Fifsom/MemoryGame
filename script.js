var kort = document.querySelectorAll(".flip-card")

function flipCard(e){
    let clickedCard = e.target;
    clickedCard.classList.add("flip")
}

kort.forEach(card =>{
    card.addEventListener("click", flipCard)
})