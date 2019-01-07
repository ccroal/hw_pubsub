const FormView = require('./views/form_view.js');
const PrimeChecker = require('./models/prime_checker.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();

  const formView = new FormView();
  formView.bindEvents();
});
