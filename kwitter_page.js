//YOUR FIREBASE LINKS
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

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
