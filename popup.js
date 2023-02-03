

chrome.runtime.sendMessage({ action: "getQRData" }, function(url) {
    console.log(url + 'jhguhv');

    //url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrData);
    document.getElementById("qr").innerHTML = "<img src="+ url+ "  alt=\"HTML tutorial\" style=\"width:200px;height:200px;\">";
    
});


    
  



// 'use-strict'
// var qrcode = new QRCode("qr-code", {
//     text: "",
//     width: 128,
//     height: 128,
//     colorDark : "#000000",
//     colorLight : "#ffffff",
//     correctLevel : QRCode.CorrectLevel.H
//   });

//   qrcode.makeCode("hii");
//     chrome.runtime.onMessage.addListener(
//         function(request, sender, sendResponse) {
//           console.log(sender.tab ?
//                       "from a content script:" + sender.tab.url :
//                       "from the extension");
//           if (request.message[0] === "hello")
//              qrcode.makeCode(message[1]);
//         }
//       );


    