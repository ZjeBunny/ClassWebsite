let items = document.querySelectorAll(".slider .item");
let active = 1;
function loadShow() {
	items[active].style.transform = `none`;
	items[active].style.zIndex = 1;
	items[active].style.filter = "none";
	items[active].style.opacity = 1;
	// show after
	let stt = 0;
	for (var i = active + 1; i < items.length; i++) {
		stt++;
		items[i].style.transform = `translateX(${120 * stt}px) scale(${
			1 - 0.2 * stt
		}) perspective(16px) rotateY(-1deg)`;
		items[i].style.zIndex = -stt;
		items[i].style.filter = "blur(5px)";
		items[i].style.opacity = stt > 2 ? 0 : 0.6;
	}
	stt = 0;
	for (var i = active - 1; i >= 0; i--) {
		stt++;
		items[i].style.transform = `translateX(${-120 * stt}px) scale(${
			1 - 0.2 * stt
		}) perspective(16px) rotateY(1deg)`;
		items[i].style.zIndex = -stt;
		items[i].style.filter = "blur(5px)";
		items[i].style.opacity = stt > 2 ? 0 : 0.6;
	}
}
loadShow();
let next = document.getElementById("next");
let prev = document.getElementById("prev");
next.onclick = function () {
	active = active + 1 < items.length ? active + 1 : active;
	loadShow();
};
prev.onclick = function () {
	active = active - 1 >= 0 ? active - 1 : active;
	loadShow();
};


setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');

setTimeout(() => {
    loadingScreen.style.display = 'none';
    document.getElementById('container').style.display = 'block';
    }, 200);
}, 1000);