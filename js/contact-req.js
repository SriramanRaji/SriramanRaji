// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBNCW3PXiZ9g8rcksXx98zmH9YN2bTp_lM",
  authDomain: "contact-form-653ad.firebaseapp.com",
  databaseURL:
    "https://contact-form-653ad-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contact-form-653ad",
  storageBucket: "contact-form-653ad.appspot.com",
  messagingSenderId: "1007365752865",
  appId: "1:1007365752865:web:98a5507828f3ba851a3b60",
  measurementId: "G-6LSQQFKB26",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference message collection
var messagesRef = firebase.database().ref("contact-requests");

// Listen for form Submit
document.getElementById("contact-form").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();
  var name = getInputValue("name");
  var phone = getInputValue("phone");
  var email = getInputValue("email");
  var message = getInputValue("message");
  var today = new Date();

  // Patterns for validation
  var emailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  var phoneRegex = "[0-9]{10}";

  var emailResult = email.match(emailRegex);
  var phoneTempResult = phone.match(phoneRegex);

  var phoneResult = false;

  if (String(phone).length == 10 && phoneTempResult != null) {
    phoneResult = true;
  } else {
    phoneResult = false;
  }

  if (phoneResult && emailResult != null) {
    // Saving message
    saveMessage(name, phone, email, message, "Sent on " + today);

    //  Show alert
    document.querySelector(".contact-info").style.display = "none";
    document.querySelector(".alert-success").style.display = "flex";

    //Hide alert after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert-success").style.display = "none";
      document.querySelector(".contact-info").style.display = "flex";
    }, 3000);

    //   Reset form
    document.getElementById("contact-form").reset();
  } else {
    //  Show alert
    document.querySelector(".contact-info").style.display = "none";
    document.querySelector(".alert-error").style.display = "flex";

    //Hide alert after 3 seconds
    setTimeout(function () {
      document.querySelector(".contact-info").style.display = "flex";
      document.querySelector(".alert-error").style.display = "none";
    }, 3000);
  }
}

// Function to get form values
function getInputValue(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone, email, message, today) {
  var newMessageRef = messagesRef.push();
  // Save message
  newMessageRef.set({
    name: name,
    phone: phone,
    email: email,
    message: message,
    date: today,
  });
}
