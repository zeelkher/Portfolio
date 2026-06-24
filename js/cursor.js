// cursor.js
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  
  if (!cursor) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Add hover effect to links and buttons
  const hoverElements = document.querySelectorAll('a, button, .panel, .project-card, .mini-card');
  
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
    });
  });
});
