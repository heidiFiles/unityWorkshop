

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
myOtherBox.object3D.rotation.x += rotationSpeed ;
console.log(myOtherBox.object3D.rotation.x);
}

function spin(){
    myOtherBox.object3D.rotation.x += rotationSpeed ;
    console.log(myOtherBox.object3D.rotation.y);
    }

setInterval(spin, 60); //equivalent to 60 fps