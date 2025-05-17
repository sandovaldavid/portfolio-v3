document.addEventListener('DOMContentLoaded', () => {
	const preloader = document.getElementById('preloader');
	const dLetter = document.getElementById('dLetter');

	setTimeout(() => {
		if (dLetter) {
			dLetter.classList.add('animate-fadeInRotate');
		}
	}, 1000);

	setTimeout(() => {
		if (preloader) {
			preloader.classList.add('animate-fadeOut');

			setTimeout(() => {
				if (preloader && preloader.parentNode) {
					preloader.parentNode.removeChild(preloader);
				}
			}, 500);
		}
	}, 2000);
});
