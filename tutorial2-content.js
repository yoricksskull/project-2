// Tutorial 2, content.js

// Technique 1
// var elements = document.getElementsByTagName('*');
// for (e of document.getElementsByTagName('*')) {
//     var c = "rgb(" + Math.floor(Math.random()*255)
// 	+ "," + Math.floor(Math.random()*255)
// 	+ "," + Math.floor(Math.random()*255) + ")"
//
//     // For testing:
//     //console.log(e);
//     e.style.setProperty('background-color',c);
// }

// Technique 2
// var html = document.querySelector('html');
// var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
// var node;
// while (node = walker.nextNode()) {
//     node.nodeValue = node.nodeValue.replace(/environmental impact/gi, "<span style=‘background-color: red;’>environmental impact</span>");
//     // node.nodeValue = node.nodeValue.replace(/gi, 'questionable');
// }
