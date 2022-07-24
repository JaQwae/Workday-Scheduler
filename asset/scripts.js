//displaying the current date
currentDate = moment().format('');
currentDate = document.querySelector('#currentDay');
currentDay.textContent = moment().format('dddd, MMM, Do, YYYY, h:mm:ss');


//Keeping time up current without a refresh
function updatedTime () {
    var timerInterval = setInterval(function() {
        currentDate = moment().format('dddd, MMM, Do, YYYY, h:mm:ss');
        currentDay.textContent = currentDate
    }, 1000);
}
updatedTime();


//tells engine to load html and css first
$(document).ready(function(){
    $('.saveBtn').on('click',function () {
        //save text input
        var text = $(this).siblings(".description").val();
        //save time id
        var time = $(this).parent().attr('id'); 
        
        //setting items in local storage
        localStorage.setItem(time, text);
    })

    // keep track of the current hour
    function hourTracker() {

        var currentHour = moment().hour();
        
        // loop over time block
        $(".time-block").each( function() {
            var elementHour = parseInt($(this).attr("id").split('hour')[1]);
            
            // hour has past and is styled to the past class
            if ( elementHour < currentHour ) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            // hour is current and is styled to the present class
            else if ( elementHour === currentHour ) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            // hour has not yet come and is styled to the future class
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    //get items from local storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour0 .description").val(localStorage.getItem("hour0"));

    hourTracker();
})