// content.js
var qrCodeImage;



chrome.runtime.sendMessage({ action: "getQRData2" }, function(url) {
    qrCodeImage = url;
    
    showLightbox();
});

function showLightbox() {
  var overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.style.background = "rgba(0, 0, 0, 0.7)";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.right = "0";
  overlay.style.bottom = "0";

  var lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  
  lightbox.style.background = "#fff";
  lightbox.style.width = "400px";
  lightbox.style.height = "400px";
  lightbox.style.margin = "100px auto";
  lightbox.style.padding = "20px";
  lightbox.style.borderRadius = "10px";
  lightbox.style.zIndex = "1";

  var qrCode = document.createElement("img");
  qrCode.src = qrCodeImage;
  qrCode.style.width = "100%";
  qrCode.style.height = "100%";

  lightbox.appendChild(qrCode);
  overlay.appendChild(lightbox);
  document.body.appendChild(overlay);

  document.addEventListener("click", function(event) {
    // If the click event target is not part of the lightbox, close the lightbox
    if (!lightbox.contains(event.target)) {
      overlay.remove();
    }
  });
  
}
