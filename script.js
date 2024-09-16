const navbar = document.querySelector('.nav-bar');

function changeNavOnScroll() {
    if (window.scrollY > 0) {
        navbar.classList.remove('transparent');
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
        navbar.classList.add('transparent');
    }
}

window.addEventListener('scroll', changeNavOnScroll);