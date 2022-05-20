function favColor(evt) {
	evt.preventDefault();
	
	alert("Blue!")
}

let color = document.querySelector('button#color');

color.addEventListener('click', favColor)


function favPlace(evt) {
	evt.preventDefault();
	
	alert("Switzerland!")
}

let place = document.querySelector('button#place');

place.addEventListener('click', favPlace)


function favRitual(evt) {
	evt.preventDefault();
	
	alert("Going to bed on time!")
}

let ritual = document.querySelector('button#ritual');

ritual.addEventListener('click', favRitual)

