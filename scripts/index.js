let testVid = document.getElementById('testVid');
let myLoc = document.getElementById('coords');

sessionStorage.myName = "Angelo Capozzi";

if(typeof(Storage) !=="undefined") {
    alert('Accepted');
} else {
    alert('No localStorage accepted');
}

function getPos() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition); 
    } else {
        myLoc.innerHTML = "Geolocation not suppoerted by this browser...soz, bruh.";
    } 
}

function showPosition(position) {
    myLoc.innerHTML = "Latitude: " + position.coords.latitude +
                        "<br>Longitude: " + position.coords.longitude;
}

function playOrPause() {
    if(testVid.paused) {
        testVid.play();
    } else {
        testVid.pause();
    }
}

function fullScreen() {
    testVid.width=300;
}
function midScreen() {
    testVid.width=200;
}

function minScreen() {
    testVid.width=100;
}

function allowDrop(e) {
    e.preventDefault();
    //prevents the image or target from going back to natural area
}

function drag(e) {
    e.dataTransfer.setData("Text", e.target.id);
    //allows target to be dragged
}

function drop(e) {
    e.preventDefault();
    d = e.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(d));
}