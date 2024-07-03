document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.menu a');
    
    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const headerOffset = document.querySelector('.topnav').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset - 50; // Adjust -50 to center the content more

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    }

    const backToTopBtn = document.getElementById("backToTopBtn");
    
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    backToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

function toggleMenu() {
    const menu = document.getElementById('myMenu');
    menu.classList.toggle('show');
}

