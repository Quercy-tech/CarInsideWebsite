function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

// JavaScript to check if the device is mobile and add a class
if (isMobile()) {
  document.body.classList.add('mobile');
} else {
  document.body.classList.add('desktop');
}
