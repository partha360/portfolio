let iphone = new Waypoint({
    element: document.getElementById("imgs")
    , handler: function (direction) {
        document.getElementById("imgs").classList.add('animated');
        document.getElementById("imgs").classList.add('slideInUp');
        this.destroy();
    }
    , offset: 130
})

let iphoneBtn = new Waypoint({
    element: document.getElementById("iphone-btn")
    , handler: function () {
        setTimeout(function () {
            const animateiPhoneBtnDown = setInterval(function () {
                var iPhoneBtn = document.getElementById('iphone-btn');
                var currentBottom = parseInt(window.getComputedStyle(iPhoneBtn, null).getPropertyValue('bottom'));
                document.getElementById('iphone-btn').style.bottom = (currentBottom - 2) + 'px';
            }, 200)
            setTimeout(() => {
                clearInterval(animateiPhoneBtnDown);
            }, 201)
        }, 1500)
        setTimeout(function () {
            const animateiPhoneBtnUp = setInterval(function () {
                var iPhoneBtn = document.getElementById('iphone-btn');
                var currentTop = parseInt(window.getComputedStyle(iPhoneBtn, null).getPropertyValue('top'));
                document.getElementById('iphone-btn').style.top = (currentTop - 2) + 'px';
            }, 400)
            setTimeout(() => {
                clearInterval(animateiPhoneBtnUp);
            }, 401)
        }, 1500)
        setTimeout(function () {
            document.getElementById("iphone-on").classList.remove('off');
            document.getElementById("iphone-on").classList.add('animated');
            document.getElementById("iphone-on").classList.add('fadeIn');
        }, 2000)
        this.destroy();
    }
    , offset: 130
})

let experiance = new Waypoint({
    element: document.getElementById("experiance")
    , handler: function (direction) {
        document.getElementById("experiance").classList.add('animated');
        document.getElementById("experiance").classList.add('bounceInLeft');
    }
    , offset: 280
})

let portfolio = new Waypoint({
    element: document.getElementById("portfolio")
    , handler: function (direction) {
        document.getElementById("portfolio").classList.add('animated');
        document.getElementById("portfolio").classList.add('fadeIn');
        document.getElementById("technology").classList.add('animated');
        document.getElementById("technology").classList.add('slideInRight');
    }
    , offset: 250
})