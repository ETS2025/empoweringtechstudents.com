document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.nav-menu');

  menuIcon.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    menuIcon.classList.toggle('active');
  });
});

// Select all elements with the class 'device-card'
const deviceCards = document.querySelectorAll('.device-card');

// Add an event listener to each device card
deviceCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    // Add a class to the card to create a flow effect
    card.classList.add('flow-effect');
  });

  card.addEventListener('mouseout', () => {
    // Remove the class from the card to remove the flow effect
    card.classList.remove('flow-effect');
  });
});