// document.getElementsByClassName("logo")[0].children[0].className = "fa fa-home"
// document.getElementsByClassName("logo")[0].children[0].className = "fa fa-bug"
// document.getElementsByClassName("logo")[0].children[0].className = "fa fa-file-text"
// document.getElementsByClassName("logo")[0].children[0].className = "fa fa-puzzle-piece"

(function () {
    const navLinks = document.getElementsByClassName("nav")[0].getElementsByTagName("a");
    const pageIcon = document.getElementsByClassName("nav")[0].getElementsByClassName("active")[0].getAttribute("data-icon");
    const icon = document.getElementsByClassName("logo")[0].children[0];

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("mouseenter", function() {
            const thisIcon = navLinks[i].getAttribute("data-icon");
            icon.className = thisIcon;
        })
        
        navLinks[i].addEventListener("mouseleave", function() {
            icon.className = pageIcon;
        })
    }
})()