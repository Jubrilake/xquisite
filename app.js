const navSlide = () => {
  const burger = document.querySelector(".burger"),
    nav = document.querySelector(".nav-links"),
    navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade .5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();

function initMap() {
  const loc = { lat: 6.524379, lng: 3.379206 };
  const map = new google.maps.Map(document.querySelector(".contact-map"), {
    center: loc,
    zoom: 14,
  });

  const marker = new google.maps.Marker({ position: loc, map: map });
}
//  sticky menu background
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 150) {
    document.querySelector("nav").style.opacity = 0.9;
  } else {
    document.querySelector("nav").style.opacity = 1;
  }
});

// Counting Numbers
$(".num").counterUp({ delay: 10, time: 1000 });
