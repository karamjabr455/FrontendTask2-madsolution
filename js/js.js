// document.addEventListener("DOMContentLoaded", function() {
//     //  DOM
//     const logoutButtonLink = document.getElementById("logoutButtonLink");
//     const loginButton = document.getElementById("loginButton");
//     const confirmationModal = document.getElementById("confirmationModal");
//     const cancelLogoutButton = document.getElementById("cancelLogout");
//     const confirmLogoutButton = document.getElementById("confirmLogout"); // Add a checkout confirmation button
//   // Check for DOM elements
//     if (logoutButtonLink) {
//       logoutButtonLink.addEventListener("click", function(event) {
//         event.preventDefault();
//         localStorage.setItem("buttonText", "تسجيل خروج");
//         window.location.href = "../index.html";
//       });
//     }
  
//     if (loginButton) {
//     // Restore button text from localStorage
//       const buttonText = localStorage.getItem("buttonText");
//       if (buttonText) {
//         loginButton.textContent = buttonText;
//         localStorage.removeItem("buttonText");
//       }
  
//      // event listener for click on the enter/exit button
//       loginButton.addEventListener("click", function(event) {
//         if (loginButton.textContent === "تسجيل خروج") {
//           event.preventDefault();
//           if (confirmationModal) {
//             confirmationModal.style.display = "flex";
//           }
//         }
//       });
//     }
  
// // Event listener to deconfirm exit
//     if (cancelLogoutButton) {
//       cancelLogoutButton.addEventListener("click", function() {
//         if (confirmationModal) {
//           confirmationModal.style.display = "none";
//         }
//       });
//     }
  
//     // event listener to confirm exit
//     if (confirmLogoutButton) {
//       confirmLogoutButton.addEventListener("click", function() {
//         if (confirmationModal) {
//           confirmationModal.style.display = "none";
//         }
//         if (loginButton) {
//           loginButton.textContent = "تسجيل دخول";
//         }
//       });
//     }
//   });



  document.addEventListener('DOMContentLoaded', function () {
    const loaderBar = document.querySelector('.loader-bar');
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Strip count
    const loaderDuration = 3000; 

   
    setTimeout(() => {
        loaderBar.style.width = '100%';
        startCounting();
    }, 100);
    function startCounting() {
        let startTime = performance.now();
        function animateCount(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(1, elapsedTime / loaderDuration);
            const progressPercent = Math.round(progress * 100);
            updateProgress(progressPercent);
            if (progress < 1) {
                requestAnimationFrame(animateCount);
            }
        }
        requestAnimationFrame(animateCount);
    }

   
    function updateProgress(percent) {
        const progressCount = document.querySelector('.progress-count');
        progressCount.textContent = percent + '%';
    }

   // When the tape has finished stretching across
    loaderBar.addEventListener('transitionend', (event) => {
        if (event.propertyName === 'width' && loaderBar.style.width === '100%') {
            preloader.classList.add('expand');
        }
    });

    // When the longitudinal expansion movement ends
    preloader.addEventListener('transitionend', (event) => {
        if (event.propertyName === 'height') {
            preloader.classList.add('fade-out');
        }
    });

    // When the fade animation ends
    preloader.addEventListener('animationend', () => {
        preloader.style.display = 'none';
        content.style.display = 'block';
    });
});


