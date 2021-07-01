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
user_name=localStorage.getItem("name");
document.getElementById("welcome_username").innerHTML="Welcome "+user_name+"!";

function addRoom(){
  var roomName=document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomName).update({
    pupose:"addRoom"
  });
  localStorage.setItem("Room",roomName);
  window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
 console.log(Room_names);
 var row="<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;

      });});}
getData();
function redirectToRoom(name){
  localStorage.setItem("Room",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("name");
  localStorage.removeItem("Room");
  window.location="index.html";
}