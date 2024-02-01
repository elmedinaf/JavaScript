document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("paragraph").innerText = "Text added when page loaded";

});

function changeImage(imageNumber) {
    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "none";

    document.getElementById("image" + imageNumber).style.display = "block";
    
}

function changeTextInline() {
    document.getElementById("paragraph").innerText = "Text inline changed.";
}

function changeTextColor() {
    var paragraph = document.getElementById("paragraph");
    paragraph.style.color = "red";
}

function changeImageWidth() {
    document.getElementById('image1').style.width = '65%';
    document.getElementById('image2').style.width = '65%';
    document.getElementById('image3').style.width = '65%';
}
