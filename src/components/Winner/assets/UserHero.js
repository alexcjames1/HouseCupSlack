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



// check truck position

var truck = {
    el: document.querySelector('.brand-scenery__truckPath--truck'),
    isDriving: 1,
    passedOrange: 0,
    passedPurple: 1
}


var orangeHouseEl = document.querySelector('.brand-scenery__object--house-orange');
var orangeHouse = offset(orangeHouseEl);

var purpleHouseEl = document.querySelector('.brand-scenery__object--house-purple');

var purpleHouse = offset(purpleHouseEl);

var checkIfTruckDriving = function() {
    delay(function() {
        truck.isDriving = 0;
    }, 5000);
};


checkIfTruckDriving();

//Timed animation
setInterval(function() {
    if (truck.isDriving) {
        truck.position = offset(truck.el);
        if (truck.position.left > orangeHouse.left) {
           // set state to plowed
            truck.passedOrange = 1;
            orangeHouseEl.classList.add('brand-scenery__object__sidewalk--plowed');
            console.log("It passed the orange house");
        }
        if (truck.position.left > purpleHouse.left) {
            truck.passedPurple = 1;
            purpleHouseEl.classList.add('brand-scenery__object__driveway--plowed');
            console.log("It passed the purple house");
        }
    }
}, 100);
