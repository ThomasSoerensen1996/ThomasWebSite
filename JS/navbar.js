const navSlide = () => {
    const lines = document.querySelector('.lines');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    lines.addEventListener('click', () => {
        //Nav Slide Animation
        nav.classList.toggle('nav-active');
        //Links Animation
        navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    //Line Animate
    lines.classList.toggle('toggle');
  });
   
    
}
navSlide();