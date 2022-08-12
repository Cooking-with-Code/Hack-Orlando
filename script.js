gsap.from(".animate-main", {
  scrollTrigger: ".animate-main",
  duration: 2,
  opacity: 0,
  y: -150,
  stagger: 1,
});

gsap.from(".animate-buttons", {
  scrollTrigger: ".animate-buttons",
  duration: 2,
  opacity: 0,
  x: -150,
  stagger: 1,
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

