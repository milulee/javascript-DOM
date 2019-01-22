function popUp(winURL) {
    window.open(winURL, "popup", "width=320,height=480");
};

//保证以下函数在文档加载完成后再执行，不然无法搜索到标签！！
//window.onload事件触发时，document对象已存在！！
window.onload = prepareLinks;
function prepareLinks() {
	if(!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function() {
                popUp(this.href);
                return false;
            }
        }
    }
}