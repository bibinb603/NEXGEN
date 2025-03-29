
// Select elements
let box = document.querySelector(".box")
let circle = document.querySelector(".circle")
let png4 = document.querySelector(".png4")
let png5 = document.querySelector(".png5")

// Function to check if it's a laptop view
function isLaptopView() {
    return window.innerWidth > 992; // Bootstrap's lg breakpoint
}

// Function to toggle elements and animations
function toggleElementsAndAnimations() {
    if (isLaptopView()) {
        // Show elements
        document.querySelector(".circle").style.display = "block";
        document.querySelector(".box").style.display = "block";
        document.querySelector(".png4").style.display = "block";
        document.querySelector(".png5").style.display = "block";

        // Apply GSAP animations
        gsap.to(".circle", {
            xPercent: 100,
            yPercent: 300,
            scale: 2,
            opacity: 1,
            rotation: 360,
            repeat: -1,
            yoyo: true,
            duration: 4
        });

        gsap.to(".box", {
            scale: 2,
            opacity: 1,
            duration: 4,
            skewY: 30,
            repeat: -1,
            yoyo: true
        });

        gsap.to(".png4", {
            duration: 4,
            skewY: 10,
            x: -50,
            repeat: -1,
            yoyo: true,
            scale: 1
        });

        gsap.to(".png5", {
            scale: 2,
            opacity: 1,
            duration: 4,
            skewY: 10,
            repeat: -1,
            yoyo: true
        });
    } else {
        // Hide elements
        document.querySelector(".circle").style.display = "none";
        document.querySelector(".box").style.display = "none";
        document.querySelector(".png4").style.display = "none";
        document.querySelector(".png5").style.display = "none";

        // Kill all GSAP animations
        gsap.killTweensOf(".circle");
        gsap.killTweensOf(".box");
        gsap.killTweensOf(".png4");
        gsap.killTweensOf(".png5");
    }
}

// Initial setup
toggleElementsAndAnimations();

// Recheck on window resize
window.addEventListener('resize', toggleElementsAndAnimations);