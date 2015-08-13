$(function() {
  $( "#datepicker" ).datepicker({ minDate: 0, maxDate: "+1M +0D" });
    
   $('#timepicker').timepicker({
    'disableTimeRanges': [
        ['12am', '10am'],
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


});


  