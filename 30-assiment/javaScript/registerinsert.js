//regiters section values
var FullName = [];
var UserName = [];
var Email = [];
var Password = [];
var confirmPassword = [];

var fullNameInput = document.getElementById("fullName"); 
var userNameInput = document.getElementById("userName");
var emailtInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("confirm");

var messageBox = document.getElementById("display"); // display div to display the information of the users

function insert() {
  if (
    passwordInput.value != confirmPasswordInput.value ||
    fullNameInput.value == "" ||
    userNameInput.value == "" ||
    emailtInput.value.includes("@") == ""
  ) {
    alert(
      "Error message please enter the correct input value and try again. Like email and password must be correct"
    );
    return false;
  }
//push into the array whatever value the users enter in the input
  FullName.push(fullNameInput.value);
  UserName.push(userNameInput.value);
  Email.push(emailtInput.value);
  Password.push(passwordInput.value);
  confirmPassword.push(confirmPasswordInput.value);
  clearAndShow(); // after this call the clear and show function to clear the input and still display textboxes
}

function clearAndShow() {
  // Clear our fields
  fullNameInput.value = "";
  userNameInput.value = "";
  emailtInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";
  // Show our output
  messageBox.innerHTML = "";

  messageBox.innerHTML +=
    "Full Name: " + FullName.join(", ") + "<br/>" + "<br/>";
  messageBox.innerHTML +=
    "User Names: " + UserName.join(", ") + "<br/>" + "<br/>";
  messageBox.innerHTML += "Email: " + Email.join(", ") + "<br/>" + "<br/>";
  messageBox.innerHTML +=
    "Password: " + Password.join(", ") + "<br/>" + "<br/>";
  messageBox.innerHTML +=
    "Confirm Password: " + confirmPassword.join(", ") + "<br/>" + "<br/>";
}
// login page session of the js code
var userEmailFound = false;
var userPasswordFound = false;
function validate() {
  validateUserEmail();
  validateUserPassword();
  alertTheUser();
}
function validateUserEmail() {
  var usersEmailFormId = document.getElementById("loginemail").value;

  for (let index = 0; index < Email.length; index++) {
    if (Email[index] == usersEmailFormId) {
      userEmailFound = true;
      break; //when found stop loop
    } else {
      userEmailFound = false;
    }
  } //end loop
}

function validateUserPassword() {
  var usersPasswordFormId = document.getElementById("loginpassword").value;

  for (let index = 0; index < Password.length; index++) {
    if (Password[index] == usersPasswordFormId) {
      userPasswordFound = true;
      break;
    } else {
      userPasswordFound = false;
    }
  } //end loop
}

function alertTheUser() {
  if (userEmailFound && userPasswordFound) {
    alert(
      "well done, you are logged in! you will be redirected to the home page in 2 second"
    );
    openPage(); // thsis will only redirect on the home page if succssefull log in !!!
  } else {
    alert("Sorry,your credential are incorect! please try again");
  }
} 
//end of function
function openPage() {
  //redirect to another new page
  setTimeout(function () {
    window.location.replace("./index.html");
  }, 2000); // this is the timer in mliseconds
}
