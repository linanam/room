(function (){
    let slideIndex = 1;

    window.addEventListener("load", () => {
        let slideNavigation = document.getElementById('slideNavigation');
        slideNavigation.addEventListener("click", (e) => {
            let i = 1;
            if (e.target.classList.contains('prev')) {
                i = -1;
            }
            nextSlide(i);
        });

        document.addEventListener('keydown', (event) => {
            let key = event.key,
                i = 1;
            if (key === 'ArrowLeft') {
                i = -1;
            }
            nextSlide(i);
        }, false);

        showSlides(slideIndex);
    });

    function nextSlide(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i,
            slides = document.getElementsByClassName("slide");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        slides[slideIndex - 1].classList.add("active");
    }
})()