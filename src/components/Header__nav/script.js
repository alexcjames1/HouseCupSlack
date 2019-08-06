var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}


//CODE FOR THE HAMBURGER MENU

(function() {

    // when a click is made, close menus
    window.addEventListener('click', function(e) {
        menu.closeMenu(e);
    });


    // menu
    var menu = {
        nav: document.querySelector('.nav'),
        navTrigger: document.querySelector('.nav__trigger'),
        navList: document.querySelector('.nav__menuList'),

        doToggle: function(e) {
            e.preventDefault();
            e.stopPropagation();

            this.nav.classList.toggle('nav--expanded');
        },
        closeMenu: function(e) {
            this.nav.classList.remove('nav--expanded');
        }
    };

    // when menu trigger is clicked, toggle its state
    menu.navTrigger.addEventListener('click', function(e) {
        menu.doToggle(e); });

    // when clicking inside of menuList, dont close the menu
    menu.navList.addEventListener('click', function(e) {
        e.stopPropagation();
    });


    var navigationMain = document.querySelector('.navigation--main');
    window.addEventListener("resize", function(e) {
        if (window.outerWidth > 768) {
            navigationMain.classList.remove('nav--expanded');
        }
    });

}());



var headerSticky = function() {

    //CHANGES THE BACKGROUND COLOR OF THE HEADER

    var nav = document.querySelector('.header--transparent');

    window.addEventListener('scroll', () => {
        var navPosition = offset(nav);

        if (navPosition.top > 50) {
            nav.classList.add('is-sticky');
        } else {
            nav.classList.remove('is-sticky');
        }
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
   headerSticky();
});
