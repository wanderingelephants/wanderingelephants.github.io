
document.addEventListener("DOMContentLoaded", function () {
    var aidea_chat_close_btn = document.getElementById("aidea_chat_close_btn");
    var aidea_chat_open_btn = document.getElementById("aidea_chat_open_btn");
    var messageList = document.getElementById("aidea-messages-list");
    var messageInput = document.getElementById("aidea-message-input");
    var sendButton = document.getElementById("aidea-send-button");
    var apiUrl = "https://stageapi.delphi.games/api/chatbot/botresponse"; // Replace with your API URL

    // Function to create a new chat message
    function createMessage(text, sender) {
      var messageElement = document.createElement("p");
      messageElement.classList.add("message");
      sender == 'bot' ? messageElement.classList.add("message-in") : messageElement.classList.add("message-out");

      messageElement.textContent = text;
      messageList.appendChild(messageElement);
    }
    // Function to send user message to the API and display the response
    function sendMessage() {
      var userMessage = messageInput.value;
      if (userMessage.trim() !== "") {
        createMessage(userMessage, "user");
        document.getElementById("aidea-progress-bar").style.display = 'block';
        // Send user message to the API
        // You can use different methods to make the API request, such as fetch or XMLHttpRequest
        // Here's an example using fetch:
        fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "input": {
              "arg1": {
                "industry_type": "type_hotels",
                "customer": "neelambari.co.in",
                "userQuery": userMessage
              }
            }
          })
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            document.getElementById("aidea-progress-bar").style.display = 'none';
            createMessage(data.chatbotResponse, "bot");
          })
          .catch(function (error) {
            document.getElementById("aidea-progress-bar").style.display = 'none';
            console.error("Error:", error);
          });

        // Clear the input field
        messageInput.value = "";
      }
    }

    // Event listener for the send button
    sendButton.addEventListener("click", sendMessage);

    // Event listener for Enter key press
    messageInput.addEventListener("keydown", function (event) {
      if (event.keyCode === 13) {
        sendMessage();
      }
    });
    
    aidea_chat_close_btn.addEventListener("click", function(event){
      document.getElementById("aidea-chat-container").style.display = 'none';

    })
    aidea_chat_open_btn.addEventListener("click", function(event){
      document.getElementById("aidea-chat-container").style.display = 'block';
    })
  });