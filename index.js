/* eslint-disable indent */

/*
getDogImage function: 
(1) retrieves image from API
(2) returns inputted number of images in the console
*/
$('#random-dog-image-form').on('submit', function(e) {  
  e.preventDefault(); 
  let dogImages = []; 
  let userVal = $('#random-dog-image-form input').val(); 
  console.log(userVal); 
  fetch(`https://dog.ceo/api/breeds/image/random/${userVal}`)
    .then(function(response){
      return response.json(); 
    })
    .then(function(json){
      //takes length of json arr
      let jsonlen = json.message.length;
      let randomIndex = Math.floor(Math.random() * jsonlen);
      let newImage = json.message[randomIndex];
        //happy case: breed found
          $('.results-img').html(`<img src='${newImage}' alt='dog image'>`); 
      })
      //not sure if this actually works...
      //copy in notes.txt stuff from " Things i tested for #3" the play with it
      .catch(function(e) {
        $('.results-img').html(`<p>${e.message}</p>`); 
      });

});
