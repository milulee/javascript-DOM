addLoadEvent(displayAbbr);
function displayAbbr(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	//取得所有略缩词
	var abbrs = document.getElementsByTagName("abbr");
	if(abbrs.length<1) return false;
	var defs = [];

	//创建【略缩语：全称】列表
	for(var i=0;i<abbrs.length;i++){		
		// var dtitle = document.createElement("dt");
		// dtitle.innerHTML = abbrs[i].innerHTML;
		// var ddesc = document.createElement("dd");
		// ddesc.innerHTML = abbrs[i].title;
		// dlist.appendChild(dtitle);
		// dlist.appendChild(ddesc);

		var current_abbr = abbrs[i];
		var definition = current_abbr.title;
		var key = current_abbr.innerHTML;
		defs[key] = definition;
	}
	//将列表添加至dlist中，并添加到html里面。
	//创建定义列表
	var dlist = document.createElement("dl");
	for(key in defs){
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(defs[key]);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreciations");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}
function displayCitation(){
	var blockquotes = document.getElementsByTagName("blockquote");
	if(blockquotes.length<1) return false;

	for(var i = 0;i < blockquotes.length;i++){
		var url = blockquotes[i].cite;

		var link = do
		blockquotes[i].appendChild(citations);
	}
}