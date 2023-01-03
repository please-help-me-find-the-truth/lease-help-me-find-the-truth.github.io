var video1 = document.querySelector("#player01");
var video2 = document.querySelector("#player02");

var canvas = video2
var context = canvas.getContext('2d');
canvas.imageSmoothingEnabled = false

function copyVideoToCanvas() {
  context.imageSmoothingEnabled = false
  context.drawImage(video1, 0, 0, 300, 200);
  requestAnimationFrame(copyVideoToCanvas);
}


if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ 
    video: true,
    audio: false,
    video: {
      // width: 50
      // height: 50 
    }
  })
    .then(function (stream) {
      video1.srcObject = stream;
      copyVideoToCanvas()
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

/*var video2 = document.querySelector("#player02");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video2.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}*/

function setRandomScaleAndPosition() {
    // calculate values
    var x = Math.floor(Math.random() * 30 - 10) // min = 0*100-50 => -50 ; max = 1*100-50 => 50
    var y = Math.floor(Math.random() * 30 - 10)
     // Math.floor(Math.random() * 6 + 2)    //siehe css var scale 
    var scale =  Math.floor(Math.random() * (20 - 10 + 1)) + 1;
    //random Zahl bei var scale 
    // display values in console
    console.log("new values:", x, y, scale)
    
    // set CSS variables
  video1.style.setProperty('--translate-x', x + "%");
  video1.style.setProperty('--translate-y', y + "%");
  video1.style.setProperty('--scale', scale*2);
  video2.style.setProperty('--translate-x', x + "%");
  video2.style.setProperty('--translate-y', y + "%");
  video2.style.setProperty('--scale', scale*8);
}
setInterval(setRandomScaleAndPosition, 6000)


/*function setRandomScaleAndPosition() {
    // calculate values
    var x = Math.floor(Math.random() * 100 - 50) // min = 0*100-50 => -50 ; max = 1*100-50 => 50
    var y = Math.floor(Math.random() * 100 - 50)
    var scale = 8 // Math.floor(Math.random() * 6 + 2)    //siehe css var scale 
    
    // display values in console
    console.log("new values:", x, y, scale)
    
    // set CSS variables
  video2.style.setProperty('--translate-x', x + "%");
  video2.style.setProperty('--translate-y', y + "%");
  video2.style.setProperty('--scale', scale);
}
setInterval(setRandomScaleAndPosition, 500)

/*
// run setRandomScaleAndPosition every 4 seconds
// setInterval(setRandomScaleAndPosition, 500)
'*/
