var session_seconds ="00";
var session_minutes =30;

// Audio files
var click_sound = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

// Starting template for the timer
function template() {
    documnet.getElementById("minutes").innerHtml = session_minutes;
    documnet.getElementById("seconds").innerHtml = session_seconds;
}

function start_timer(){
  click_sound.play();
  // Change the minutes and seconds to starting time
  session_minutes = 29;
  session_seconds = 59;
  // Add the updated seconds and minutes to the page
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  var minutes_interval =setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  function minutesTimer(){
    session_minutes =  session_minutes -1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }

  function secondsTimer(){
    session_seconds =  session_seconds -1;
    document.getElementById("seconds").innerHTML = session_seconds;

    if(session_seconds <= 0){
        if(session_minutes <=0){
        // Clears the interval i.e. stops the counter
            clearInterval(minutes_interval);
            clearInterval(seconds_interval);

             // Add the message to the html
            document.getElementById("done").innerHTML =
            "Session Completed!! Take a Break 🍵";

            // Make the html message div visible
            document.getElementById("done").classList.add("show_message");

            // PLay the bell sound to tell the end of session
            bell.play();
        }
        // Reset the session seconds to 60
        session_seconds = 60;
    }
  }


}