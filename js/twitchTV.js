console.log("twitchTV.js loaded");
window.onload = init;

function init() {
  var url = 'https://api.twitch.tv/kraken/streams/freecodecamp?callback=?'

  // // MUST REVISIT HERE
  // $.getJSON(url, function(data) {
  //   if (data.stream === null) {
  //     $('#fccStatus').html("FCC is offline.");
  //   } else {
  //     $('#fccStatus').html("FCC is online.");
  //   }
  //   console.log(data);
  // });

  // // Rebuild with JS - Simple Button Interaction
  // function buttonClicked(button) {
  //   $(this).children().remove();
  //   for (var i = 0; i < dataSimulation.length; i += 1) {
  //     var liveStreams = dataSimulation[i].display_name;
  //
  //     if (this.liveStreams) {
  //       $('.twitchInfo').append("<li>" + liveStreams + "</li>");
  //     }
  //   }
  // }
}
