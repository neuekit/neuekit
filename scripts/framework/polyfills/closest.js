/*----------------------------------------------------------------------------*\
    #CLOSEST POLYFILL // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent

    Small polyfill to patch IE >= 9
\*----------------------------------------------------------------------------*/

(function () {

    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }

    if (!Element.prototype.closest) {
        Element.prototype.closest = function(s) {
            var el = this;
            var ancestor = this;
            if (!document.documentElement.contains(el)) return null;
            do {
                if (ancestor.matches(s)) return ancestor;
                ancestor = ancestor.parentElement;
            } while (ancestor !== null);
            return null;
        };
    }
})();


