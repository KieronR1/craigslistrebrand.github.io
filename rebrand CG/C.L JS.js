const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth; // Set canvas width to match parent element , and height to match parent element
    canvas.height = canvas.parentElement.clientHeight;
}
window.addEventListener('resize', resizeCanvas); // Resize canvas when the window is resized
resizeCanvas();

const particlesArray = [];// Array(empty list) to hold particles
const numberOfParticles = 100; // Number of particles to create
class Particle { // Class to represent each particle
    constructor() {
        this.x = Math.random() * canvas.width; // Random x position
        this.y = Math.random() * canvas.height; // Random y position
        this.size = Math.random() * 5 + 1; // Random size between 1 and 6
        this.speedX = (Math.random() * 2) - 1; // random horizontal speed between -1 and 1 
        this.speedY = (Math.random() * 2) - 1; // Random vertical speed between -1 and 1

    }

update() { // Method to update particle position 
    this.x += this.speedX; // Move particle horizontally
    this.y += this.speedY; // Move particle vertically

    if (this.x + this.size > canvas.width || this.x - this.size < 0) { // If particle goes off the left or right edge
        this.speedX = -this.speedX; // Reverse horizontal direction
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) { // If particle goes off the top or bottom edge
        this.speedY = -this.speedY; // Reverse vertical direction
    }
}
draw() { // Method to draw the particle on the canvas
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath(); // Start a new path
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // Draw a circle at the particle's position with its size
    ctx.fill(); // Fill the circle with the specified color
}
}
function init() { // Function to initialize particles   
    for (let i = 0; i < numberOfParticles; i++) { // Loop to create the specified number of particles
        particlesArray.push(new Particle()); // Create a new particle and add it to the array
    }
}
function animate() { // Function to animate the particles
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing the next frame
    for (let i = 0; i < particlesArray.length; i++) { // Loop through each particle in the array
        particlesArray[i].update(); // Update the particle's position
        particlesArray[i].draw(); // Draw the particle on the canvas
    }
    requestAnimationFrame(animate); // Request the next animation frame
}
init(); // Initialize particles
animate(); // Start the animation loop
