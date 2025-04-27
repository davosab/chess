(function () {
  const settingsButton = document.querySelector("[data-settings-button]");
  const settingsModal = document.querySelector("[data-settings-modal]");
  const closeButton = document.querySelector("[data-close-button]"); 

  settingsModal.classList.remove("hidden");
  settingsModal.showModal();

  // Open modal
  settingsButton.addEventListener("click", () => {
    settingsModal.classList.remove("hidden");
    settingsModal.classList.add("flex");
    settingsModal.showModal();
  });

  // Close modal (x button)
  closeButton.addEventListener("click", closeModal = () => {
    settingsModal.classList.remove("flex");
    settingsModal.classList.add("hidden");
    setTimeout(() => settingsModal.close(), 200);
  });

  // Close modal when clicks outside modal
  settingsModal.addEventListener("click", e => {
    const modalDimensions = settingsModal.getBoundingClientRect();
    if (
      e.clientX < modalDimensions.left ||
      e.clientX > modalDimensions.right ||
      e.clientY < modalDimensions.top ||
      e.clientY > modalDimensions.bottom
    )
      closeModal();
  });

  // Close modal when "Escape"
  window.addEventListener("keydown", e => {
    if (e.key == "Escape") closeModal();
  });


  /*** Inputs ****************************************************************/
  
  const p1Name = document.querySelector("[data-p1-name]");
  const p2Name = document.querySelector("[data-p2-name]");

  const p1NameInput = document.querySelector("[data-p1-name-input]");
  const p2NameInput = document.querySelector("[data-p2-name-input]");

  const cancelBtn = document.querySelector("[data-cancel-btn]");
  const startNewGameBtn = document.querySelector("[data-start-new-game-btn]");

  startNewGameBtn.addEventListener("click", () => {
    if (p1NameInput.value.trim() == "" || 
      p2NameInput.value.trim() == "") {
      
      alert("Player names must not be empty!");
      return;
    }
    p1Name.innerHTML = p1NameInput.value;
    p2Name.innerHTML = p2NameInput.value;

    board = [
      ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
      ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
      ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
    ];

    closeModal();
  });



})();