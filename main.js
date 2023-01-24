var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true,
    video: {
      facingMode: 'environment'
    } })
    .then(function (stream) {
      video.srcObject = stream;

    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}


root = document.documentElement;

// Function to set random x, y and scale values
// math.random () returns a random number between 0 (inclusive),  and 1 (exclusive):
// ganzzahlige Zufallswerte mit: math.floor()

function setRandomScaleAndPosition() {
    // calculate values
    var x = Math.floor(Math.random() * 100 - 50) // min = 0*100-50 => -50 ; max = 1*100-50 => 50
    var y = Math.floor(Math.random() * 100 - 50)
    var scale = 8 // Math.floor(Math.random() * 6 + 2)    //siehe css var scale 
    
    // display values in console
    console.log("new values:", x, y, scale)
    
    // set CSS variables
  root.style.setProperty('--translate-x', x + "%");
  root.style.setProperty('--translate-y', y + "%");
  root.style.setProperty('--scale', scale);
}

// run setRandomScaleAndPosition every 6 seconds
setInterval(setRandomScaleAndPosition, 6000)

