// Deals with title width
function updateH1Width() {
  document.querySelectorAll(".title-container").forEach(function (container) {
    const h1 = container.querySelector("h1");
    const h1Width = h1.offsetWidth;
    container.style.setProperty("--h1-width", h1Width + "px");
  });
}

window.addEventListener("resize", updateH1Width);

function searchCards(inputId, cardsSelector) {
  const searchInput = document.getElementById(inputId);
  const cards = document.querySelectorAll(cardsSelector);

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    cards.forEach((card) => {
      const text = card.getAttribute("data-title");
      const match = text.includes(query);
      card.style.display = match ? "block" : "none";
    });
  });
}
