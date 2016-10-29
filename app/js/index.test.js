var assert = require('chai').assert;
var mocks = require('./mocks.js');

var index;

describe('index', function() {

    before(function () {
        global.firebase = mocks.mockFirebase();
        global.document = mocks.mockDocument();
        /* index = require('./index.js'); */
    });

    it('must be defined', function() {
        /* assert.isDefined(index); */
    });

});
