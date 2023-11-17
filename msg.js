document.addEventListener("DOMContentLoaded", function() {
    const chatList = document.querySelectorAll(".chat");
    const chatWindows = document.querySelectorAll(".chat-window");
    const sendButtons = document.querySelectorAll(".send-button");
    const messageInputFields = document.querySelectorAll(".message-input-field");
    const chatHeader = document.getElementById("chat-header");

    const navbarLinks = document.querySelectorAll('.navbar a');

    // Add click event listener to each navbar link
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = link.getAttribute('href');

            // Redirect to the specified HTML page
            window.location.href = href;

            // Prevent default behavior (avoiding actual link click)
            event.preventDefault();
        });
    });

    // Add click event listener to each chat in the sidebar
    chatList.forEach((chat) => {
        chat.addEventListener("click", function() {
            // Hide all chat windows
            chatWindows.forEach(window => {
                window.style.display = "none";
            });

            // Get the data-chat attribute value of the clicked chat
            const chatId = chat.getAttribute("data-chat");

            // Show the selected chat window based on the data-chat attribute
            const selectedWindow = document.querySelector(`.chat-window[data-chat="${chatId}"]`);
            if (selectedWindow) {
                selectedWindow.style.display = "flex"; // or "block" based on your layout

                // Get the name associated with the selected chat and update the chat header
                const personName = chat.getAttribute("data-name");
                chatHeader.textContent = personName;
            }
        });
    });

    function sendMessage(event) {
        const button = event.target;
        const chatWindow = button.closest(".chat-window");
        const messageInput = chatWindow.querySelector(".message-input-field");
        const conversation = chatWindow.querySelector(".conversation");

        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const message = document.createElement("div");
            message.classList.add("message", "sent");
            message.innerHTML = `<div class="message-body">${messageText}</div>`;
            conversation.appendChild(message);

            // Clear the input field after sending the message
            messageInput.value = "";
        }
    }

    // Add click event listener to each send button
    sendButtons.forEach(button => {
        button.addEventListener("click", sendMessage);
    });

    // Add keypress event listener to input field for sending messages on "Enter" key press
    messageInputFields.forEach(inputField => {
        inputField.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                sendMessage(event);
            }
        });
    });
});