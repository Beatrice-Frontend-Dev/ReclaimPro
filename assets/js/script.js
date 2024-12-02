// //Sticky header
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

//Togle navbar

function toggleNav() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.toggle("active");
}

//removing nav bar

//STATICS COUNTING
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / 100;

    const updateCounter = () => {
      const current = +counter.innerText;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 50);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
});

//ACCORDION SECTION

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Toggle the display of the associated content
    const content = this.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";

    // Toggle the active class for the button
    this.classList.toggle("active");
  });
});

//TESTIMONIALS SECTION

const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dots");
let currentSlide = 0;

function showSlide(n) {
  testimonials.forEach((testimonial, index) => {
    testimonial.style.display = index === n ? "block" : "none";
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === n);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Automatic slide show (optional)
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
}, 3000); // Change the interval as needed
