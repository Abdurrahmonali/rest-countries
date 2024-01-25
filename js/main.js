const elDarkModeButton = document.querySelector('.link-mode-dark');
const elDarkModeButtonMoon = document.querySelector('.for-moon-icon');

elDarkModeButton.addEventListener('click', function() {
document.body.classlist.add('dark-mode');
});

elDarkModeButtonMoon.addEventListener('click', function() {
document.body.classList.remove('dark-mode');
});