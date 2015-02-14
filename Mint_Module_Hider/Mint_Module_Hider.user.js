// ==UserScript==
// @name        Mint
// @namespace   rucker@github
// @description Mint Module Hider
// @include     https://wwws.mint.com/*
// @version     1
// @grant       none

window.setTimeout(init, 5000);

function init() {
  var advice = '#module-advice ';
  var credit = '#module-credit-score ';
  var style = '{display:none !important;}';
  setStyle(advice + style);
  setStyle(credit + style); 
}

function setStyle(styleString) {
  var elem = document.getElementById('module-advice');
  if (!elem) {
    return;
  }
  var newStyle = document.createElement('style');
  newStyle.type = 'text/css';
  newStyle.innerHTML = styleString;
  elem.appendChild(newStyle);
}

// ==/UserScript==
