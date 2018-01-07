const Velocity = require('velocity-animate');

exports.shuffle = function(element, index, left, top, callback) {
    // randomly choose a direction
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    Velocity(element, {
        left: plusOrMinus * 80
    }, {
        duration: 200,
        delay: index * 5
    });
    Velocity(element, {
        left: left
    }, {
        duration: 200,
        delay: (index * 5) + 200
    });

    // second shuffle animation
    Velocity(element, {
        top: -75
    }, {
        duration: 100,
        delay: (index * 5) + 400
    });
    Velocity(element, {
        top: top
    }, {
        duration: 100,
        delay: (index * 5) + 600,
        complete: function() {
            callback();
        }
    });
};