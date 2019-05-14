let canvas 	= document.getElementById("myCanvas");
let context = canvas.getContext("2d");

// oor 1
context.beginPath();
context.arc(70, 180, 50, 0, 2*Math.PI);
context.fillStyle = "#FFDBAC";
context.fill();
context.closePath();
context.stroke();

// oor 2
context.beginPath();
context.arc(330, 180, 50, 0, 2*Math.PI);
context.fillStyle = "#FFDBAC";
context.fill();
context.closePath();
context.stroke();

// hoofd
context.beginPath();
context.arc(200, 200, 150, 0, 2*Math.PI);
context.fillStyle = "#FFDBAC";
context.fill();
context.closePath();
context.stroke();

// haar 1
context.beginPath();
context.rect(120, 65, 10, 20);
context.fillStyle = "#faf0be";
context.fill();
context.closePath();
context.stroke();

// haar 2
context.beginPath();
context.rect(110, 70, 10, 20);
context.fillStyle = "#faf0be";
context.fill();
context.closePath();
context.stroke();

// haar 3
context.beginPath();
context.rect(100, 75, 10, 20);
context.fillStyle = "#faf0be";
context.fill();
context.closePath();
context.stroke();

// haar 4
context.beginPath();
context.rect(90, 85, 10, 20);
context.fillStyle = "#faf0be";
context.fill();
context.closePath();
context.stroke();

// haar 5
context.beginPath();
context.rect(80, 95, 10, 20);
context.fillStyle = "#faf0be";
context.fill();
context.closePath();
context.stroke();

// haar 6
context.beginPath();
context.rect(310, 95, 10, 20);
context.fillStyle = "#faf0be";
context.fill();
context.closePath();
context.stroke();

// haar 7
context.beginPath();
context.rect(300, 85, 10, 20);
context.fillStyle = "#faf0be";
context.fill();
context.closePath();
context.stroke();

// haar 8
context.beginPath();
context.rect(290, 75, 10, 20);
context.fillStyle = "#faf0be";
context.fill();
context.closePath();
context.stroke();

// haar 9
context.beginPath();
context.rect(280, 67, 10, 20);
context.fillStyle = "#faf0be";
context.fill();
context.closePath();
context.stroke();

// haar 10
context.beginPath();
context.rect(270, 63, 10, 20);
context.fillStyle = "#faf0be";
context.fill();
context.closePath();
context.stroke();


// mond
context.beginPath();
context.arc(200, 230, 70, 0, 1*Math.PI);
context.fillStyle = "black";
context.fill();
context.closePath();
context.stroke();

// tong
context.beginPath();
context.arc(200,250,50,0.8*Math.PI,2.2*Math.PI, true);
context.fillStyle = "pink";
context.fill();
context.closePath();
context.stroke();

// neus
context.beginPath();
context.arc(200,170,50,0.8*Math.PI,2.2*Math.PI, true);
context.fillStyle = "#FFDBAC";
context.fill();
context.closePath();
context.stroke();

// tand 1
context.beginPath();
context.rect(140, 230, 20, 20);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();

// tand 2
context.beginPath();
context.rect(160, 230, 20, 20);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();

// tand 3
context.beginPath();
context.rect(180, 230, 20, 20);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();

// tand 4
context.beginPath();
context.rect(200, 230, 20, 20);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();

// tand 5
context.beginPath();
context.rect(220, 230, 20, 20);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();

// tand 6
context.beginPath();
context.rect(240, 230, 20, 20);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();


// oog 1
context.beginPath();
context.arc(130, 130, 40, 0, 2*Math.PI);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();

// oog 2
context.beginPath();
context.arc(270, 130, 40, 0, 2*Math.PI);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();

//iris 1
context.beginPath();
context.arc(130, 130, 30, 0, 2*Math.PI);
context.fillStyle = "lightblue";
context.fill();
context.closePath();
context.stroke();

//iris 2
context.beginPath();
context.arc(270, 130, 30, 0, 2*Math.PI);
context.fillStyle = "lightblue";
context.fill();
context.closePath();
context.stroke();

// pupil 1
context.beginPath();
context.arc(270, 130, 20, 0, 2*Math.PI);
context.fillStyle = "black";
context.fill();
context.closePath();
context.stroke();

// pupil 2
context.beginPath();
context.arc(130, 130, 20, 0, 2*Math.PI);
context.fillStyle = "black";
context.fill();
context.closePath();
context.stroke();

//pet
context.beginPath();
context.arc(200, 80, 70, 110, 2*Math.PI);
context.fillStyle = "black";
context.fill();
context.closePath();
context.stroke();

//pet kap
context.beginPath();
// context.arc(200, 90, 70, 110, 2*Math.PI, false);
context.arc(200,25,80,0.8*Math.PI,2.2*Math.PI, true);
context.fillStyle = "grey";
context.fill();
context.closePath();
context.stroke();
