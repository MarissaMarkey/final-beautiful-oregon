var s=document.getElementById("sand");
var b=document.getElementById("beach");
var f=document.getElementById("forest");
var c=document.getElementById("city");
var m=document.getElementById("mainimg");
var x=0;
var y=0;
var z=0;
var w=0;
var done=0;

function changeSand() {
	s.classList.add ("gray");
	b.classList.add ("gray");
	f.classList.add ("gray");
	c.classList.add ("gray");
	s.src= "images/sandunes2.png"
	b.src = "images/jumpingsandunes.png";
	f.src = "images/dunebuggy.png";
	c.src = "images/horses.png";
	m.src = "images/oregonsand.png";
	document.getElementById("sandbutton").classList.add("pressed");
	x=2;
	s.classList.add("backgroundsand");
	console.log(x);
	CheckIfDone() //after you click the sand button it checks if the rest of the buttons have been clicked
}

function changeForest() {
	s.classList.add ("gray");
	b.classList.add ("gray");
	f.classList.add ("gray");
	c.classList.add ("gray");
	s.src= "images/waterfall.png"
	b.src = "images/oregonlakes.png";
	f.src = "images/forest+falls.png";
	c.src = "images/foreststreets.png";
	m.src = "images/oregonforest.png";
	document.getElementById("forestbutton").classList.add("pressed");
	y=2;
	console.log(y);
	CheckIfDone() //after you click the forest button it checks if the rest of the buttons have been clicked
}

function changeBeach() {
	s.classList.add ("gray");
	b.classList.add ("gray");
	f.classList.add ("gray");
	c.classList.add ("gray");
	s.src= "images/lighthouse.jpg"
	b.src = "images/oregonbeachjump.png";
	f.src = "images/beach.png";
	c.src = "images/beachtrees.png";
	m.src = "images/oregonbeach.png";
	document.getElementById("beachbutton").classList.add("pressed");
	z=2;
	console.log(z);
	CheckIfDone();//after you click the beach button it checks if the rest of the buttons have been clicked
}

function changeCity() {
	s.classList.add ("gray");
	b.classList.add ("gray");
	f.classList.add ("gray");
	c.classList.add ("gray");
	s.src= "images/portland2.jpg"
	b.src = "images/salem.jfif";
	f.src = "images/street.jpg";
	c.src = "images/portland.jpg";
	m.src = "images/oregoncity.png";
	document.getElementById("citybutton").classList.add("pressed");
	w=2;
	console.log(w);
	CheckIfDone();//after you click the city button it checks if the rest of the buttons have been clicked
}

function addColorS() {
	s.classList.remove("gray");
} 

function addColorB() {
	b.classList.remove("gray");
} 

function addColorF() {
	f.classList.remove("gray");
} 

function addColorC() {
	c.classList.remove("gray");
} 

function CheckIfDone () {
	if (x>1 && y>1 && z>1 && w>1) { //each varible is set to 2 when the specific button is clicked, so this is checking if all the buttons have been clicked
	m.src = "images/oregonall2.png";//if each varible is set to two then it changes the source of the main image
	m.classList.add("oregonone");
	done=2; //set done to 2 so that the next funtion will work
}
	console.log("hello"); 
}

function CheckIfDone2 () {
	if (done>1) {
	window.open("newpage.html"); //once the image changes, the website takes you to a new page 
}
	console.log("hi!!!")
}





