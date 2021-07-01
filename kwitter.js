function login(){
    var user_name=document.getElementById("userName").value;
    localStorage.setItem("name",user_name);
    window.location= "kwitter_room.html";
}