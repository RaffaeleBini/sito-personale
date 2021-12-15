var i = 0;
var txt = 'RAFFAELE BINI';
var speed = 100;   
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        }
    }

$(function() {
$(".preloader").delay(3000).fadeOut("slow");
$("#overlayer").delay(3000).fadeOut("slow");
})

$(function() {
    $.scrollify({
        section : ".scroll",
    });
});

function openNav() {
    document.getElementById("navbar").style.width = "100%";
    }
  
    function closeNav() {
    document.getElementById("navbar").style.width = "0%";
    }

var slideIndex = 1;
    showSlides(slideIndex);
  
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }
  
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }
  
    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

//form per emailjs
//(function() {
 //   emailjs.init("user_cRZ91pT8SqzcEW6qbihS7");
  //  })();

window.onload = function() {
    document.getElementById('contact_form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
