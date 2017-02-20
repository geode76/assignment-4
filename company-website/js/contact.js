//submit email to an email address
function sendEmail() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var link = "mailto:ahuddleston80@mail.fresnostate.edu"+
              "&subject=" + escape("Contact from Hyrule Fields")+
              "&body=" + escape("fname lname email");

  windows.location.href = link;

}
