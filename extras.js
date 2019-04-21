$(document).ready(function () {

    // Add smooth scrolling to all links code credit to W3 
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });

    //Owl Carousel plugin gallery
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: false
            }
        }
    });


    new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
            labels: ["Java", "Python", "MySQL", "HTML5/CSS", "Photoshop", "Illustrator"],
            datasets: [
                {
                    label: "Knowledge",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: [85, 70, 60, 70, 85, 70]
        }
      ]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });
});
