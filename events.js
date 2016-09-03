var outputDiv = document.getElementById("output-target");
var pgTitle = document.getElementById("page-title");
var userInput = document.getElementById("keypress-input");
var guineaPig = document.getElementById("guinea-pig");
var colorButton = document.getElementById("add-color");
var hulkButton = document.getElementById("make-large");
var captureButton = document.getElementById("add-border");
var roundedButton = document.getElementById("add-rounding");
var sectionName = document.getElementsByClassName("article-section");


function sectionOutput(event){
	var sectionText = event.target.innerHTML;
	outputDiv.innerHTML = "You clicked on the " + sectionText + " section";
}

for (var i = 0; i < sectionName.length; i++) {
	sectionName[i].addEventListener('click', sectionOutput);
}



function mouseHeader(event){
	outputDiv.innerHTML = "You moved your mouse over the header";
}
function mouseOffHeader(event){
	outputDiv.innerHTML = "You left me!";
}

function mirrorInput(event){
	outputDiv.innerHTML = userInput.value;
}

function colorChange(event){
	guineaPig.classList.add('color');
}

function makeLarger(event){
	guineaPig.classList.add('hulk');
}

function newBorder(event){
	guineaPig.classList.add('border');
}

function roundBorder(event){
	guineaPig.classList.add('border-round');
}



pgTitle.addEventListener('mouseover', mouseHeader);
pgTitle.addEventListener('mouseleave', mouseOffHeader);

userInput.addEventListener('input', mirrorInput);

colorButton.addEventListener('click', colorChange);
hulkButton.addEventListener('click', makeLarger);
captureButton.addEventListener('click', newBorder);
roundedButton.addEventListener('click', roundBorder);



