chrome.contextMenus.create({
    id: "shaqr-menu",
    title: "Share through QR - shaQR",
    contexts: ["all"]
  });
  
  var qrData = "hii";  
  let url;
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "shaqr-menu") {
     

      

    // Add the QR code to the modal body
    // ...

    // Add an event listener to close the modal dialog when the close button is clicked
   
      
      if (info.selectionText) {
        qrData = info.selectionText.toString;
        url =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(info.selectionText);
        //console.log("bg-17 :"+qrData)
      } else if (info.linkUrl) {
        qrData = info.linkUrl;
        url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(info.linkUrl);
      } else if (info.srcUrl) {
        qrData = info.srcUrl;
        url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(info.srcUrl)
      }

      
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files : ['content.js']
        
      });
      
     
     
      // if (info.selectionText) {
      //   selectedText = info.selectionText.toString();

      //    chrome.tabs.create({ url: });
      // } else if (info.linkUrl) {
      //   chrome.tabs.create({ url: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(info.linkUrl) });
      // } else if (info.srcUrl) {
      //   chrome.tabs.create({ url: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(info.srcUrl) });
      // }
        
    
         
        //  console.log(`Sending message to tab with id: ${selectedText}`);
        //  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        //     chrome.tabs.sendMessage(tab.id,{ message : "hello",data : selectedText}, function(response) {
        //       if (!chrome.runtime.lastError) {
        //           // if you have any response

        //       } else {
        //         console.error(chrome.runtime.lastError.message);
        //           // if you don't have any response it's ok but you should actually handle
        //           // it and we are doing this when we are examining chrome.runtime.lastError
        //       }

        //     if (!response) {
        //         console.error("No response from background script");
        //     }
        //     });
        //   });
        
        
      
        
        
    }

  });
  

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getQRData") {
      sendResponse(url);
    }
    if (request.action === "getQRData2") {
      sendResponse(url);
    }
    if(chrome.runtime.lastError)
    console.error(chrome.runtime.lastError.message + qrData);
  });
