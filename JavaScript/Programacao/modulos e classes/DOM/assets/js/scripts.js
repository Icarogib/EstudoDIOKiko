const modeButton = document.getElementById('mode-selector');
const h1bod = document.getElementById('page-title');
const myBody = document.getElementsByTagName('body')[0];
const myFooter = document.getElementsByTagName('footer')[0];

modeButton.addEventListener('click', changeMode);

function changeMode(){
	changeClasses();
}