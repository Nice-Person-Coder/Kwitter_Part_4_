//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDW6DR8m1dDF8f9uuzSP_0izXe2vxDLzO0",
      authDomain: "kwitter-422e4.firebaseapp.com",
      databaseURL: "https://kwitter-422e4-default-rtdb.firebaseio.com",
      projectId: "kwitter-422e4",
      storageBucket: "kwitter-422e4.appspot.com",
      messagingSenderId: "572163698594",
      appId: "1:572163698594:web:b18ea1098c967b40020cfb"
};
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 
 function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
 }





function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
            console.log("Room Names - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
                  //End code
            });

      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}