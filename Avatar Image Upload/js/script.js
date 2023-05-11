// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function() {

  // Get the avatar picture element and upload file input element
  const avatarPic = document.getElementById("ava_pic_id");
  const uploadInput = document.getElementById("ava_file_id");

  // PART 1: IMPLEMENT UPLOAD NEW AVATAR PICTURE FEATURE FROM LOCAL STORAGE AND SAVE
  const uploadIcon = document.getElementById("upload_ava_pic_id");

  uploadIcon.addEventListener("click", function(event) {
    event.preventDefault(); // prevent the default behavior of clicking a link
    uploadInput.click(); // simulate a click on the hidden upload file input
  });

  // Add an event listener to the upload file input to change the avatar picture when a new image is selected
  uploadInput.addEventListener("change", function(event) {
    const file = event.target.files[0]; // get the first file in the list of selected files
    const reader = new FileReader(); // create a new FileReader object
    reader.readAsDataURL(file); // read the contents of the file as a data URL
    reader.onload = function() {
      avatarPic.src = reader.result; // set the avatar picture's source to the data URL
      localStorage.setItem("avatar", reader.result); // save the data URL to local storage
    }
  });

  // Check if there is a saved avatar picture in local storage, and set the avatar picture's source to it if there is
  const savedAvatar = localStorage.getItem("avatar");
  if (savedAvatar) {
    avatarPic.src = savedAvatar;
  }
  
  // PART 2: SHOW/DISAPPEAR CAMERA ICON POP-UP 
  const avatarPicDiv = uploadIcon.parentElement;

  avatarPicDiv.addEventListener("mouseenter", function() {
    uploadIcon.style.opacity = "1"; // show the upload icon when the mouse enters the avatar-pic div
    uploadIcon.style.transform = "translate(-50%, -100%)"; // move the upload icon up to align with the bottom of the avatar
  });

  avatarPicDiv.addEventListener("mousemove", function(event) {
    const rect = avatarPicDiv.getBoundingClientRect(); // get the dimensions and position of the avatar-pic div
    const mouseY = event.clientY - rect.top; // get the vertical position of the mouse relative to the top of the avatar-pic div
    const heightThreshold = rect.height / 1.5; // get height threshold of the avatar-pic div
    if (mouseY > heightThreshold) {
      uploadIcon.style.opacity = "1"; // show the upload icon if the mouse is in the bottom half of the avatar-pic div
      uploadIcon.style.transform = "translate(-50%, -100%)"; // move the upload icon up to align with the bottom of the avatar
    } else {
      uploadIcon.style.opacity = "0"; // hide the upload icon if the mouse is in the top half of the avatar-pic div
      uploadIcon.style.transform = "translate(-50%, 0%)"; // move the upload icon back down to its original position
    }
  });

  avatarPicDiv.addEventListener("mouseleave", function() {
    uploadIcon.style.opacity = "0"; // hide the upload icon when the mouse leaves the avatar-pic div
    uploadIcon.style.transform = "translate(-50%, 0%)"; // move the upload icon back down to its original position
  });

});
