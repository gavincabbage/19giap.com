module.exports = (function() {

    var Bind = require('./bind.js');

    var loginEmail = new Bind(document.getElementById('login-email'), '');
    var loginPassword = new Bind(document.getElementById('login-password'), '');

    var loginSubmitEl = document.getElementById('login-submit');
    loginSubmitEl.addEventListener('click', function() {
        console.log(loginEmail.data, ':', loginPassword.data);
        firebase.auth().signInWithEmailAndPassword(
                loginEmail.data, loginPassword.data)
                .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('error code: ', errorCode, ', error message: ', errorMessage);
        });
    }, false);

    var loginRegisterEl = document.getElementById('login-register');
    loginRegisterEl.addEventListener('click', function() {
        console.log(loginEmail.data, ':', loginPassword.data);
        firebase.auth().createUserWithEmailAndPassword(
                loginEmail.data, loginPassword.data)
                .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('error code: ', errorCode, ', error message: ', errorMessage);
        });
    }, false);

    return {};

})();
