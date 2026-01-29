function upDate(previewPic) {
  console.log("Event triggered");
  const display = document.getElementById('image-display');
  display.style.backgroundImage = `url('${previewPic.src}')`;
  display.textContent = previewPic.alt;
}

function undo() {
  const display = document.getElementById('image-display');
  display.style.backgroundImage = '';
  display.textContent = 'Hover over an image below to display here.';
}

function addTabIndex() {
  const imgs = document.querySelectorAll('.gallery img');
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('tabindex', 0);
  }
  console.log("Tabindex added to images");
}
