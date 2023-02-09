import io from 'socket.io-client';

  const socket = io('http://localhost:3000');
  
  socket.on('connect', () => {
    console.log('Connected to the server');
  });

chrome.runtime.sendMessage({ action: "getQRData" }, function(url) {
    console.log(url + 'jhguhv');

    //url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrData);
    document.getElementById("qr").innerHTML = "<img src="+ url+ "  alt=\"HTML tutorial\" style=\"width:200px;height:200px;\">";
    
});
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
document.addEventListener('DOMContentLoaded', function () {
sendButton.addEventListener("click", function() {
  const message = messageInput.value;
  chrome.runtime.sendMessage({ type: "sendMessage", message: message });
  messageInput.value = "";
});


});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type === "receiveMessage") {
      const message = request.message;
      chatBox.innerHTML += message + "<br>";
    }
  }
);

