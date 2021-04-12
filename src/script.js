// Initate AOS (text animation library)
AOS.init();

// Responsive navbar
if(document.querySelector(".navbar") !== null){
    const navbar = document.querySelector(".navbar");
    window.onscroll = function(e) {
        if (this.scrollY < 45){
            switchNavBar();
        }
        else {
            navbar.classList.remove("topNavBar");
            // "false" for down and "true" for up
            if (this.oldScroll > this.scrollY){
                navbar.classList.remove("formHidden");
            }
            else{
                navbar.classList.add("formHidden");
            }
        }
    this.oldScroll = this.scrollY;
    }
}
// remove transparency when toggle is opened
function switchNavBar(){
    if (this.scrollY < 45){
        if (document.querySelector(".navbar-toggler").getAttribute("aria-expanded") === "true" || false){
            document.querySelector(".navbar").classList.remove("topNavBar");
        }
        else{
            document.querySelector(".navbar").classList.add("topNavBar");
        }
    }
}