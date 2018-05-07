var allButton, liveButton, offlineButton;
var numRows, numCells;
var twitchStreamers = ["btssmash", "Battlerite", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp"];
var twitchData = {};
var listOfflineOnly = true;
var listOnlineOnly = true;
var resultsObject, onOfforAll;

window.onload = init;
function init() {
  // Assign variables to each button DOM element
  allButton = document.getElementById("allUsers");
  liveButton = document.getElementById("liveUsers");
  offlineButton = document.getElementById("offlineUsers");

  // Assign functions to click events
  allButton.onclick = allUsersButton;
  liveButton.onclick = onlineUsersButton;
  offlineButton.onclick = offlineUsersButton;

  // By default, the page loads with all users listed
  getAllStreamersData(twitchStreamers, onOfforAll);
}

// Gets info for all streamers on the twitchStreamers list
function getAllStreamersData(streamerList, onOfforAll) {
  streamerList.forEach(function(streamer) {
    var url = "https://wind-bow.glitch.me/twitch-api/streams/" + streamer;
    var request = new XMLHttpRequest();
    request.onload = function () {
      if (request.status == 200) {
        resultsObject = JSON.parse(request.responseText);
        if (resultsObject.stream == null && onOfforAll != "onlineOnly") {
          displayOfflineUsers(resultsObject, streamer);
        } else if (onOfforAll != "offlineOnly") {
          displayOnlineStreamers(resultsObject);
        }
      }
    };
    request.open("GET", url);
    request.send(null);
  });
}

function displayOnlineStreamers(resultsObject) {
  var l = injectLogo(resultsObject);
  var n = injectName(resultsObject);
  var s = injectStatus(resultsObject);
  var f = injectFollowers(resultsObject);
  addRow(l, n, s, f);
}

function displayOfflineUsers(resultsObject, userName) {
  var userNameHTML = formatted(userName);
  var offlineImage = "<img src='offline.png' height='50px' width='50px'>";
  addRow(offlineImage, userNameHTML, "Offline", "Unknown");
}

// Helper functions for injecting API data to DOM
function injectLogo(resultsObject) {
  // Return logo formatted to fit in cell
  return "<img src='" + resultsObject.stream.channel.logo + "' height='50px' width='50px'>";
}
function injectName(resultsObject) {
  // Return display name formatted to fit in cell
  var dispName = resultsObject.stream.channel.display_name;
  return formatted(dispName);
}
function injectStatus(resultsObject) {
  // Return online or offline depending on if they are streaming
  if (resultsObject.stream == null) {
    return "Offline";
  } else {
    return resultsObject.stream.channel.status;
  }
}
function injectFollowers(resultsObject) {
  // Add follower info to table row
  return resultsObject.stream.channel.followers;
}

// Functions that happen when user clicks
function allUsersButton() {
  clearTable();
  getAllStreamersData(twitchStreamers);
}
function onlineUsersButton() {
  clearTable();
  getAllStreamersData(twitchStreamers, "onlineOnly");
}

function offlineUsersButton() {
  clearTable();
  getAllStreamersData(twitchStreamers, "offlineOnly");
}

function addRow(c1, c2, c3, c4) {
  // Assign the DOM table to a JS variable
  var table = document.getElementById("twitchUserDisplay");

  // Increment with i based on growing row length
  var rowCount = table.rows.length;

  // Create new row based on where we are with rowCount
  var row = table.insertRow(rowCount);

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

function clearTable() {
  var table = document.getElementById("twitchUserDisplay");
  table.innerHTML = "<tr><th>Logo</th><th>Name</th><th>Status</th><th>Follower Info</th></tr><tr><td id='logoSpace'></td><td id='nameSpace'></td><td id='statusSpace'></td><td id='followerSpace'></td></tr>";
}

function formatted(dN) {
  return "<a href='https://www.twitch.tv/" + dN + "' target='_blank' >" + dN + "</a>";
}
