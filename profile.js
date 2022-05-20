//color alert
function favColor(evt) {
	evt.preventDefault();
	
	alert("Blue!")
}

let color = document.querySelector('button#color');

color.addEventListener('click', favColor)

//fav place alert
function favPlace(evt) {
	evt.preventDefault();
	
	alert("Switzerland!")
}

let place = document.querySelector('button#place');

place.addEventListener('click', favPlace)

//fav ritual alert
function favRitual(evt) {
	evt.preventDefault();
	
	alert("Going to bed!")
}

let ritual = document.querySelector('button#ritual');

ritual.addEventListener('click', favRitual)

//questions alert
function questionSub(evt) {
	evt.preventDefault();
	
	alert("Message sent!")
}

let question = document.querySelector('.qbtn');

question.addEventListener('click', questionSub)