var counter = 1;
setInterval(() => {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > document.getElementsByClassName("slideImg").length){
        counter = 1;
    }
}, 5000);