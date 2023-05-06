const avatar = document.querySelector('.avatar');
const avatarMenu = document.querySelector('.avatar-menu');
const fadeInDuration = 200
const fadeOutDuration = 200; 

// Function to toggle the side menu visibility and opacity
function toggleMenu() {
  avatarMenu.classList.toggle('show');
  if (avatarMenu.classList.contains('show')) {
    avatarMenu.style.opacity = '0';
    avatarMenu.style.visibility = 'visible';
    avatarMenu.style.pointerEvents = 'auto';
    avatarMenu.style.transition = `opacity ${fadeInDuration}ms ease-in-out`;
    setTimeout(() => {
      avatarMenu.style.opacity = '1';
    }, 50);
  } else {
    avatarMenu.style.opacity = '1';
    avatarMenu.style.pointerEvents = 'none';
    avatarMenu.style.transition = `opacity ${fadeOutDuration}ms ease-in-out`;
    setTimeout(() => {
      avatarMenu.style.opacity = '0';
      setTimeout(() => {
        avatarMenu.style.visibility = 'hidden';
      }, fadeOutDuration);
    }, 50);
  }
}

// Add event listener to the avatar element for toggling the menu
avatar.addEventListener('click', toggleMenu);

