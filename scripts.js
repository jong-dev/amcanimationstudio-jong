// document.addEventListener("DOMContentLoaded", function () {
//     const delayedHeader = document.querySelector(".header-container");

//     delayedHeader.style.opacity = 0;


//     setTimeout(function () {
//         delayedHeader.style.opacity = 1;
//     }, 500);
// }); 

// document.addEventListener("DOMContentLoaded", function () {
//     const delayedHeader = document.querySelector(".title-card");

//     delayedHeader.style.opacity = 0;


//     setTimeout(function () {
//         delayedHeader.style.opacity = 1;
//     }, 2000);
// });




document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var h1 = document.querySelector('.text1 h1');
        var scrollPosition = window.scrollY;

        // Adjust the value (e.g., 300) to control when the effect starts
        if (scrollPosition > 300) {
            h1.style.opacity = 1;
        } else {
            h1.style.opacity = 0;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var p = document.querySelector('.text1 p');
        var scrollPosition = window.scrollY;

        // Adjust the value (e.g., 300) to control when the effect starts
        if (scrollPosition > 500) {
            p.style.opacity = 1;
        } else {
            p.style.opacity = 0;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var hr = document.querySelector('.main-second-text hr');
        var scrollPosition = window.scrollY;

        // Adjust the value (e.g., 300) to control when the effect starts
        if (scrollPosition > 600) {
            hr.style.opacity = 1;
        } else {
            hr.style.opacity = 0;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var imgLeft = document.querySelector('.img-spec-left');
        var imgRight = document.querySelector('.img-spec-right');
        var scrollPosition = window.scrollY;

        // Adjust the value (e.g., 500) to control when the effect starts
        if (scrollPosition > 500) {
            imgLeft.style.opacity = 1;
            imgLeft.style.transform = 'translateX(0)';
            imgRight.style.opacity = 1;
            imgRight.style.transform = 'translateX(0)';
        } else {
            imgLeft.style.opacity = 0;
            imgLeft.style.transform = 'translateX(-50%)';
            imgRight.style.opacity = 0;
            imgRight.style.transform = 'translateX(50%)';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var mainSecond = document.querySelector('.main-second');
    var scrollPosition = window.scrollY;

    function updateParallax() {
        var scrollPercentage = scrollPosition / (document.body.scrollHeight - window.innerHeight);
        var backgroundPositionY = scrollPercentage * 50; // Adjust the factor as needed

        mainSecond.style.backgroundPosition = `center ${backgroundPositionY}%`;
    }

    window.addEventListener("scroll", function() {
        scrollPosition = window.scrollY;
        updateParallax();
    });

    updateParallax(); // Initialize the position on page load
});