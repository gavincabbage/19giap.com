var assert = require('chai').assert;

var index;

describe('index', function() {

    before(function () {
        global.firebase = mockFirebase();
        index = require('./index.js');
    });

    it('must be defined', function() {
        assert.isDefined(index);
    });

});

function mockFirebase() {
    return {
        initializeApp: function() {}
    }
}
