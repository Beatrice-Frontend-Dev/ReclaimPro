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

document.querySelectorAll(".dropdown-menu a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    dropdown.style.display = "none";

    document.querySelectorAll(".dropdown-menu a").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        // ... (rest of your existing code)

        // Hide the dropdown after link click
        const dropdown = this.closest(".drop");
        dropdown.style.display = "none";
      });
    });

    const serviceee = document.querySelector(".serviceee");
    const dropdown = document.querySelector(".drop");

    serviceee.addEventListener("mouseover", () => {
      dropdown.style.display = "flex";
    });

    serviceee.addEventListener("mouseout", () => {
      dropdown.style.display = "none";
    });
    toggleNav();
  });
});

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

//DROPDOWN
document.querySelectorAll(".dropdown-menu a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = targetElement.getBoundingClientRect().top + window.scrollY;

      const headerHeight =
        document.querySelector(".fixed-header")?.offsetHeight || 0;

      window.scrollTo({
        top: offset - headerHeight,
        behavior: "smooth",
      });
    }
  });
});

const serviceee = document.querySelector(".serviceee");
const dropdown = document.querySelector(".drop");

serviceee.addEventListener("mouseover", () => {
  dropdown.style.display = "flex";
});

document.querySelectorAll(".dropdown-menu a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // ... (rest of your existing code)

    // Hide the dropdown after link click
    dropdown.style.display = "none";
  });
});
