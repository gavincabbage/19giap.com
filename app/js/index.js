(function() {

    var firebaseConfig = {
        apiKey: "AIzaSyBvWg_JPft53Qn_-FaSpim-P9tNnjzJeus",
        authDomain: "giap-80ec2.firebaseapp.com",
        databaseURL: "https://giap-80ec2.firebaseio.com",
        storageBucket: "giap-80ec2.appspot.com",
        messagingSenderId: "873686227264"
    };
    firebase.initializeApp(firebaseConfig);

    require('./login.js');
    var util = require('./util.js');

    Path.map('/other').to(function() {
        console.log('other path');
        goOther();
    });

    Path.map('/').to(function() {
        console.log('home path');
        goHome();
    });



    function goHome() {
        console.log('home');
        util.addClass(document.getElementById('home'), 'page-visible');
        util.addClass(document.getElementById('other'), 'page-hidden');
        util.removeClass(document.getElementById('home'), 'page-hidden');
        util.removeClass(document.getElementById('other'), 'page-visible');
    }

    function goOther() {
        console.log('other');
        util.addClass(document.getElementById('home'), 'page-hidden');
        util.addClass(document.getElementById('other'), 'page-visible');
        util.removeClass(document.getElementById('home'), 'page-visible');
        util.removeClass(document.getElementById('other'), 'page-hidden');
    }

    Path.history.listen(true);

    document.getElementById('go-home').addEventListener('click', function() {
        console.log('click home');
        Path.history.pushState({}, '', '/');
    });
    document.getElementById('go-other').addEventListener('click', function() {
        console.log('click other');
        Path.history.pushState({}, '', '/other');
    });


})();
