function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

// JavaScript to check if the device is mobile and add a class
if (isMobile()) {
  document.body.classList.add('mobile');
} else {
  document.body.classList.add('desktop');
}

function menuClick() {
  let menuContent = document.getElementById('menuContent')
  let menuIcon = document.getElementById('menuIcon')
  if (menuContent.style.display === 'block') {
    menuContent.style.display = 'none';
    menuIcon.src = 'HamburgerWhite.png'
  } else {
    menuContent.style.display = 'block';
    menuIcon.src = 'Close.png'
  }
}





