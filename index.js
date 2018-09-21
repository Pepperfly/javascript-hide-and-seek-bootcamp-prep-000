function getFirstSelector(selector) {
  return document.querySelector(selector);
}
<<<<<<< HEAD
=======



function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target');
}



function increaseRankBy(n) {
  var rankedLis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rankedLis.length; i++) {
    rankedLis[i].innerHTML = (parseInt(rankedLis[i].innerHTML) + 1).toString();
  }
}



function deepestChild() {
  // get to the node div#grand-node
  var grandNode = document.getElementById('grand-node');
  // we know all are divs at each level, so query 'em all and determine how many were counted
  var deepDiv = grandNode.querySelectorAll('div').length;
  return deepDiv;
  
}


>>>>>>> 80f4c9549a6820b421823dffec045e8eb4e966bd



// nestedTarget()...
function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

/*Learn.io solution...
function nestedTarget() {
  return document.querySelector('#nested .target');
}
*///



function increaseRankBy(n) {
  var rankedLis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rankedLis.length; i++) {
    rankedLis[i].innerHTML = (parseInt(rankedLis[i].innerHTML) + n).toString();
  }
}



function deepestChild() {
  var node = document.getElementById('grand-node');
  node = node.querySelectorAll('*');
  return node[node.length - 1];
}
