document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector(".carousel-btn.next");
  const prevBtn = document.querySelector(".carousel-btn.prev");

  let currentIndex = 0;
  let autoPlayInterval;

  // Create and insert dot indicators
  const dotsNav = document.createElement("div");
  dotsNav.classList.add("carousel-dots");

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("carousel-dot");
    if (index === 0) dot.classList.add("active");
    dotsNav.appendChild(dot);
  });

  document.querySelector(".carousel").appendChild(dotsNav);
  const dots = Array.from(document.querySelectorAll(".carousel-dot"));

  function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  function moveToSlide(index) {
    currentIndex = (index + slides.length) % slides.length; // Infinite loop logic
    updateCarousel();
  }

  nextBtn.addEventListener("click", () => moveToSlide(currentIndex + 1));
  prevBtn.addEventListener("click", () => moveToSlide(currentIndex - 1));
  dots.forEach((dot, idx) =>
    dot.addEventListener("click", () => moveToSlide(idx))
  );

  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      moveToSlide(currentIndex + 1);
    }, 4000); // every 4 seconds
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // Start autoplay
  startAutoPlay();

  // Pause on hover
  track.addEventListener("mouseenter", stopAutoPlay);
  track.addEventListener("mouseleave", startAutoPlay);

  // Responsive adjustment
  window.addEventListener("resize", updateCarousel);
});
