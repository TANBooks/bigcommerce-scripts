document.addEventListener("DOMContentLoaded", function() {
    function showPopup() {
        document.getElementById("emailPopupOverlay").style.display = "block";
        document.getElementById("emailPopup").style.display = "block";
    }

    function closePopup() {
        document.getElementById("emailPopupOverlay").style.display = "none";
        document.getElementById("emailPopup").style.display = "none";
    }

    // Show pop-up after 5 seconds
    setTimeout(showPopup, 5000);

    // Exit Intent Trigger
    document.addEventListener("mouseout", function(event) {
        if (event.clientY < 10) {
            showPopup();
        }
    });

    // Close Pop-up
    document.getElementById("popupClose").addEventListener("click", closePopup);
    document.getElementById("emailPopupOverlay").addEventListener("click", closePopup);

    // Handle Form Submission
    document.getElementById("popupEmailForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var email = document.getElementById("popupEmailInput").value;

        fetch("https://api.iterable.com/api/users/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Api-Key": "YOUR_ITERABLE_API_KEY"
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            alert("Thank you for subscribing!");
            document.getElementById("popupEmailInput").value = "";
            closePopup();
        })
        .catch(error => console.error("Error:", error));
    });
});
