document.addEventListener("DOMContentLoaded", function() {
    var images = document.getElementsByClassName("cont-moviles");
    var index = 0;
  
    function showNextImage() {
      images[index].style.opacity = "0";
      index = (index + 1) % images.length;
      images[index].style.opacity = "1";
    }
  
    // Muestra la primera imagen enseguida
    setTimeout(function() {
      images[index].style.opacity = "1";
    }, 0);
  
    // Cambiala imagen cada 4 seg
    setInterval(showNextImage, 4000);
  });