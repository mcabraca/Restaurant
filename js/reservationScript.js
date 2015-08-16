$(function() {
  $( "#datepicker" ).datepicker({ minDate: 0, maxDate: "+1M +0D" });
    
   $('#timepicker').timepicker({
    'disableTimeRanges': [
        ['12am', '11am'],
        ['9pm', '11:31pm']
    ]
});

 $("input[id^='cbx']").click(function() {
       //If checkbox is checked then disable or enable input
    if ($(this).is(':checked'))
    {
        var nextCell = $(this).closest('td').next().find('input');
         nextCell.removeAttr("disabled"); 
         nextCell.val("1");
      
    }
    //If checkbox is unchecked then disable or enable input
    else
    {var nextCell = $(this).closest('td').next().find('input');
        nextCell.attr("disabled","disabled");
        nextCell.val("");
    }
});
$('#submit').click(function(e) {
        var isValid = true;
        $('input[type="text"], #txtNumero').each(function() {
            if ($.trim($(this).val()) == '') {
                isValid = false;
                $(this).css({
                    "border": "1px solid red",
                    "background": "#FFCECE"
                });
            }
            else {
                $(this).css({
                    "border": "",
                    "background": ""
                });
            }
        });
        if (isValid == false) 
            e.preventDefault();
        else 
            alert('Su reservación ha sido registrada. Muchas gracias por su interés');
    });




});



  