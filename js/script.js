const button = document.getElementById('newProjectBtn');
const toast = document.getElementById('toast');

button.addEventListener('click', () => {
  toast.textContent = 'Demo mode: your new project is ready to plan!';
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2600);
});
