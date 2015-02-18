// ==UserScript==
// @name        Mint Module Hider
// @namespace   rucker@github
// @description Mint Module Hider
// @include     https://wwws.mint.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @version     2
// @grant       none
this.$ = this.jQuery = jQuery.noConflict(true);
waitForKeyElements('#module-advice', setStyle);
waitForKeyElements('#module-credit-score', setStyle);
function setStyle(jNode) {
  if (!jNode) {
    return;
  }
  jNode.css('display', 'none');
}
// ==/UserScript==
