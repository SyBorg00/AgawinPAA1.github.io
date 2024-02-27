let gifIndex = 0;
showSlidesGIF();
function showSlidesGIF(){
  let i;
  let slidesGIF = document.getElementsByClassName("gifs");
  for (i = 0; i < slidesGIF.length; i++) {
    slidesGIF[i].style.display = "none";
    
  }
  gifIndex++;
  if (gifIndex > slidesGIF.length) {gifIndex = 1}
  slidesGIF[gifIndex-1].style.display = "block";
  setTimeout(showSlidesGIF, 10000); 

}

