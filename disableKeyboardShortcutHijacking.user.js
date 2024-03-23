// ==UserScript==
// @name        Prevent keyboard shortcut hijacking
// @description Prevent websites to hijack keyboard shortcuts, for example <Ctrl+F> on Discourse
// @namespace   Tampermonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      rucker
// ==/UserScript==

// Adapted from https://gist.github.com/notDavid/527feab96bfc27ee5d1df93a82ca3584

(window.opera ? document.body : document).addEventListener('keydown', function(e) {
  var modifier_cmd = e.metaKey;
  var modifier_ctrl = e.ctrlKey;

  if (e.keyCode === 116) {
      e.stopImmediatePropagation(); // F5
      return;
  }

  if (!modifier_cmd && !modifier_ctrl) return;

  switch (e.keyCode) {
    case 188:// , - settings
    case 82: // r - reload
    case 70: // f - find (Discourse)
    case 75: // k - search
      e.stopImmediatePropagation();
      return;
  }

}, true);
