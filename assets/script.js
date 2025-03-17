const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let currentSlide = 0;
const totalSlides = slides.length;

const bannerElement = document.getElementById("banner");
const dotsContainer = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

function createDots() {
	dotsContainer.innerHTML = "";
	for (let i = 0; i < totalSlides; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (i === currentSlide) {
			dot.classList.add("dot_selected");
		}
		dot.addEventListener('click', () => {
			goToSlide(i);
		});
		dotsContainer.appendChild(dot);
	}
}

function updateSlide() {
	console.log("Mise à jour du slide :", currentSlide); // Debug
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	bannerText.innerHTML = slides[currentSlide].tagLine;

	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
		if (index === currentSlide) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}

function goToSlide(index) {
	currentSlide = index;
	updateSlide();
}

function goToPreviousSlide() {
	currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
	updateSlide();
}

function goToNextSlide() {
	currentSlide = (currentSlide + 1) % totalSlides;
	updateSlide();
}

arrowLeft.addEventListener("click", goToPreviousSlide);
arrowRight.addEventListener("click", goToNextSlide);

document.addEventListener("DOMContentLoaded", () => {
	createDots();
	updateSlide();
	console.log("Carrousel initialisé"); // Debug
});