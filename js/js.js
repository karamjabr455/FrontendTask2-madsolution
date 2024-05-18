document.addEventListener("DOMContentLoaded", function() {
    //  DOM
    const logoutButtonLink = document.getElementById("logoutButtonLink");
    const loginButton = document.getElementById("loginButton");
    const confirmationModal = document.getElementById("confirmationModal");
    const cancelLogoutButton = document.getElementById("cancelLogout");
    const confirmLogoutButton = document.getElementById("confirmLogout"); // Add a checkout confirmation button
  // Check for DOM elements
    if (logoutButtonLink) {
      logoutButtonLink.addEventListener("click", function(event) {
        event.preventDefault();
        localStorage.setItem("buttonText", "تسجيل خروج");
        window.location.href = "../index.html";
      });
    }
  
    if (loginButton) {
    // Restore button text from localStorage
      const buttonText = localStorage.getItem("buttonText");
      if (buttonText) {
        loginButton.textContent = buttonText;
        localStorage.removeItem("buttonText");
      }
  
     // event listener for click on the enter/exit button
      loginButton.addEventListener("click", function(event) {
        if (loginButton.textContent === "تسجيل خروج") {
          event.preventDefault();
          if (confirmationModal) {
            confirmationModal.style.display = "flex";
          }
        }
      });
    }
  
// Event listener to deconfirm exit
    if (cancelLogoutButton) {
      cancelLogoutButton.addEventListener("click", function() {
        if (confirmationModal) {
          confirmationModal.style.display = "none";
        }
      });
    }
  
    // event listener to confirm exit
    if (confirmLogoutButton) {
      confirmLogoutButton.addEventListener("click", function() {
        if (confirmationModal) {
          confirmationModal.style.display = "none";
        }
        if (loginButton) {
          loginButton.textContent = "تسجيل دخول";
        }
      });
    }
  });