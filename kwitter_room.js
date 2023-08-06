const firebaseConfig = {
    apiKey: "AIzaSyDgwbyGDKYOdMPAC73LGpeGxT7bjtswJ1c",
    authDomain: "kwitter-project-c1e74.firebaseapp.com",
    databaseURL: "https://kwitter-project-c1e74-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-c1e74",
    storageBucket: "kwitter-project-c1e74.appspot.com",
    messagingSenderId: "454542945874",
    appId: "1:454542945874:web:f85277a8a8abb56495f98b"
  };

  firebase.initalizeApp(firebaseConfig);

  user_name = localStorage.getItem("username");
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    
    localStorage.setItem("roomname", room_name);

    window.location = "kwitter_room.html";

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"});
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room_names - ", + Room_names);
      row = "<div class = 'room_name' id = "+Room_Names+" onclick= 'redirectToRoomName(this.id)'>#"+ Room_name +" </div> <hr>"
      document.getElementById("output").innerHTML += row;
   });});}
getData();

function redirectToRoomName()
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = kwitter_room.js;
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("kwitter_page.html");
}

function send()
{
  msg = document.getElementById("msg").value;
  console.log("Message" +msg);
  firebase.database().ref(room_name).push({
    username : user_name,
    message : msg,
    like : 0
  });
  document.getElementById("msg").innerHTML = "";
}