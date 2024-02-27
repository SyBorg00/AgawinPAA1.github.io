let slideIndex4 = 0;
showSlides4();
function showSlides4(){
  let i;
  let slides4 = document.getElementsByClassName("TerraSlideFourth");
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
    
  }
  slideIndex4++;
  if (slideIndex4 > slides4.length) {slideIndex4 = 1}
  slides4[slideIndex4-1].style.display = "block";
  setTimeout(showSlides4, 2000); // Change image every 2 seconds

}