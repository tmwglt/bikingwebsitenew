document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('nav a');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navUl = document.querySelector('nav ul');

  menuItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      menuItems.forEach((el) => {
        el.classList.remove('active');
      });
      event.target.classList.add('active');
    });
  });

  hamburgerMenu.addEventListener('click', () => {
    navUl.classList.toggle('active');
  });

  const images = [
    'images/image1.jpeg',
    'images/image2.jpeg',
    'images/image3.jpeg',
    'images/image4.jpeg',
    'images/image5.jpeg',
    'images/image6.jpeg',
    'images/image7.jpeg',
    'images/image9.jpeg',
    'images/image10.jpeg',
    'images/image11.jpeg',
    'images/image12.jpeg',
    'images/image13.jpeg',
    'images/image14.jpeg',
    'images/image15.jpeg',
    'images/image16.jpeg',
    'images/image17.jpeg',
    'images/image18.jpeg',
    'images/image19.jpeg',
    // Add more image paths as needed
  ];

  let currentImageIndex = 0;
  const slideshowImage = document.getElementById('slideshow-image');

  function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideshowImage.src = images[currentImageIndex];
  }

  setInterval(changeImage, 25000); // Change image every 5 seconds

  function updateTime() {
    const timeOfDay = document.querySelector('.time-of-day');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    timeOfDay.textContent = `${hours}:${minutes}`;
  }

  updateTime();
  setInterval(updateTime, 60 * 1000); // Update every minute

  const messages = document.querySelectorAll('.message');
  const videoContainer = document.querySelector('.image-container');
  let activeMessage = 0;

  function randomPosition(element) {
    const videoRect = videoContainer.getBoundingClientRect();
    const randomX = Math.random() * (videoRect.width - element.clientWidth);
    const randomY = Math.random() * (videoRect.height - element.clientHeight);
    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
  }

  function showNextMessage() {
    messages.forEach((message, index) => {
      message.classList.remove('active');
      message.classList.remove('leave');
    });

    const active = messages[activeMessage];
    randomPosition(active);
    active.classList.add('active');

    setTimeout(() => {
      active.classList.add('leave');
      activeMessage = (activeMessage + 1) % messages.length;
    }, 5000); // Show each message for 5 seconds
  }

  showNextMessage();
  setInterval(showNextMessage, 8000); // Rotate messages every 8 seconds
});
