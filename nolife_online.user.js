// ==UserScript==
// @name          Nolife Online - Cacher certaines section
// @namespace     cladmi.eu
// @description   Cache le menu des suggestions
// @include       *://online.nolife-tv.com/*
// @grant         none
// ==/UserScript==

// <div id="content_suggestions"
//     <div id="content_slider"
//     <div id="suggestions"

function removeElementID(rmId) {
    var rm = document.getElementById(rmId);
    if (rm != null) {
        rm.parentNode.removeChild(rm);
    }
}

function nolife_page_customization(e) {
    removeElementID('content_slider');
    removeElementID('suggestions');
}


window.addEventListener('load', nolife_page_customization());


