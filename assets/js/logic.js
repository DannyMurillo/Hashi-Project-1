var config = {
    apiKey: "AIzaSyCYlHy09JFeEnK5T77FSHR6pZnWoi6ow_Q",
    authDomain: "daichan-4b27d.firebaseapp.com",
    databaseURL: "https://daichan-4b27d.firebaseio.com",
    projectId: "daichan-4b27d",
    storageBucket: "daichan-4b27d.appspot.com",
    messagingSenderId: "307635370280"
  };

  firebase.initializeApp(config);

  $('#comment-form').on('click', function() {
    var name = $('#name').val();
    var comment = $('#comment').val();
  
  
    var comment = {
      name: name,
      comment: comment,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
  
    };