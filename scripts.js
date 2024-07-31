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

  const video = document.querySelector('video');
  const sources = Array.from(video.querySelectorAll('source'));
  let currentSource = 0;

  video.addEventListener('ended', () => {
    currentSource = (currentSource + 1) % sources.length;
    video.src = sources[currentSource].src;
    video.load();
    video.play();
  });

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
  let activeMessage = 0;

  function randomPosition(element) {
    const randomX = Math.random() * (window.innerWidth - element.clientWidth);
    const randomY = Math.random() * (window.innerHeight - element.clientHeight);
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
    }, 6000);
  }

  showNextMessage();
  setInterval(showNextMessage, 8000);
});
