// ==UserScript==
// @name        Mint Module Hider
// @namespace   rucker@github
// @description Mint Module Hider
// @include     https://wwws.mint.com/*
// @version     1
// @grant       none

window.setTimeout(init, 5000);

function init() {
  var advice = 'module-advice';
  var credit = 'module-credit-score';
  var style = '{display:none !important;}';
  setStyle(advice, '#' + advice + ' ' + style);
  setStyle(credit, '#' + credit + ' ' + style); 
}

function setStyle(selector, styleString) {
  var elem = document.getElementById(selector);
  if (!elem) {
    return;
  }
  var newStyle = document.createElement('style');
  newStyle.type = 'text/css';
  newStyle.innerHTML = styleString;
  elem.appendChild(newStyle);
}

// ==/UserScript==
