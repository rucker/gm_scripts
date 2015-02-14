// ==UserScript==
// @name        Mint
// @namespace   rucker@github
// @description Mint Module Hider
// @include     https://wwws.mint.com/*
// @version     1
// @grant       none

window.setTimeout(init, 5000);

function init() {
console.log('starting!');
  var advice = '#module-advice ';
  var credit = '#module-credit-score ';
  var style = '{display:none !important;}';
  setStyle(advice + style);
  setStyle(credit + style); 
}

function setStyle(styleString) {
  console.log('setting style!');
  var elem = document.getElementById('module-advice');
  console.log('looking for elem!');
  if (!elem) {
    console.log('did not find it!');
    return;
  }
  console.log('found it!');
  var newStyle = document.createElement('style');
  newStyle.type = 'text/css';
  newStyle.innerHTML = styleString;
  elem.appendChild(newStyle);
}

// ==/UserScript==
