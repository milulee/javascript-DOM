function positionMessage(){
	var elem = document.getElementById("message");
	elem.style.position = 'absolute';
	elem.style.top = '200px';
	elem.style.left = '50px';
	moveElement("message",200,300,10);
}
addLoadEvent(positionMessage);