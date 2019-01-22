// window.onload = function(){
// 	prepareGallery();
// }

//一个更好的共享onload事件的函数如下：
function addLoadEvent(func) {
    var oldOnload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldOnload();
            func();
        }
    }
}


function preparePlaceholder(){
    var placeholder = document.createElement("img");
    document.body.appendChild(placeholder);
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.jpg");
    var discription = document.createElement("p");
    discription.setAttribute("id", "discription");
    var txt = document.createTextNode("Choose a picture");
    discription.appendChild(txt);
}


function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source)
    if (document.getElementById("discription")) {
        var discription = document.getElementById('discription');
        var text = whichpic.getAttribute("title");
        discription.firstChild.nodeValue = text;
    }
    return true;
}


function prepareGallery() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            showPic(this);
            return false;
        }
    }
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);



