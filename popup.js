
chrome.runtime.sendMessage({ action: "getQRData" }, function(url) {
    console.log(url + 'jhguhv');

    //url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrData);
    document.getElementById("qr").innerHTML = "<img src="+ url+ "  alt=\"HTML tutorial\" style=\"width:200px;height:200px;\">";
    
});
