function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source)
    var discription = document.getElementById('discription');
    var text = whichpic.getAttribute("title");
    discription.firstChild.nodeValue = text;
}