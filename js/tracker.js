//TO DO's:
//Take in user input for number to track
//Display input for # Remaining
//Add onclick functionality to count down from number input
//Add functionality to Start Over and Oops nav links (increase number input for accidental clicks)
//Display motivational quote and change every time app loads (pull from an API?)
//Add functionality for when goal is met (TBD)

//HTML TO DO's:
//Create a page for first time load to take in the user input, but save info
//so the user doesn't lose their count when the app is closed
//Add to anchor tags when ready to apply functions - <a href="javascript:someFunction()">LINK</a>

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var newYear = new Date(today.getFullYear(), 11, 31);
var daysLeft;

function updateTop(){
    setDate();
    setDaysLeft();
}

//updates to display current date
function setDate(){
    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    today = mm + '/' + dd + '/' + yyyy;

    document.getElementById("current-date").innerText = today;
}

//updates to display how many days are left in the year
function setDaysLeft(){
    today = new Date();
    if (today.getMonth()==11 && today.getDate()>31) 
        {
    newYear.setFullYear(newYear.getFullYear()+1); 
        }  
    var days = 1000*60*60*24
    daysLeft = Math.ceil((newYear.getTime()-today.getTime())/(days));
    document.getElementById("days-left").innerText = "There are " + daysLeft + " days left in the year!!";
}