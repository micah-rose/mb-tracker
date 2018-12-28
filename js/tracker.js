//TO DO's:
//Add functionality to Start Over nav link
//Display/update motivational quote every time app loads (pull from an API?)
//Add functionality for when goal is met (TBD)

//HTML TO DO's:
//Create a page for first time load to take in the user input, but save info
//so the user doesn't lose their count when the app is closed


//change the below to an input form that displays the message and ollects the data
//var message = alert("Hello!! Welcome to the MB Tracker, here you can set how many times you want to do a task or goal and keep track of your remaining times to do it.");
//var goal = prompt("Please tell us how many times you want to perform your task or goal by inputting a numeric value: ");
var goal = 50; //created for testing functionality

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var newYear = new Date(today.getFullYear(), 11, 31);
var daysLeft;

//runs setDate and setDaysLeft functions, also updates # remaining display
function updateTop(){
    setDate();
    setDaysLeft();
    document.getElementById("remaining").innerText = "# Remaining out of " + goal;
    document.getElementById("user-input").innerText = goal;
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

//creates functionality for when user clicks to decrement their goal count
//TO DO: create control variable so clicks can't go below zero
function updateGoal(){
    goal--;
    document.getElementById("user-input").innerText = goal;
}

//creates function for Oops link
//TO DO: create control variable so clicks can't go over the set goal
function oopsClick(){
    goal++;
    document.getElementById("user-input").innerText = goal;
}