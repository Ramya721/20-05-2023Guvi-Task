function countdown(seconds, callback) {
  var countdownDiv = document.getElementById('countdown');
  var intervalId = setInterval(function() {
    countdownDiv.innerHTML = seconds;
    seconds--;

    if (seconds < 0) {
      clearInterval(intervalId);
      callback();
    }
  }, 1000);
}

function displayMessage() {
  var countdownDiv = document.getElementById('countdown');
  countdownDiv.innerHTML = 'Happy Independence Day!';
}

countdown(10, displayMessage);
