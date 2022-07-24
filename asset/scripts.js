// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

//displaying the current date
currentDate = moment().format('');
currentDate = document.querySelector('#currentDay');
currentDay.textContent = moment().format('dddd, MMM, Do, YYYY, h:mm:ss');

//Keeping time up to date without a refresh
function updatedTime () {
    var timerInterval = setInterval(function() {
        currentDate = moment().format('dddd, MMM, Do, YYYY, h:mm:ss');
        currentDay.textContent = currentDate
    }, 1000);
}
updatedTime();

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
        //if time pass
            //set to a color
        //if time equal time
            //set to a color
        //else time has not come
            //set to this color


// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
//create rows for each hour from 9am-5pm
//start with 3 rows (until fully functioning)
//make columns within rows
//left side displays time
//center is where the task go
//right is where the save button is




// WHEN I click into a time block
// THEN I can enter an event
var todoItem = '';
todoItem = document.querySelectorAll('.todo-section');

//add event listener where task go
$( ".todo-section" ).click(function() {
    var txt = $("#txtArea").val();
});
    //display text on that corresponding size


// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
    //create a button for save
        //add event listener
    //link to local storage
        //set value inputted in task section 


// WHEN I refresh the page
// THEN the saved events persist
    //write out some step for local storage as well as displaying (look at activity 26 in web API for assistance)