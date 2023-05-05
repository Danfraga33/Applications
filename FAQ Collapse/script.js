const faqs = document.querySelectorAll(".faq");
const active = document.querySelector(".active");

// When a faq is clicked, remove all active classes
//

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    removeActiveClasses();
    faq.classList.add("active");
  });
});

function removeActiveClasses() {
  faqs.forEach((faq) => {
    faq.classList.remove("active");
  });
}
