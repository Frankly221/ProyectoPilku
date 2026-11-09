const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#main-nav');

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '✕' : '☰';
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

document.querySelector('#reservation-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Hola Pillku Rooftop, quisiera reservar una mesa.\nNombre: ${data.get('name')}\nFecha: ${data.get('date')}\nPersonas: ${data.get('people')}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

const dateInput = document.querySelector('input[type="date"]');
dateInput.min = new Date().toISOString().split('T')[0];
