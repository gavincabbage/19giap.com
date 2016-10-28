var assert = require('chai').assert;
var mocks = require('./mocks.js');

var login;

describe('login', function() {

    before(function () {
        login = require('./login.js');
    });

    it('must be defined', function() {
        assert.isDefined(login);
    });

});
