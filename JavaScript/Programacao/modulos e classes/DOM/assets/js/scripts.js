const modeButton = document.getElementById('mode-selector');
const h1bod = document.getElementById('page-title');
const myBody = document.getElementsByTagName('body')[0];
const myFooter = document.getElementsByTagName('footer')[0];

modeButton.addEventListener('click', changeMode);

function changeMode(){
	changeClass();
	changeText();
}

function changeClass(){
	modeButton.classList.toggle("dark-mode");
	h1bod.classList.toggle("dark-mode");
	myBody.classList.toggle("dark-mode");
	myFooter.classList.toggle("dark-mode");
}

function changeText(){
	if(modeButton.classList.contains("dark-mode")){
		modeButton.innerHTML = "Light Mode";
		h1bod.innerHTML = "Dark Mode ON";
		return;
	}

	modeButton.innerHTML = "Dark Mode";
	h1bod.innerHTML = "Light Mode ON";
}