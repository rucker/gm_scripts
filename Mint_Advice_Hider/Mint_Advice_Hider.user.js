// ==UserScript==
// @name        Mint Advice Hider
// @namespace   rucker@github
// @description This script will hide certain screen-hogging elements in the mint.com UI.
// @include     https://mint.intuit.com/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @run-at      document-idle
// @grant	none
// @updateURL	https://raw.githubusercontent.com/rucker/gm_scripts/master/Mint_Advice_Hider/Mint_Advice_Hider.user.js
// @version     3.3.0
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);
var nodes = ['.adviceWidget', '.creditScoreWidget', '.HypothesisTestingView', '#TxnOfferWidgetContainer', '#advice-top-container'];
$.each(nodes, function(index, value) {
  waitForKeyElements(value, function() {
    $(value).remove();
  });
});

