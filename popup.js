document.addEventListener("DOMContentLoaded", function () {
    // Create pop-up HTML dynamically
    let popupHTML = `
        <div id="emailPopupOverlay"></div>
        <div id="emailPopup">
            <span id="popupClose">&times;</span>
            <h2>Get Exclusive Deals & Updates!</h2>
            <p>Subscribe to our newsletter and get special offers!</p>
            <form id="popupEmailForm">
                <input type="email" id="popupEmailInput" name="email" placeholder="Enter your email" required>
                <button id="popupSubscribeButton" type="submit">Subscribe</button>
            </form>
        </div>
    `;

    // Inject the pop-up into the body so BigCommerce can't interfere
    document.body.insertAdjacentHTML("beforeend", popupHTML);

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
    document.addEventListener("mouseout", function (event) {
        if (event.clientY < 10) {
            showPopup();
        }
    });

    // Close Pop-up
    document.getElementById("popupClose").addEventListener("click", closePopup);
    document.getElementById("emailPopupOverlay").addEventListener("click", closePopup);
});
