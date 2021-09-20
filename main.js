const webcam = document.querySelector("#webcam");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => webcam.srcObject = stream)
    .catch(error => alert(error));
}