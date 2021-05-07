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
//switch plus to minus when expanded (faq)
function switchPlus(iconElement){
    const icon = iconElement.querySelector('i');
    if (iconElement.querySelector(".fa-plus-square") != null){
        icon.classList.remove("fa-plus-square");
        icon.classList.add("fa-minus-square");
    }
    else {
        icon.classList.remove("fa-minus-square");
        icon.classList.add("fa-plus-square");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // animation on the highlight at the beginning
    swipeHighlight = document.querySelectorAll(".swipeAnimeStart");
    if (swipeHighlight != null){
        swipeHighlight.forEach(highlight => {
            setTimeout(() => { highlight.classList.add("siteLoaded"); }, 1000);
        });
    }
});

// animation on the highlight as you scroll
document.addEventListener("aos:in:swipeAnime", ({ detail }) => {
    let highlight = detail.querySelector(".highlight");
    highlight.classList.remove("siteLoaded");
    setTimeout(() => { highlight.classList.add("siteLoaded"); }, 500);
});