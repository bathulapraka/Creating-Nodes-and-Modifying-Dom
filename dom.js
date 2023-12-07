// var itemlist =document.querySelector('#items');
// console.log(itemlist.parentNode);
// //itemlist.parentNode.style.background='#f4f4f4';

// itemlist.parentNode.parentNode.parentNode.style.backgroundColor='#f4f4f4';

//parentElement

// var parent=document.querySelector('#items');

// console.log(parent.parentElement);
// parent.parentNode.style.background='#f4f4f4';

//child element

var inheritism=document.querySelector('#items');

console.log(inheritism.childNodes);

//inheritism.firstChild[1].style.background='yellow';

//firstchild nodes

console.log(inheritism.firstChild);

//first element child node
console.log(inheritism.firstElementChild);
//lastelementchild
console.log(inheritism.lastElementChild);
//lastchild
console.log(inheritism.lastChild);

//nextsibling
console.log(inheritism.nextSibling);

//nextelementsibling
console.log(inheritism.nextElementSibling);

//previoussibling
console.log(inheritism.previousSibling);

//previouselementsibling
console.log(inheritism.previousElementSibling);

//createelement

//create a div and adding a createelement

var newdiv=document.createElement('div');

//adding
newdiv.className='hello';
//id
newdiv.id='hellomam';
//set attribute
newdiv.setAttribute('title','mainmethod');
//console.log(newdiv);

//createtesxtnode
var nextnode=document.createTextNode('MY NAME IS PRAKASH');

//append child
newdiv.appendChild(nextnode);

//console.log(newdiv);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newdiv);
//we can manipulate font sixe and changing  color also
newdiv.style.fontSize='30px';
newdiv.style.color='black';
container.insertBefore(newdiv,h1);






