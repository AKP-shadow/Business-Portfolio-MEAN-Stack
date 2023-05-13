

const loadingLine = document.querySelector('.loading-line');
const contentContainer = document.querySelector('.success-widget');

loadingLine.addEventListener('animationend', () => {
  contentContainer.style.display = 'block';
  loadingLine.parentElement.style.display = 'none';
});
 

