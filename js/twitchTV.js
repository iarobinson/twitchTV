console.log('jQuery File Loading');
$(document).ready(function() {
  console.log("jQuery document loading");
  $("button").on("click", function() {
    console.log('button event triggerd');
    $("button").text("jQuery Working");
  });
});