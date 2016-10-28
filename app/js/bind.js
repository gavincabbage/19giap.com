module.exports = (function() {
    // http://stackoverflow.com/questions/16483560/how-to-implement-dom-data-binding-in-javascript

    var Bind = function(element, data) {
        this.data = data;
        this.element = element;
        element.value = data;
        element.addEventListener('change', this, false);
    };

    Bind.prototype.handleEvent = function(event) {
        switch (event.type) {
            case 'change': this.change(this.element.value);
        }
    };

    Bind.prototype.change = function(value) {
        this.data = value;
        this.element.value = value;
    };

    return Bind;
})();
