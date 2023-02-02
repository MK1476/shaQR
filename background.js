chrome.contextMenus.create({
    id: "shaqr-menu",
    title: "Share through QR - shaQR",
    contexts: ["all"]
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "shaqr-menu") {
     
         
         selectedText = info.selectionText.toString();
         console.log(`Sending message to tab with id: ${selectedText}`);
         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.runtime.sendMessage( message =  ["hello"], function(response) {
              if (!chrome.runtime.lastError) {
                  // if you have any response

              } else {
                console.error(chrome.runtime.lastError.message);
                  // if you don't have any response it's ok but you should actually handle
                  // it and we are doing this when we are examining chrome.runtime.lastError
              }
            });
          });
        
        
         
    }

  });
  

