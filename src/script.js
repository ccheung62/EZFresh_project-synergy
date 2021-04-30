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
    console.log("trying to change the plus/minus icon here");
    console.log("iconElement is", iconElement);
    const icon = iconElement.querySelector('i');
    console.log("icon is ", icon);
    if (iconElement.querySelector(".fa-plus-square") != null){
        console.log("the icon is currently plus so I am trying to change it to minus here");
        icon.classList.remove("fa-plus-square");
        icon.classList.add("fa-minus-square");
    }
    else {
        console.log("the icon is currently minus so I am trying to change it to plus here");
        icon.classList.remove("fa-minus-square");
        icon.classList.add("fa-plus-square");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    swipeHighlight = document.querySelectorAll(".swipeAnimeStart");
    if (swipeHighlight != null){
        swipeHighlight.forEach(highlight => {
            setTimeout(() => { highlight.classList.add("siteLoaded"); }, 1000);
        });
    }
});

document.addEventListener("aos:in:swipeAnime", ({ detail }) => {
    let highlight = detail.querySelector(".highlight");
    highlight.classList.remove("siteLoaded");
    setTimeout(() => { highlight.classList.add("siteLoaded"); }, 500);
});