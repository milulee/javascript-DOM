var oinput=$tag("input")[0];
var ohist=$("history");


		//事件绑定函数
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
				var err = false;
				var result = eval(oinput.value);
				if(!err){
					ohist.innerHTML = ohist.innerHTML + oinput.value + '=' + result + '<br>';
				}
				return result;
			}
			try{
				var x=evalResult()
				return x;
			}
			catch(e){
				err = true;
				oinput.className="showError";
				setTimeout(function(){
					oinput.className='';
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
			}
		}
		//绑定点击事件
		function init () {
			var otable=$tag("table")[0];
			// var ohist=document.getElementById("history");

			addEvent(otable,"keydown",function(ev){
				enterResult(ev);
			})

			// var oinput=$tag("input")[0];
			// addEvent(input,"focus",function(ev){
			// 	ohist.innerHTML+=oinput.innerHTML;
			// })

			addEvent(otable,"click",function(ev){
				stopEvent(ev);
				var e=ev||window.event;
				var itat=e.target||e.srcElement;
				var obtns=$tag("button");
				if(itat.nodeName.toLowerCase()=='button'){
					for(var i=0;i<obtns.length;i++){
						obtns[i].style.borderColor  = '#000';
					}
					itat.style.borderColor  = 'white';
					if(itat.className!='setChange'){
						if(oinput.value=='0'){
							oinput.value='';
							oinput.value+=itat.innerHTML;

						}
						else {
							oinput.value+=itat.innerHTML;
						}
					}
					else{
						if(itat.id=='backSpace'){
							oinput.value=oinput.value.toString().slice(0,-1);

						}
						else if(itat.id=="clearNum"){
							oinput.value='0';

						}
						else{
							var result=getResult();
							oinput.value=result;

						}
					}
				}
			});

		}
		function $(id) {
			/* body... */
			return document.getElementById(id);
		}
		function $tag (tag) {
			// body... 
			return document.getElementsByTagName(tag);
		}
window.onload=init;