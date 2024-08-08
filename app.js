document.addEventListener('DOMContentLoaded', function () {
    const navbarBtn = document.getElementById('navbar-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const navbarTwo = document.getElementById('navbar-two');

    navbarBtn.addEventListener('click', function () {
        navbarTwo.style.right = '0';
        navbarBtn.style.display = "none";
        cancelBtn.style.display = "block"

    });

    cancelBtn.addEventListener('click', function () {
        navbarTwo.style.right = '-100%';
        cancelBtn.style.display = 'none';
        navbarBtn.style.display = "block";
    });

    const contSec = document.querySelectorAll('.cont-sec');
    contSec.forEach(box => {
        box.addEventListener('mouseover', function () {
            box.style.backgroundColor = "#198754";
        });

        box.addEventListener('mouseout', function () {
            box.style.backgroundColor = "black";
        });
    });
});

const backToTopButton = document.getElementById('backToTop');

function handleScroll() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

// Event listener for button click
backToTopButton.addEventListener('click', scrollToTop);
