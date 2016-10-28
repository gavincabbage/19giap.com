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

})();
