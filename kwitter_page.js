var firebaseConfig = {
      apiKey: "AIzaSyA03Cy1Q74G__GPao_AEuQD_KLWhFRwJiM",
      authDomain: "kwitter-c900c.firebaseapp.com",
      databaseURL: "https://kwitter-c900c-default-rtdb.firebaseio.com",
      projectId: "kwitter-c900c",
      storageBucket: "kwitter-c900c.appspot.com",
      messagingSenderId: "59835508182",
      appId: "1:59835508182:web:3433a446306d11bcc7b077"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function log_out(){
      localStorage.removeItem("name");
      localStorage.removeItem("Room");
      window.location="index.html";
}
var user_name=localStorage.getItem("name");
var room_name=localStorage.getItem("Room");
function send(){
      var msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            Name:user_name,
            Message:msg,
            like:0
      });
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['Name'];
message = message_data['Message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
 message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
  like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
   span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
   row = name_with_tag+message_with_tag+like_button+span_with_tag;
   document.getElementById("output").innerHTML+=row;
  
//End code
      } });  }); }
getData();
function updateLike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updatedLikes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updatedLikes
      });

}
function back(){
      window.location="kwitter_room.html"
}