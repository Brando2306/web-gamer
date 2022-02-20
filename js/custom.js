/* ========================================================================= */
/*	Const
/* ========================================================================= */


const plus = document.querySelectorAll('.plus-sign');
const minus = document.querySelectorAll('.minus-sign');
const fItems = document.querySelectorAll('.faqs-item');
const fTitles = document.querySelectorAll('.faq-title');
const fdesc = document.querySelectorAll('.faqs-desc');
const fList = document.querySelectorAll('.faqs-list');
const fContainer = document.querySelector('.faqs-container');

/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function () {
    $("#preloader").fadeOut(500);
});

$(document).ready(function () {

    const player = new Plyr('video', {captions: {active: true}});
    const player1 = new Plyr('#player', {});
    const player2 = new Plyr('#player1', {});
    // Expose player so it can be used from the console
    window.player = player;
    window.player1 = player1;
    window.player2 = player2;
    

    /* ========================================================================= */
    /*	Preloader
    /* ========================================================================= */

    setTimeout(function () {
        $("#preloader").css("display", "none");
        $('#THE').addClass('animate__animated animate__fadeInUp')
        $('#A').addClass('animate__animated animate__fadeInUp animate__delay-1s')
        $('#N').addClass('animate__animated animate__fadeInUp animate__delay-1s')
        $('#D').addClass('animate__animated animate__fadeInUp animate__delay-1s')
        $('#R').addClass('animate__animated animate__fadeInUp animate__delay-1s')
        $('#O').addClass('animate__animated animate__fadeInUp animate__delay-1s')
        $('#I').addClass('animate__animated animate__fadeInUp animate__delay-1s')
        $('#D2').addClass('animate__animated animate__fadeInUp animate__delay-1s')
        $('#X').addClass('animate__animated animate__fadeInUp animate__delay-2s')
    }, 2000);

    setTimeout(function () {
        $('.curtain-left').addClass('animate__animated animate__fadeOutTopLeft animate__slower')
        // $('.curtain-left').addClass('animate__animated animate__fadeOutTopRight animate__slower')
        // $('.curtain-right').addClass('animate__animated animate__fadeOutTopLeft animate__slower')
        $('.curtain-right').addClass('animate__animated animate__fadeOutTopRight animate__slower')
    }, 2000);

    // jQuery(window).load(function () {
    //     $("#curtain").fadeOut(4000);
    // });

    setTimeout(function () {
        $("#curtain").css("display", "none");
    }, 3000);


    // $('#logosvg').addClass('animate__animated animate__flipInX')

    /* ========================================================================= */
    /*	Timer count
    /* ========================================================================= */

    setTimeout(function () {
        $(".title-number").css("display", "block");
        $(".number-counters").appear(function () {
            $(".number-counters [data-to]").each(function () {
                var e = $(this).attr("data-to");
                $(this).delay(6e3).countTo({
                    from: 50,
                    to: e,
                    speed: 3e3,
                    refreshInterval: 10
                })
            })
        });
    }, 5000);

    /* ========================================================================= */
    /*	FUNCTION FAQ
    /* ========================================================================= */

    const radialMovement = () => {
        fdesc.forEach((desc) => {
            desc.addEventListener('mousemove', e => {
                desc.style.backgroundImage = `radial-gradient(ellipse at ${e.offsetX}px ${e.offsetY}px`;
            })
        })
    }
    radialMovement();
    let boolFaqs = [];
    fItems.forEach((item) => {
        boolFaqs.push(false);
    })
    const displayFaq = () => {
        fItems.forEach((item, index) => {
            plus[index].addEventListener('click', function () {
                fTitles[index].classList.toggle('faq-selected');
                if (!boolFaqs[index]) {
                    plus[index].innerText = '-';
                    gsap.to(item, {
                        height: 'auto',
                        duration: 0.5
                    });
                    boolFaqs[index] = true;
                } else {
                    plus[index].innerText = '+';
                    gsap.to(item, {
                        height: '60px',
                        duration: 0.5
                    });
                    boolFaqs[index] = false;
                }
            })
        })
    }
    displayFaq();

    /* ========================================================================= */
    /*	Flickity
    /* ========================================================================= */

    const initLore = () => {
        let loreSlider = document.querySelector('.lore-slider');
        let flkty = new Flickity(loreSlider, {
            friction: screen.width < 1023 ? 0.8 : 0.50,
            selectedAttraction: screen.width < 1023 ? 0.2 : 0.008,
            groupCells: 2,
            wrapAround: true,
            cellAlign: 'center',
            on: {
                ready: function () {
                    const dots = document.querySelectorAll('.flickity-page-dots');
                    // dots.forEach((d) => {
                    //     d.addEventListener('mouseenter', hideDrag);
                    //     d.addEventListener('mouseleave', showDrag);
                    // })
                }
            }
        });
        // flkty.on('dragMove', function (event) {
        //     followSlider();
        // })
    }
    initLore();

    const initLoreMobile = () => {
        let loreSlider = document.querySelector('.lore-slider-mobile');
        let flkty = new Flickity(loreSlider, {
            friction: screen.width < 1023 ? 0.8 : 0.50,
            selectedAttraction: screen.width < 1023 ? 0.2 : 0.008,
            groupCells: 1,
            wrapAround: true,
            cellAlign: 'center',
        });
    }
    initLoreMobile();

    /* ========================================================================= */
    /*	SECTION
    /* ========================================================================= */

    const scrollIntoView = () => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior: "smooth",
                });
            });
        });
    }
    scrollIntoView();

    const initgalerySlider = () => {
        let galerySlider = document.querySelector('.galery-slider');
        let flkty = new Flickity(galerySlider, {
            wrapAround: true,
            imagesLoaded: true,
            percentPosition: false,
            friction: screen.width < 1023 ? 0.8 : 0.50,
            selectedAttraction: screen.width < 1023 ? 0.2 : 0.008,
            initialIndex: 1,
            on: {
                ready: function () {
                    const dots = document.querySelectorAll('.flickity-page-dots');
                    // dots.forEach((d) => {
                    //     d.addEventListener('mouseenter', hideDrag);
                    //     d.addEventListener('mouseleave', showDrag);
                    // })
                }
            }
        });
        // flkty.on('dragMove', function (event) {
        //     followSlider();
        // })
        let imgs = galerySlider.querySelectorAll('.carousel-cell img');
        let docStyle = document.documentElement.style;
        let transformProp = typeof docStyle.transform == 'string' ?
            'transform' : 'WebkitTransform';

        flkty.on('scroll', function () {
            flkty.slides.forEach(function (slide, i) {
                let img = imgs[i];
                let x = (slide.target + flkty.x) * - 1 / 6;
                img.style[transformProp] = 'translateX(' + x + 'px)';
            });
        });
    }
    initgalerySlider();

});
