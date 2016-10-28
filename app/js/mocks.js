module.exports = (function() {

    var _mockFirebase = function() {
        return {
            initializeApp: function() {}
        };
    };

    var _mockElement = function() {
        return {
            addEventListener: function() {}
        };
    };

    var _mockDocument = function() {
        return {
            getElementById: function() {
                return _mockElement();
            }
        };
    };

    return {
        mockFirebase: _mockFirebase,
        mockElement: _mockElement,
        mockDocument: _mockDocument
    };
})();
