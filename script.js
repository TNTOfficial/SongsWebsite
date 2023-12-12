AOS.init();

// 

window.onscroll = function () { scroll() }
function scroll() {
    var nav = document.getElementById("nav_add");

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        nav.classList.add("nav_change")
    } else {
        nav.classList.remove('nav_change')
    }
}

// 

function down() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
