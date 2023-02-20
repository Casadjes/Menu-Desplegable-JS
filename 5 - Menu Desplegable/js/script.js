const btnToggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

btnToggle.onclick = function () {
	btnToggle.classList.toggle("active");
	navigation.classList.toggle("active");
};
