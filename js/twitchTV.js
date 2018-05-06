var allUsersButton, liveUsersButton, offlineUsersButton;

window.onload = init;

function init() {
  // Assign variables to each button DOM element
  allUsersButton = document.getElementById("allUsers");
  liveUsersButton = document.getElementById("liveUsers");
  offlineUsersButton = document.getElementById("offlineUsers");

  // Assign functions to click events
  allUsersButton.onclick = displayAllUsers;
  liveUsersButton.onclick = displayLiveUsers;
  offlineUsersButton.onclick = displayOfflineUsers;

  var url = "https://wind-bow.gomix.me/twitch-api";
  var request = new XMLHttpRequest();

  var xmlResult = request.open("GET", url + "/epicenter_en1");

  request.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  console.log(xmlResult, "<- xmlResult");
}

function displayAllUsers() {
  console.log("All Users Stuff");
}

function displayLiveUsers() {
  console.log("Live Users Stuff");
}

function displayOfflineUsers() {
  console.log("Offline Users Stuff");
}
