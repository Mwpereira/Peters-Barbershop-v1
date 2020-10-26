/*----------NavBar Tuning----------*/

const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");

	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
			}
		});

		burger.classList.toggle("toggle");
	});
};

const navBackground = () => {
	const nav = document.getElementsByTagName("nav")[0];

	window.addEventListener("scroll", () => {
		if (this.scrollY > 50) {
			nav.classList.add("is-solid");
			$("nav img").show();
			} else {
			nav.classList.remove("is-solid");
			$("nav img").hide();
		}
	});
};

$(".nav-links li a").click(function () {
	const nav = document.querySelector(".nav-links");
	if (nav.classList.contains("nav-active")) {
		document.getElementsByClassName("burger")[0].click();
	}
});

navSlide();

navBackground();

/*----------Responsive Scroll----------*/

let scrollMargin = 0;

window.onresize = function(event) {
    if (window.innerWidth > 1600) {
		scrollMargin = 10;
	}
	else if (window.innerWidth <= 900){
		scrollMargin = 50;
	}
	else{
		scrollMargin = 0;
	}
};


$("#Home-Nav").click(function () {
	$("html, body").animate(
		{
			scrollTop: $("#Home").offset().top,
		},
		1000
	);
	return false;
});

$("#About-Nav").click(function () {
	$("html, body").animate(
		{
			scrollTop: $("#About").offset().top - scrollMargin,
		},
		1000
	);
	return false;
});

$("#Gallery-Nav").click(function () {
	$(" html,body").animate(
		{
			scrollTop: $("#Gallery").offset().top - scrollMargin,
		},
		1000
	);
	return false;
});

$("#Contact-Nav").click(function () {
	$("html,body ").animate(
		{
			scrollTop: $("#Contact").offset().top - scrollMargin,
		},
		1000
	);
	return false;
});

		  