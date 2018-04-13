var config = {
    apiKey: "AIzaSyCYlHy09JFeEnK5T77FSHR6pZnWoi6ow_Q",
    authDomain: "daichan-4b27d.firebaseapp.com",
    databaseURL: "https://daichan-4b27d.firebaseio.com",
    projectId: "daichan-4b27d",
    storageBucket: "daichan-4b27d.appspot.com",
    messagingSenderId: "307635370280"
  };

  firebase.initializeApp(config);

  $('#comment-button').on('click', function() {
    var name = $('#name').val();
    var rating = $('#rating').val();
    var comment = $('#comment').val();
  
  
    var comment = {
      name: name,
      rating: rating,
      comment: comment,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    
      };
    
      console.log(comment);
    
      var connectionsRef = daichanDb.ref();
    
      connectionsRef.push(comment);
      return false;
    
    });
    
    // Create a variable to reference the database.
    var daichanDb = firebase.database();
    
