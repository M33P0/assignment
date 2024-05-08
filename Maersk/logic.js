const shuffleBtn = document.getElementById('sas-actions__shuffle-btn');
const sortBtn = document.getElementById('sas-actions__sort-btn');
const numberCardsContainer = document.getElementById('sas-number-cards');
const allCards = Array.from(numberCardsContainer.children);

// Function to shuffle the cards in random order
function shuffleCardOrder() {
    allCards.sort(() => Math.random() - 0.5); 
    smoothEffect();
    allCards.forEach((card, index) => {
        card.style.order = index; 
    });
}

// Function to sort the cards in ascending order
function sortCardOrder() {
    smoothEffect();
    allCards.sort((a, b) => {
        const numA = parseFloat(a.dataset.number);
        const numB = parseFloat(b.dataset.number);
        return numA - numB;
    });
    allCards.forEach((card, index) => {
        card.style.order = index; 
    });
}

// Function to add blur effect when action buttons are clicked
function smoothEffect() {
    allCards.forEach((card) => {
        card.style.filter = "blur(10px)";
    });
    setTimeout(function(){
        allCards.forEach((card) => {
            card.style.filter = "blur(0px)";
        });
    },400)
}

// Attach click event to both the action buttons
shuffleBtn.addEventListener('click', shuffleCardOrder);
sortBtn.addEventListener('click', sortCardOrder);