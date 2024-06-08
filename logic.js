// drag and drop navbar start
const nav = document.getElementById("nav");
const moveCurs = nav.querySelector(".move");

let isDragging = false;
let startX = 0;
let startY = 0;
let initialX = 0;
let initialY = 0;

moveCurs.addEventListener("mousedown", startDrag);
moveCurs.addEventListener("touchstart", startDrag, { passive: false });

function startDrag(event) {
  event.preventDefault();
  isDragging = true;

  if (event.type === "mousedown") {
    initialX = event.clientX;
    initialY = event.clientY;
  } else if (event.type === "touchstart") {
    initialX = event.touches[0].clientX;
    initialY = event.touches[0].clientY;
  }

  startX = parseFloat(window.getComputedStyle(nav).left) || 0;
  startY = parseFloat(window.getComputedStyle(nav).top) || 0;

  document.addEventListener("mousemove", drag);
  document.addEventListener("touchmove", drag, { passive: false });
  document.addEventListener("mouseup", endDrag);
  document.addEventListener("touchend", endDrag);
}

function drag(event) {
  if (!isDragging) return;
  event.preventDefault();

  let offsetX, offsetY;

  if (event.type === "mousemove") {
    offsetX = event.clientX - initialX;
    offsetY = event.clientY - initialY;
  } else if (event.type === "touchmove") {
    offsetX = event.touches[0].clientX - initialX;
    offsetY = event.touches[0].clientY - initialY;
  }

  requestAnimationFrame(() => {
    nav.style.left = startX + offsetX + "px";
    nav.style.top = startY + offsetY + "px";
  });
}

function endDrag(event) {
  isDragging = false;
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("touchmove", drag);
  document.removeEventListener("mouseup", endDrag);
  document.removeEventListener("touchend", endDrag);
}
// drag and drop navbar end

// nav active 
const navLinks = document.querySelectorAll(".links_child");
navLinks.forEach((node)=>{
node.addEventListener("click",()=>{
  navLinks.forEach((link)=>{
    link.classList.remove("active")
  })
  node.classList.add('active')

})
});
