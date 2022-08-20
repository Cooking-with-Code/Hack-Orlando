gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-main", {
  scrollTrigger: ".animate-main",
  duration: 0.9,
  opacity: 0,
  y: -150,
  stagger: 1,
});
/*
gsap.from(".animate-buttons", {
  scrollTrigger: ".animate-buttons",
  duration: 1,
  opacity: 0,
  x: 0,
  stagger: 1,
});

gsap.from(".animate-body", {
  scrollTrigger: ".animate-body",
  duration: 0.8,
  opacity: 0,
  x: 0,
  stagger: 1,
});

*/

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}