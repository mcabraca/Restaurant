$(function() {
  
    rotateImages();
    $("#menu").load("menuNav.html");

});







function rotateImages(){
	 var rotator = document.getElementById('mainImage');
    var imageDir = 'img/';                     
    var delayInSeconds = 5;                            // set number of seconds delay
    // list image names
    var images = ['01.jpg', '03.jpg'];

    var num = 0;
    var changeImage = function() {
        var len = images.length;
        rotator.src = imageDir + images[num++];
        if (num == len) {
            num = 0;
        }
    };
    setInterval(changeImage, delayInSeconds * 1000);   	
}

  