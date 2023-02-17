// call to jQuery to ensure that the code isn't run until the browser
// has finished rendering all the elements in the html.
$(document).ready(function() {
  // handle displaying the time
  var today = dayjs();
  $('#today').text(today.format('MMM D, YYYY [at] hA'));

  
  // saving
  var saveButtons = $(".saveBtn");

  // on click event listener in the containing time-block
  // saving key and value
  saveButtons.on("click", function() {
    var key = $(this).parent().attr("id");
    var value = $(this).siblings("textarea").val()

    console.log(key)
    console.log(value)

    localStorage.setItem(key, value)
  })

   // loading
  var textAreas = $(".description");

  // load saved key and value
  textAreas.each(function() {
    var key = $(this).parent().attr("id");
    var value = localStorage.getItem(key)

    $(this).val(value)
  })

  // color coding 
  var txtAreas = $(".description");

  txtAreas.each(function () {
    var currentHour = parseInt(dayjs().format("H"))

    var key = $(this).parent().attr("id");

    var textHour = parseInt(key.split("-")[1]); 
        // hour-9 parse this
        // ["hour", "9"]
        //    0      1

    console.log(currentHour)
    console.log(textHour)

    // Apply the past, present, or future class to value block
    if(currentHour == textHour) {
      $(this).addClass("present")
    }

     if(currentHour > textHour) {
      $(this).addClass("past")
    }

     if(currentHour < textHour) {
      $(this).addClass("future")
    }
  })

});


