$(function() {
  
    rotateImages();
    $("#menu").load("menuNav.html");
    $( "#datepicker" ).datepicker({ minDate: 0, maxDate: "+1M +0D" });
$('#timepicker').timepicker({
    'disableTimeRanges': [
        ['12am', '10am'],
        ['9pm', '11:31pm']
    ]
});





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

  