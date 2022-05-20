console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully!")
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit)

function hover(evt) {
	evt.preventDefault();

	alert('You are beautiful!')
}

let mouseHover = document.querySelector('#cat')

mouseHover.addEventListener('mouseover', hover)
