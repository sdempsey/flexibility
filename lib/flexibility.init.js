/*! flexibility v1.0.0 | GPL2 Licensed | github.com/10up/flexibility */

flexibility = {};

if (!Modernizr.flexbox) {
    document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'complete') {
            flexibility.process(document.body);
        }
    });
}
