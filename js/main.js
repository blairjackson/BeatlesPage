var clicked = false;

function changeColor() {
    console.log("it clicked!!!!");

    if (clicked == false) {
        document.documentElement.style.setProperty('--background_color', "#000000");
        document.documentElement.style.setProperty('--text_color', "#ffffff");
        document.getElementById("beatles_heading").src = "images/beatles_title_black.png";
        clicked = true;
    } else {
        document.documentElement.style.setProperty('--background_color', "#ffffff" );
        document.documentElement.style.setProperty('--text_color', "#000000");
        document.getElementById("beatles_heading").src = "images/beatles_title.png";
        clicked = false;
    }
}

function hide_all(){
    lennon_clicked();
    mccartney_clicked();
    harrison_clicked();
    ringo_clicked();
}

function lennon_clicked(){
    document.getElementById("lennon_images").classList.toggle("hide-img_container");
}

function mccartney_clicked(){
    document.getElementById("mccartney_images").classList.toggle("hide-img_container");
}

function harrison_clicked(){
    document.getElementById("harrison_images").classList.toggle("hide-img_container");
}

function ringo_clicked(){
    document.getElementById("ringo_images").classList.toggle("hide-img_container");
}