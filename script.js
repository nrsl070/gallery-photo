function upDate(previewPic) {
  console.log("Mouse or focus event triggered");
  let display = document.getElementById('image-display');
  display.style.backgroundImage = `url('${previewPic.src}')`;
  display.textContent = previewPic.alt;
}

function undo() {
  console.log("Mouse leave or blur event triggered");
  let display = document.getElementById('image-display');
  display.style.backgroundImage = "none";
  display.textContent = "Hover over an image below to display here.";
}

// Add tabindex to all images dynamically (optional if already in HTML)
function addTabIndex() {
  const imgs = document.querySelectorAll(".gallery img");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute("tabindex", "0");
  }
}
