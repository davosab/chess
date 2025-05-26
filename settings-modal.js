(function () {
  const settingsButton = document.querySelector("[data-settings-button]");
  const settingsModal = document.querySelector("[data-settings-modal]");
  const closeButton = document.querySelector("[data-close-button]"); 

  // Open modal
  settingsButton.addEventListener("click", () => {
    settingsModal.classList.remove("hidden");
    settingsModal.classList.add("flex");
    settingsModal.showModal();
    clearInterval(intervalId);
  });

  // Close modal (x button)
  closeButton.addEventListener("click", closeModal = () => {
    settingsModal.classList.remove("flex");
    settingsModal.classList.add("hidden");
    setTimeout(() => settingsModal.close(), 200);
    startTimer();
  });

  // Close modal when clicks outside modal
  settingsModal.addEventListener("click", e => {
    const modalDimensions = settingsModal.getBoundingClientRect();
    if (
      e.clientX < modalDimensions.left ||
      e.clientX > modalDimensions.right ||
      e.clientY < modalDimensions.top ||
      e.clientY > modalDimensions.bottom
    ){
      closeModal();
      startTimer();
    }
  });

  // Close modal when "Escape"
  window.addEventListener("keydown", e => {
    if (e.key == "Escape") {
    startTimer();
    closeModal();
    }
  });


  /*** Inputs ****************************************************************/
  
  const p1Name = document.querySelector("[data-p1-name]");
  const p2Name = document.querySelector("[data-p2-name]");

  const p1NameInput = document.querySelector("[data-p1-name-input]");
  const p2NameInput = document.querySelector("[data-p2-name-input]");

  const cancelBtn = document.querySelector("[data-cancel-btn]");
  const startNewGameBtn = document.querySelector("[data-start-new-game-btn]");

  setColours = () => {
    colourForWhite = 
      document.querySelector("[name='colours']:checked").getAttribute("data-white");
    colourForBlack = 
      document.querySelector("[name='colours']:checked").getAttribute("data-black");
  }

  startNewGameBtn.addEventListener("click", () => {
    if (p1NameInput.value.trim() == "" || 
      p2NameInput.value.trim() == "") {
      
      alert("Player names must not be empty!");
      return;
    }
    p1Name.innerHTML = p1NameInput.value;
    p2Name.innerHTML = p2NameInput.value;

   const timeInput = document.querySelector('input[name="min"]:checked') 
    blackTime = timeInput.value * 60;
    whiteTime = timeInput.value * 60;

    initBoard();

    setColours();
    closeModal();
  });

  cancelBtn.addEventListener("click", () => {
    closeModal();
    startTimer();
  });



})();