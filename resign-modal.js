const resignYesButton = document.querySelector('.resign-yes-button');
const resignNoButton = document.querySelector('.resign-no-button');
const winnerModal = document.querySelector('.winner-modal');
const winnerText = document.querySelector('.winner-text');

const closeResignModal = function () {
    resignModal.classList.toggle('hidden');
    resignModal.close()
}

// If player presses "Yes", then a modal that says the winner pops up.
resignYesButton.addEventListener('click', function() {
     closeResignModal();
        winnerModal.classList.remove('hidden');
        winnerModal.showModal();
    if(currentTurn === 'w') {
        winnerText.innerHTML = player1Input.value + " resigned. " + player2Input.value + " is the winner!<br>Do you want to play again?";
    } else {
        winnerText.innerHTML = player2Input.value + " resigned. " + player1Input.value + " is the winner!<br>Do you want to play again?";
    }
})
// If player presses "no" then the game continues
resignNoButton.addEventListener('click', function() {
    closeResignModal();
})
