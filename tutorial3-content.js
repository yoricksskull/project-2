// // Technique 3
// chrome.storage.sync.get( {fromStored: "", toStored: ""}, function(result) {
//   var html = document.querySelector('html');
//   var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
//   var node;
//   while (node = walker.nextNode()) {
//     var re = new RegExp(result.fromStored,"gi")
//     node.nodeValue = node.nodeValue.replace(re, result.toStored);
//   }
//
//   console.log("\n\n\n *** in here ....\n\n\n");
// });



// // MY PROJECT 2 CODE

// // WORD HIGHLIGHTING
var html = document.querySelector('html');
var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
var node;

while (node = walker.nextNode()) {

  if ( node.nodeValue.toLowerCase().includes("%") ) {
    newNodeValue = node.nodeValue.replace(/%/gi,"<span class='bff-clickable'>%</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
  }
}

// WORD HIGHLIGHTING PT 2
var html = document.querySelector('html');
var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
var node;

while (node = walker.nextNode()) {

  if ( node.nodeValue.toLowerCase().includes("recycled") ) {
    // console.log("in here 1 " + node.nodeValue);
    newNodeValue = node.nodeValue.replace(/recycled/gi,"<span class='bff2-clickable'>recycled</span>");
    newElement = document.createElement("template");
    newElement.innerHTML = newNodeValue;
    node.before(newElement.content);
    oldNode = node;
    node = walker.nextNode();
    oldNode.remove();
  }
}

// // POPUP TAB
var clickableWords = document.getElementsByClassName('bff-clickable');
for (var word of clickableWords) {
  word.addEventListener('click', function() {
    var popup = document.createElement("div");
    popup.style.width = "300px";
    popup.style.height = "400px";
    popup.style.border = "solid 3px #b3e800";
    popup.style.margin = "10px";
    popup.style.padding = "10px";
    popup.style.position = "absolute";
    popup.style.top = "50px";
    popup.style.left = "50px";
    popup.style.backgroundColor = "#fff";
    popup.style.zIndex = "9999";
    popup.textContent = "☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ Oo this is cute, what is it? OIL?? Yup. If you don't intuitively know what a material is from its name (ex.:'wool' or 'cotton'), it's probably a petroleum product. ex.: Acrylic=Oil, Polyester=Oil, Nylon=Oil, Spandex=Oil, Acetate=Oil, Viscose=Wood pulp--WAIT that's not oil! /// click to close window";

    // page[0].before(popup);
    document.body.insertAdjacentElement("afterbegin",popup);

    // CONSOLE MESSAGE
    console.log("in here 2a " + popup);

    // page[0].style.backgroundColor = "yellow";
    // word.innerHTML = "HELLO";
    // word.insertAdjacentHTML("afterend","<h1>HELLO2</h1>");
    // var newElement2 = document.createElement("template");
    // newElement2.innerHTML = "<h1>HELLO3</h1>";
    // node.before(newElement2.content);

    popup.addEventListener('click', function() {
      popup.remove();
    });
  });
}


// // POPUP TAB PT 2
var clickableWordsBFF = document.getElementsByClassName('bff2-clickable');
for (var word of clickableWordsBFF) {
  word.addEventListener('click', function() {
    var popupBFF = document.createElement("div");
    popupBFF.style.width = "300px";
    popupBFF.style.height = "400px";
    popupBFF.style.border = "solid 3px #ff9ba4";
    popupBFF.style.margin = "10px";
    popupBFF.style.padding = "10px";
    popupBFF.style.position = "absolute";
    popupBFF.style.top = "50px";
    popupBFF.style.left = "50px";
    popupBFF.style.backgroundColor = "#fff";
    popupBFF.style.zIndex = "9999";
    popupBFF.textContent = "☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ ☻ ZARA is rated by GoodOnYou as :( aka 'Not Good Enough' meaning it fails to meet G.O.Y standards for recycling, emissions, use of sustainable materials, ethical treatment of workers and animals, and transparency."
    document.body.insertAdjacentElement("afterbegin",popupBFF);

    // CONSOLE MESSAGE
    // console.log("in here 2a " + popup);

    popupBFF.addEventListener('click', function() {
      popupBFF.remove();
    });
  });
}
