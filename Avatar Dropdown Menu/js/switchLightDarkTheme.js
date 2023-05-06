const body = document.querySelector("body"); // select body element and save into variable
const toggleText = document.querySelector('#toggle_text');
const toggleCheckbox = document.getElementById("toggle_checkbox_id"); // get toggle checkbox element by id and save into variable

// Function to set the theme based on user preference
function setTheme(theme) {
  const avatarMenu = document.querySelector(".avatar-menu"); // select avatar-menu element and save into variable

  // If theme equals 'dark', style body and body contents according to "dark-mode" class selector
  if (theme === "dark") {
    body.classList.add("dark-mode"); // add dark-mode class selector to body
    avatarMenu.classList.add("dark-mode"); // add dark-mode class selector to avatar-menu
    toggleText.textContent = "Dark Mode";
  // Else theme equals 'light', style without special selector
  } else {
    body.classList.remove("dark-mode"); // remove dark-mode class selector from body
    avatarMenu.classList.remove("dark-mode"); // remove dark-mode class selector from body
    toggleText.textContent = "Light Mode";
  }
}

// Function to toggle the theme
function switchTheme() {
  // Set currentTheme variable to "dark" if dark-mode class is present in the body element, and to "light" if not
  const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";

  if (currentTheme === "dark") {
    setTheme("light");
    localStorage.setItem("theme", "light");
  } else {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  }
}

// Event listener for the toggle switch
toggleCheckbox.addEventListener("change", switchTheme);

// Set the theme based on user preference stored in local storage
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  setTheme(currentTheme);
  
  // Set the state of the toggle switch based on the user's stored preference
  toggleCheckbox.checked = currentTheme === "dark";
} else {
  setTheme("light"); // Set default theme to light if no preference is found
}
