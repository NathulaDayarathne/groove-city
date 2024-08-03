// Function to validate the form
function validateForm() {
// Get form inputs
 var fname = document.getElementById('fname').value;
 var lname = document.getElementById('lname').value;
 var email = document.getElementById('email').value;
 var rating = document.querySelector('input[name="rating"]:checked');
 var textarea = document.getElementById('why').value;
  
 // Validate first name
 if (fname == '') {
    alert('Please enter your first name.');
    return false;
 }
  
 // Validate last name
 if (lname == '') {
    alert('Please enter your last name.');
    return false;
 }
  
 // Validate email
 if (email == '') {
    alert('Please enter your email address.');
    return false;
 }else{
    // Regular expression for email validation
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
        alert('Please enter a valid email address.');
        return false;
    }
 }
  
 // Validate rating
 if (!rating) {
    alert('Please select a rating.');
    return false;
 }
  
 // Validate textarea
 if (textarea == '') {
    alert('Please provide a reason for your rating.');
    return false;
  }else{
    invisibleForm();
    return true; 
 }
}
  
// Add event listener to the form submit button
function invisibleForm(){
    let hide = document.querySelector("#feedback_for_us");
    hide.style.display ="none";
    document.getElementById("greeting_message").style.display = 'block';
} 