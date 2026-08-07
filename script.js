document.addEventListener("DOMContentLoaded", () => {


    // Page fade in

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = "1";

    }, 100);



    // Hero image slideshow

    const images = [

        "images/look1.jpg",
        "images/look2.jpg",
        "images/look3.jpg",
        "images/look4.jpg",
        "images/look5.jpg"

    ];


    const heroImage = document.getElementById("changing-image");


    // Check image exists

    if (!heroImage) {

        console.log("Hero image not found");

        return;

    }



    // Pick random starting image

    let current = Math.floor(Math.random() * images.length);


    heroImage.src = images[current];



    // Change image every 6 seconds

    setInterval(() => {


        // Fade out

        heroImage.style.opacity = "0";



        setTimeout(() => {


            // Pick next random image

            let next;


            do {

                next = Math.floor(Math.random() * images.length);

            } while (next === current);



            current = next;



            heroImage.src = images[current];


            // Fade back in

            heroImage.style.opacity = "1";


        }, 1500);



    }, 6000);



});
