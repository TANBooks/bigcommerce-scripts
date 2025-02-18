document.addEventListener("DOMContentLoaded", function () {
    function showPopup() {
        let popup = document.getElementById("emailPopup");
        let overlay = document.getElementById("emailPopupOverlay");

        // Move the pop-up to the end of <body> so it's on the highest layer
        document.body.appendChild(popup);
        document.body.appendChild(overlay);

        // Display the pop-up & overlay
        overlay.style.display = "block";
        popup.style.display = "block";
    }

    function closePopup() {
        document.getElementById("emailPopupOverlay").style.display = "none";
        document.getElementById("emailPopup").style.display = "none";
    }

    // Show pop-up after 5 seconds
    setTimeout(showPopup, 5000);

    // Exit Intent Trigger
    document.addEventListener("mouseout", function (event) {
        if (event.clientY < 10) {
            showPopup();
        }
    });

    // Close Pop-up
    document.getElementById("popupClose").addEventListener("click", closePopup);
    document.getElementById("emailPopupOverlay").addEventListener("click", closePo
