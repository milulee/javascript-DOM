// function moveMessage(){
// 	var elem = document.getElementById("message");
// 	// elem.style.left = '200px';
// 	var xpos = parseInt(elem.style.left);
// 	var ypos = parseInt(elem.style.top);
// 	if(xpos==200 && ypos==300){
// 		return true;
// 	}
// 	if(xpos<200){
// 		xpos++;
// 	}
// 	if(xpos>200){
// 		xpos--;
// 	}	
// 	if(ypos<300){
// 		ypos++;
// 	}
// 	if(ypos>300){
// 		ypos--;
// 	}
// 	elem.style.left = xpos + 'px';
// 	elem.style.top =  ypos + 'px';
// 	movement = setTimeout("moveMessage()", 10);
// }
// function positionMessage(){
// 	var elem = document.getElementById("message");
// 	elem.style.position = 'absolute';
// 	elem.style.top = '200px';
// 	elem.style.left = '50px';
// 	// movement = setTimeout("moveMessage()", 2000);
// }
// 
// addLoadEvent(positionMessage);
// addLoadEvent(moveMessage);


function moveElement(elementId,final_x,final_y,interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elementId)) return false;

	var elem = document.getElementById(elementId);

	if(elem.movement){
		clearTimeout(elem.movement);
	}
	if(!elem.style.left){
		elem.style.left = '0px';
	}
	if(!elem.style.top){
		elem.style.top = '0px';
	}

	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	dist = 0;
	if(xpos==final_x && ypos==final_y){
		return true;
	}
	if(xpos<final_x){
		dist = Math.ceil((final_x - xpos)/10);
		xpos = xpos + dist;
	}
	if(xpos>final_x){
		dist = Math.ceil((xpos - final_x)/10);
		xpos = xpos - dist;
	}	
	if(ypos<final_y){
		dist = Math.ceil((final_y - ypos)/10);
		ypos = ypos + dist;
	}
	if(ypos>final_y){
		dist = Math.ceil((ypos - final_y)/10);
		ypos = ypos - dist;
	}
	elem.style.left = xpos + 'px';
	elem.style.top =  ypos + 'px';
	var repeat = "moveElement('"+elementId+"',"+final_x+","+final_y+","+interval+")";
	elem.movement = setTimeout(repeat, interval);

}




