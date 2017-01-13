var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/brute.jpg') {
		myImage.setAttribute ('src','images/characterpoe2.jpg');
	} else {
		myImage.setAttribute ('src','images/brute.jpg');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Do you like video games? ' + myName;
}
if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent ='Hi ' + storedName + ', Do you like video games?';
}
myButton.onclick = function() {
	setUserName();
}