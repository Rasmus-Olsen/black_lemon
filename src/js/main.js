/*
 * Burgermenu
 */
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const header = document.querySelector(".header");

  menuIcon.addEventListener("click", function () {
    header.classList.toggle("menu-opened");
  });
});

/*
 * Purchase
 */
document.querySelector(".plus-btn").addEventListener("click", function () {
  let quantityInput = document.getElementById("quantity");
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

document.querySelector(".minus-btn").addEventListener("click", function () {
  let quantityInput = document.getElementById("quantity");
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
});

/*
 * Accordion
 */
const accordionWrappers = document.querySelectorAll(".accordion");

accordionWrappers.forEach((accordionWrapper) => {
  accordionWrapper.addEventListener("click", (event) => {
    const button = event.target;
    const article = button.closest("article");
    const exclusive = accordionWrapper.dataset.exclusive;

    // Ensure a button was clicked and that it is within an article
    if (!article || button.tagName.toLowerCase() !== "button") {
      return;
    }

    const expanded = button.getAttribute("aria-expanded") === "true" || false;

    // Handle exclusive expansion
    if (exclusive === "true") {
      const currentExpanded = accordionWrapper.querySelector('[aria-expanded="true"]');

      // Collapse the currently expanded button if it is not the clicked button
      if (currentExpanded && currentExpanded !== button) {
        currentExpanded.setAttribute("aria-expanded", "false");
      }
    }

    // Toggle the aria-expanded state of the clicked button
    button.setAttribute("aria-expanded", !expanded);
  });
});

/*
 * Slider
 */
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".scrolling");
  const leftButton = document.getElementById("scroll-left");
  const rightButton = document.getElementById("scroll-right");

  const scrollAmount = 450; // Width of each card plus the margin

  // Removes scrolling...
  container.addEventListener("wheel", (event) => {
    if (event.deltaX !== 0) {
      // Check if the scroll is horizontal
      event.preventDefault();
    }
  });

  // Funktion til at scrolle til det angivne indeks
  const scrollToIndex = (index) => {
    if (index < 0 || index >= items.length) return; // Sikrer, at vi ikke går udenfor rækkevidde
    items[index].scrollIntoView({ behavior: "smooth", inline: "start" });
    currentIndex = index; // Opdaterer det aktuelle indeks
  };

  leftButton.addEventListener("click", () => {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" }); // Scroll left by one card
  });

  rightButton.addEventListener("click", () => {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" }); // Scroll right by one card
  });
});

/*
 * Cart
 */
document.querySelector(".btn").addEventListener("click", function () {
  const notification = document.querySelector(".cart-notification");

  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
});
