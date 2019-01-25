function prepareSlideshow(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("preview")) return false;

	var preview = document.getElementById("preview");


	var list = document.getElementById("linklist");
	var links = list.getElementsByTagName("a");
	//快速变化
	// links[0].onmouseover = function(){
	// 	setTimeout("changePic('preview',-100)", 50);
	// }
	// links[1].onmouseover = function(){
	// 	setTimeout("changePic('preview',-200)", 50);
	// }
	// links[2].onmouseover = function(){
	// 	setTimeout("changePic('preview',-300)", 50);
	// }
	
	//慢速变化
	links[0].onmouseover = function(){
		moveElement("preview",-100,0,10);
	}
	links[1].onmouseover = function(){
		moveElement("preview",-200,0,10);
	}
	links[2].onmouseover = function(){
		moveElement("preview",-300,0,10);
	}
}
addLoadEvent(prepareSlideshow);