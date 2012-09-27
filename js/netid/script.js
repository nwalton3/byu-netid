// @codekit-prepend "jquery-1.4.min.js"
// Xcodekit-prepend "jquery-ui.min.js"
// Xcodekit-prepend "jquery.tablesorter.js"

// @codekit-prepend "validate.js"
// @codekit-prepend "help-popups.js"
// @codekit-prepend "netid.helptext.js"

// Add a function called center to jQuery
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()).toString() + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()).toString() + "px");
    //z-index must be greater than the z-index of a dialog box. 1000 isn't enough.
    this.css("z-index", "10000");
    return this;
}

jQuery('#loadingDiv')
    .hide()  // hide it initially
    .ajaxStart(function() {
        // use the center function defined above to set the css top and left
        $(this).show().center();
    })
    .ajaxStop(function() {
        $(this).hide();
    });