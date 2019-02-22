var oinput=document.getElementsByTagName("input")[0];

		//下面这个函数，能够获取一个元素的任意 CSS 属性值。
		function getStyle(obj,attr) {
			if(obj.currentStyle){
				return obj.currentStyle[attr];//ie
			}
			else{
				return getComputedStyle(obj, false)[attr];
			}
		}
	
		//渐变动画
		function move (obj,attr,tar) {
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var cur=parseInt(getStyle(obj,attr));
				var itarget=parseInt(tar);
				var speed = (itarget-cur)/6;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				obj.style[attr]=parseInt(getStyle(obj,attr))+speed+'px';
				if(speed==0){
					clearInterval(obj.timer);
				}
			},30);
		}

		//事件绑定函数
		// function addEvent (obj,ev,fun) {
		// 	if(obj.attachEvent){
		// 		obj.attachEvent("on"+ev,fun);
		// 	}
		// 	else {
		// 		obj.addEventListener(ev, fun, false);	
		// 	}
		// }

		function addEvent(obj,ev,fun){
			if(obj.attachEvent){
				obj.attachEvent('on'+ev,fun);
			}else{
				obj.addEventListener(ev,fun,false);
			}
		}
		//阻止默认行为
		function stopEvent (ev) {
			var e=ev||window.event;
			if(e.preventDefault){
				e.preventDefault();
			}
			else {
				e.returnValue=false;//ie
			}
		}

		//计算最终结果
		function getResult () {
			// body... 
			function evalResult () {
				// body... 
				err = false;
				var result = eval(oinput.value);
				return result;
			}
			try{
				var x=evalResult()
				return x;
			}
			catch(e){
				err = true;
				oinput.className="showError";
				var errorHint = document.getElementById("errorHint");
				move(errorHint,"top",0);
				setTimeout(function(){
					oinput.className='';
					move(errorHint,"top",-282);
				},2000);
				return oinput.value;
			}
		}

		//文本框获取焦点，错误提示消失
		//按下回车得到结果
		function enterResult(ev){
			var e=ev||window.event;
			if(e.keyCode==13){
				stopEvent(ev);//阻止enter键的默认行为
				var result=getResult();
				oinput.value=result;
				var ohist=document.getElementById("history");
				ohist.innerHTML=ohist.innerHTML+"="+result+'<br/>';
				ohist.innerHTML+=result;

			}
		}
		//绑定点击事件
		function init () {
			var otable=document.getElementsByTagName("table")[0];
			// var ohist=document.getElementById("history");

			addEvent(otable,"keydown",function(ev){
				enterResult(ev);
			})

			// var oinput=document.getElementsByTagName("input")[0];
			// addEvent(input,"focus",function(ev){
			// 	ohist.innerHTML+=oinput.innerHTML;
			// })

			addEvent(otable,"click",function(ev){
				stopEvent(ev);
				var e=ev||window.event;
				var itat=e.target||e.srcElement;
				var obtns=document.getElementsByTagName("button");
				var ohist=document.getElementById("history");
				if(itat.nodeName.toLowerCase()=='button'){
					for(var i=0;i<obtns.length;i++){
						obtns[i].style.borderColor  = '#000';
					}
					itat.style.borderColor  = 'white';
					if(itat.className!='setChange'){
						if(oinput.value=='0'){
							oinput.value='';
							oinput.value+=itat.innerHTML;
							ohist.innerHTML+=itat.innerHTML;

						}
						else {
							oinput.value+=itat.innerHTML;
							ohist.innerHTML+=itat.innerHTML;
						}
					}
					else{
						if(itat.id=='backSpace'){
							oinput.value=oinput.value.toString().slice(0,-1);
							ohist.innerHTML=ohist.innerHTML.toString().slice(0,-1);
						}
						else if(itat.id=="clearNum"){
							oinput.value='0';
							ohist.innerHTML+='clearNum<br/>';
						}
						else{
							var result=getResult();
							oinput.value=result;
							if(!err){
								ohist.innerHTML=ohist.innerHTML+'='+result+'<br/>';
								ohist.innerHTML+=result;
							}
						}
					}
				}
			});

		}
window.onload=init;