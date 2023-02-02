

'use-strict'
var qrcode = new QRCode("qr-code", {
    text: "",
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });

  qrcode.makeCode("hii");
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
          console.log(sender.tab ?
                      "from a content script:" + sender.tab.url :
                      "from the extension");
          if (request.message[0] === "hello")
             qrcode.makeCode(message[1]);
        }
      );


    