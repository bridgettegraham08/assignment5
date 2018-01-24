
$( document ).ready(function() {
    console.log( "ready!" );
});

$('#submit-btn').click(function(event){
  event.preventDefault()
 var userInput =$('#city-type').val()
 // If user inputs NYC, New York, New York City
 if (userInput === "NYC" || userInput === "New York" || userInput === "New York City") {
   $('body').css('background', 'url(images/nyc.jpg)')
  // Change background to NYC
 }
 else if (userInput === "LA" || userInput === "Los Angeles" || userInput === "LAX") {
   // OR if user inputs LA
   $('body').css('background', 'url(images/la.jpg)')
   // Change background to LA
  }
 else if (userInput === "Austin" || userInput === "ATX") {
   // OR if user inputs Austin
    $('body').css('background', 'url(images/austin.jpg)')
    // Change background to Austin
  }
 else if (userInput === "SF" || userInput === "San Francisco") {
   // OR if user inputs SF
     $('body').css('background', 'url(images/sf.jpg)')
  // Change background to SF
   }
 else if (userInput === "Sydney" || userInput === "SYD") {
   // OR if use inputs Sydney
     $('body').css('background', 'url(images/sydney.jpg)')
   // Change background to Sydney
   }

else {
     $('body').css('background', 'url(images/citipix_skyline.jpg)')
   }
   // Else no change
})
