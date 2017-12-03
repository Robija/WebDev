import '../css/style.css';


var button = document.getElementById("main");

function sayHello() {
	console.log('Hello there');
}

button.addEventListener("click", sayHello);
