var assert = require('chai').assert;
var mocks = require('./mocks.js');

var Bind;

describe('bind', function() {

    before(function () {
        Bind = require('./bind.js');
    });

    it('must be defined', function() {
        assert.isDefined(Bind);
    });

    describe('bind.change', function() {

        it('must both data and element value', function() {
            var element = mocks.mockElement();
            var data = 'original';
            var bind = new Bind(element, data);
            bind.change('new');
            assert.equal(bind.data, 'new');
            assert.equal(bind.element.value, 'new');
        });

    });

});
