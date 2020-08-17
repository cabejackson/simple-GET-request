'use strict';
/*
getDogImage function: 
(1) retrieves image from API
(2) returns inputted number of images in the console
*/
function getDogImage (){
    //this gets the images using the URL path
  fetch('https://dog.ceo/api/breeds/image/random/3')
  //look at the resolved promise aka the image data
    .then(response => response.json())
    //i think this line needs to change for #1
    //this line carries out desired action on the data
    .then(responseJson => console.log(responseJson));
}


//event listener for submit button
function watchForm(){
    //maybe another arg needs to go after click
  $('#random-dog-image-form').on('click', event => {
    //supresses defaultForm submission response of reloading the page
    event.preventDefault();
    //runs the getDogImage function once user hits submit or returns error saying entry wasnt a number

    //creates a new variable to hold the user entry
    let newEntry = $('.js-random-dog-image-entry').val();
    // says user entry is initailly empty?
    $('.js-random-dog-image-entry').val('');
    if (isNaN('.js-random-dog-image-entry')) {
      return 'Not a Number!';
    }
    //didn't finish this, but maybe the newEntry could 
    //indicate how many times to run the getDogImage func
    //but also maybe the line getDogImage could do this...idk
    else{
      getDogImage();
    }
    
  });
}

//runs when the DOM is loaded
$(function(){
  //prints out message indicating that the app is ready
  console.log('Yooo the app has loaded! Waiting for entry + click');
  //runs the event listener function
  watchForm();
});