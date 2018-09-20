function getFirstSelector(selector) {
  return document.querySelector(selector);
}



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
