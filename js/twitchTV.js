var allUsersButton, liveUsersButton, offlineUsersButton;
var numRows, numCells;
var twitchStreamers = ["Battlerite", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var twitchData = {};

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

  twitchStreamers.forEach(function(streamer) {
    requestTwitchUser(streamer);
  });
}

// Pulls data from twitch API based on userName
function requestTwitchUser(userName) {
  var url = "https://wind-bow.glitch.me/twitch-api/streams/" + userName;
  var request = new XMLHttpRequest();
  request.onload = function () {
    if (request.status == 200) {
      display(request.responseText);
    }
  };
  request.open("GET", url);
  request.send(null);
}

function display(apiResults) {
  var resultsObject = JSON.parse(apiResults);
  console.log(resultsObject);
  var l = displayLogo(resultsObject);
  var n = displayName(resultsObject);
  var s = displayStatus(resultsObject);
  var f = displayFollowers(resultsObject);
  addRow(l, n, s, f);
}

function displayLogo(resultsObject) {
  // Return logo formatted to fit in cell
  return "<img src='" + resultsObject.stream.channel.logo + "' height='50px' width='50px'>";
}

function displayName(resultsObject) {
  // Return display name formatted to fit in cell
  return resultsObject.stream.channel.display_name;
}

function displayStatus(resultsObject) {
  // Return online or offline depending on if they are streaming
  if (resultsObject.stream == null) {
    return "Offline";
  } else {
    return "Online";
  }
}

function displayFollowers(resultsObject) {
  // Add follower info to table row
  return resultsObject.stream.channel.followers;
}

function displayAllUsers(content) {
  console.log("displayAllUsers");
}

function displayLiveUsers() {
  console.log("Live Users Stuff");
}

function displayOfflineUsers() {
  console.log("Offline Users Stuff");
}

function addRow(c1, c2, c3, c4) {
  // Assign the DOM table to a JS variable
  var table = document.getElementById("twitchUserDisplay");

  // Increment with i based on growing row length
  var rowCount = table.rows.length;
  console.log(rowCount, "<-rowCount");

  // Create new row based on where we are with rowCount
  var row = table.insertRow(rowCount);
  console.log(rowCount, "<- rowCount ", row, " <- row");

  // Insert three cells to the new row
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  // Appends the elements to the cells
  cell1.innerHTML = c1;
  cell2.innerHTML = c2;
  cell3.innerHTML = c3;
  cell4.innerHTML = c4;
}
