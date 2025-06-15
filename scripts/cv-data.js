document.addEventListener('DOMContentLoaded', () => {
  console.log('Website loaded and ready');
  document.getElementById('current-year').textContent = new Date().getFullYear();
});
