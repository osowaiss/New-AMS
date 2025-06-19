// Show or hide scroll-to-top button
window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Scroll to top when clicked
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
