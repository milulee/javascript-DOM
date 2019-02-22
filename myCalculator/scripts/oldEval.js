var oinput = document.getElementsByTagName("input")[0];

function getStyle (obj,attr) {
	// body... 
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return obj.getComputedStyle(obj,false)[attr];
	}
}

// function move (obj,attr,tar) {
// 	// body... 
// 	clearInterval(obj.timer)
// 	obj.timer = setInterval(function(){


// 	})
// }

//使用attachEvent和addEventListener时则可以实现多个事件处理函数的调用
//1.attachEvent是IE有的方法，它不遵循W3C标准，而其他的主流浏览器如FF等遵循W3C标准的浏览器都使用addEventListener，所以实际开发中需分开处理。
//2.多次绑定后执行的顺序是不一样的，attachEvent是后绑定先执行，addEventListener是先绑定先执行。
function addEvent (obj,ev,fun) {
	if(obj.attachEvent){
		obj.attachEvent("on"+ev, fun);
	}
	else{
		obj.addEventListener(ev, fun,false);
	}
}
function stopEvent (ev) {
	// body... 
	var e = ev||window.event;
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue=false; //IE
	}
}
function getResult () {
	function evalResult () {
		// body... 
		var result = eval(oinput.value);
		return result;
	}
	try{
		var x = evalResult();
		return x;
	}
	catch(e){
		oinput.className = "showError";
		setTimeout(function(){
			oinput.className = "";
		},2000);
		return oinput.value;
	}
}

function init () {
	// body... 
	var otable = document.getElementsByTagName("table")[0];

	addEvent(otable,"keydown",function(ev){

		var e = ev||window.event;
		if(e.keyCode==13){
			stopEvent(ev);
			var result = getResult();
			oinput.value = result;
		}
	});

	addEvent(otable,"click",function(ev){

		stopEvent(ev);
		var e = ev||window.event;
		//event.target 可返回事件的目标节点（触发该事件的节点）
		//使用obj(obj = event.srcElement ? event.srcElement : event.target;)来代替IE下的event.srcElement或者Firefox下的event.target.
		var itar = e.target||e.srcElement;
		var obtns = document.getElementsByTagName("button");
		if(itar.nodeName.toLowerCase()=="button"){
			for(var i=0;i<obtns.length;i++){
				obtns[i].style.borderColor = "#000";
			}
			itar.style.borderColor = '#fff';
			if(itar.className!="setChange"){
				if(oinput.value==0){
					oinput.value='';
					oinput.value+=itar.innerHTML;
				}else{
					oinput.value+=itar.innerHTML;
				}				
			}else{
				if(itar.id=="backSpace"){
					oinput.value = oinput.value.toString().slice(0, -1);
				}
				if(itar.id=="clearNum"){
					oinput.value="0";
				}
				else{
					var result=getResult();
					oinput.value = result;
				}
			}
		}

	});
}
window.onload=init;