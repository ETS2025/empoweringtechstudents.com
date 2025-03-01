document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.nav-menu');

  menuIcon.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    menuIcon.classList.toggle('active');
  });
});

const images = document.querySelectorAll('.hero-images img');
let currentIndex = 0;

setInterval(() => {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}, 3000);

// Get all elements with the class 'image-card'
const imageCards = document.querySelectorAll('.image-card');

// Add an event listener to each image card
imageCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    // Add a class to the card to create a hover effect
    card.classList.add('hover-effect');
  });
  card.addEventListener('mouseout', () => {
    // Remove the class from the card to remove the hover effect
    card.classList.remove('hover-effect');
  });
});

// Get all elements with the class 'team-member'
const teamMembers = document.querySelectorAll('.team-member');

// Add an event listener to each team member
teamMembers.forEach((member) => {
  member.addEventListener('mouseover', () => {
    // Add a class to the member to create a hover effect
    member.classList.add('hover-effect');
  });
  member.addEventListener('mouseout', () => {
    // Remove the class from the member to remove the hover effect
    member.classList.remove('hover-effect');
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