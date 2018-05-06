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

  requestTwitchUser("epicenter_en1");
}

// Pulls data from twitch API based on userName
function requestTwitchUser(userName) {
  var url = "https://wind-bow.glitch.me/twitch-api/streams/" + userName;
  var request = new XMLHttpRequest();
  request.onload = function () {
    if (request.status == 200) {
      displayAllUsers(request.responseText);
    }
  };
  request.open("GET", url);
  request.send(null);
}

function displayAllUsers(content) {
  console.log(content, "<-content", typeof content, "<-typeof");
  var hello = JSON.parse(content);
  console.log(hello.stream.game, "online? ->", hello.steam == true);
}

function displayLiveUsers() {
  console.log("Live Users Stuff");
}

function displayOfflineUsers() {
  console.log("Offline Users Stuff");
}
