const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})
sr.reveal(`.text`, {delay:400, origin:'left'})
sr.reveal(`header , .main-heading , .our-team .text`, {delay:200, origin:'top'})
sr.reveal(`.supscribe form , .card ,.service-content .col, .supscribe p ,.info , .flip-card`, {delay:300, origin:'left'})
sr.reveal(`.contact-head .content form `, {delay:200, origin:'bottom'})

document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
  
    if (window.scrollY > 0) {
      header.classList.add('sticky');
    }
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  });
  


const toggleButton = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');
const listItems = document.querySelectorAll('.menu li');

toggleButton.addEventListener('click', function(event) {
    toggleMenu();
    event.stopPropagation(); 
});

function toggleMenu() {
    if (menu.style.display === 'flex') {
        menu.style.display = '';
    } else {
        menu.style.display = 'flex';
    }
}

listItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
        const activeItem = document.querySelector('.menu .active');
        if (activeItem) {
            activeItem.classList.remove('active');
        }
        item.classList.add('active');
        menu.style.display = '';
        event.stopPropagation(); 
    });
});


document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnToggleButton = toggleButton.contains(event.target);
    if (!isClickInsideMenu && !isClickOnToggleButton) {
        menu.style.display = '';
    }
});



