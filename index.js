const loadingOverlay = document.querySelector('.loading-overlay');
//localStorage.clear();

function showLoading() {
  loadingOverlay.style.display = 'flex';
}

function hideLoading() {
  loadingOverlay.style.display = 'none';
}

// Handle Form Submission and Redirect
document.addEventListener('DOMContentLoaded', function() {
  const loanForm = document.getElementById("loanForm");
  if (loanForm) {
      loanForm.addEventListener("submit", function (e) {
          e.preventDefault();
          
          // Rest of your existing form submission code
          const name = document.getElementById("names").value.trim();
          const phone = document.getElementById("mpesas").value.trim();
          const idNumber = document.getElementById("idNumber").value.trim();
          const loanType = document.getElementById("loanType").value;
          const selectedCountry = document.getElementById("country").value;

          // Validation and localStorage logic remains the same
          if (!name || !phone || !idNumber || !loanType || !selectedCountry) {
              alert("Please fill in all fields before submitting.");
              return;
          }

          localStorage.setItem("name", name);
          localStorage.setItem("phone", phone);
          localStorage.setItem("idNumber", idNumber);
          localStorage.setItem("loanType", loanType);
          localStorage.setItem("country", selectedCountry);
          localStorage.setItem('visited', 'true');

          const loadingOverlay = document.querySelector('.loading-overlay');
          loadingOverlay.style.display = 'flex';
          
          setTimeout(() => {
              window.location.href = 'otherdetails.html';
              loadingOverlay.style.display = 'none';
          }, 2000);
      });
  }

  // Existing localStorage checks
  if (localStorage.getItem('lnapplied') === 'true') {
      window.location.href = 'reviewpage.html';
  } else if (localStorage.getItem('visited') === 'true') {
      window.location.href = 'savings.html';
  }
});

// Existing localStorage checks
if (localStorage.getItem('lnapplied') === 'true') {
  window.location.href = 'reviewpage.html';
} else if (localStorage.getItem('visited') === 'true') {
  window.location.href = 'savings.html';
}