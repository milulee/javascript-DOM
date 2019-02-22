var oinput = document.getElementsByTagName("input")[0];

// function getStyle (obj,attr) {
// 	// currentStyle  getComputedstyle
// }

function addEvent (obj,ev,fun) {
	// attachEvent   addEventListener
}

function stopEvent (ev) {
	// body... 
	var e = ev||window.event;
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}

function getResult () {
	// body... 
	function evalResult () {
		// body... 
	}
	try{

	}
	catch(e){

	}
}

function init () {
	// body... 
	var otable=document.getElementsByTagName("table")[0];

	addEvent(otable,"keydown",function (ev) {
		/* body... */
		stopEvent(ev);
		var e=ev||window.event;
		if(){

		}
	})

	addEvent(otable,"click",function (ev) {
		// body... 
		stopEvent(ev);
		var obtns=document.getElementsByTagName("button");
		var e=ev||window.event;
		var itar = e.target||e.srcElement;


	})
}