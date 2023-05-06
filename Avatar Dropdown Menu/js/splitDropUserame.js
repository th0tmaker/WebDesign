// split username into two lines of equal character length 
function splitUsername() {
  const usernameEl = document.getElementById("username");
  const username = usernameEl.textContent;
  
  // split only if username contains 15 or more characters
  if (username.length >= 15) { // only split if length >= 20
    const midpoint = Math.ceil(username.length / 2);
    const firstHalf = username.slice(0, midpoint);
    const secondHalf = username.slice(midpoint);

    usernameEl.innerHTML = `${firstHalf}<br>${secondHalf}`;
  }
}

window.addEventListener("load", splitUsername);
