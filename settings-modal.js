(function () {
  const settingsButton = document.querySelector("[data-settings-button]");
  const settingsModal = document.querySelector("[data-settings-modal]");
  const closeButton = document.querySelector("[data-close-button]"); 

  settingsButton.addEventListener("click", () => {
    settingsModal.classList.remove("hidden");
    settingsModal.classList.add("block");
    settingsModal.showModal();
  });

  // Close modal (x button)
  closeButton.addEventListener("click", closeModal = () => {
    settingsModal.classList.remove("block");
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
})();