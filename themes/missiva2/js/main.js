(function () {
    const navLinks = document.getElementsByClassName("nav")[0].getElementsByTagName("a");
    let pageIcon = navLinks[0].getAttribute("data-icon");
    const icon = document.getElementsByClassName("logo")[0].children[0];

    document.querySelectorAll(".nav > a").forEach(function (page) {
        const path = window.location.pathname.split('/');
        const link = page.href.split('/').at(-1);
        if (path.indexOf(link) > 0) {
            pageIcon = page.getAttribute("data-icon");
        }
    });

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
