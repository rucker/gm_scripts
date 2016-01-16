// ==UserScript==
// @name        Mint Advice Hider
// @namespace   rucker@github
// @description This script will hide certain screen-hogging elements in the mint.com UI.
// @include     https://wwws.mint.com/overview.event
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @run-at      document-idle
// @version     3
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);
var nodes = ['.AdviceView', '.CreditScoreView']
$.each(nodes, function(index, value) {
  waitForKeyElements(value, function() {
    $(value).remove();
  });
});

