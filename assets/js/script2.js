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

    //Hide the dropdown after link click
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

document.querySelectorAll(".dropdown-menu a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    dropdown.style.display = "none";

    toggleNav();
  });
});
