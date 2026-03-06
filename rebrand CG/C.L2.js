document.addEventListener("DOMContentLoaded", function () {
    tsParticles.load("hero-particles", {
        fullScreen: {enable: false},//particles will be contained within the hero section
        particles: {
            number: { value: 100}, //number of particles
            color: { value: "#3f0671" },//colour of particles
            links: { //lines between particles
                enable: true,
                distance: 0, //distance between lines of partcles
                color: "#ffffff",
                opacity: 0.5,
                width: 1 //width of lines 
            },
            move: {
                enable: true,
                speed: 2 //speed of particles moving
            },
            size: { //size of particles
                value: { minimum: 1, largest: 6 } //size is between 1 an 6
            }
        }
    });
});


