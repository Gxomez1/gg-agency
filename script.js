// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Counter Animation
function animateValue(id, start, end, duration, prefix = '', suffix = '') {
  const obj = document.getElementById(id);
  let current = start;
  const range = end - start;
  const increment = range / (duration / 10);
  const step = () => {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      obj.textContent = prefix + Math.floor(end).toLocaleString() + suffix;
    } else {
      obj.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
      setTimeout(step, 10);
    }
  };
  step();
}

// Start animation when page loads
window.addEventListener("load", () => {
  animateValue("creatorCount", 0, 9, 2000);
  animateValue("earningsCount", 0, 98700, 2500, "$");
  animateValue("viewsCount", 0, 2300000, 3000);
});
