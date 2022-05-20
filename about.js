console.log("hello world");

//submit alert
function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully!")
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit)

//picture alert
function hover(evt) {
	evt.preventDefault();

	alert('You are beautiful!')
}

let mouseHover = document.querySelector('#cat')

mouseHover.addEventListener('mouseover', hover)

//lion alert
function lionEv(evt) {
	evt.preventDefault();
	
	alert("Lions obviously ROAR!")
}

let lionBtn = document.querySelector('.lionbtn');

lionBtn.addEventListener('click', lionEv)

//bobcat alert
function bobEv(evt) {
	evt.preventDefault();
	
	alert("All Bobcats are named Bob!")
}

let bobBtn = document.querySelector('.bobbtn');

bobBtn.addEventListener('click', bobEv)

//cheetah alert
function cheetEv(evt) {
	evt.preventDefault();
	
	alert("Depends on if the turtle has rocket boosters attached to it.")
}

let cheetBtn = document.querySelector('.cheetbtn');

cheetBtn.addEventListener('click', cheetEv)

//singapura alert
function singEv(evt) {
	evt.preventDefault();
	
	alert("Perhaps unsurprisingly, the Singapura cat comes from Singapore. In its original Malay terminology, Singapore means city of lions.")
}

let singBtn = document.querySelector('.singbtn');

singBtn.addEventListener('click', singEv)

//munchkin alert
function munchEv(evt) {
	evt.preventDefault();
	
	alert("You must be asking yourself, 'Why did they ask me this question? The name Munchkin says it all!'")
}

let munchBtn = document.querySelector('.munchbtn');

munchBtn.addEventListener('click', munchEv)

//cornish rex alert
function cornEv(evt) {
	evt.preventDefault();
	
	alert("Seriously, these questions are getting rediculous. Obviously a Cornish Rex isn't the size of a T-Rex. ")
}

let cornBtn = document.querySelector('.cornbtn');

cornBtn.addEventListener('click', cornEv)
