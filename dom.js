// EXAMINE THE DOCUMENT OBJECT MODEL

// console.dir(document);
// console.log(document.title);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.doctype);
// document.title = "this is not first page";
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.all);
// console.log(document.images);

// document.all[9].textContent = "item list is 89";
// document.all[16].textContent = "Items";


// GET ELELMENT BY ID //
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// console.log(headerTitle);
// console.log(header);
// headerTitle.textContent= "hello world";
// headerTitle.innerText = "another hello world";
// headerTitle.innerHTML = '<h2>hello items lister</h2>';
// header.style.borderBottom = "solid 6px #000";
// headerTitle.style.borderBottom = "solid 2px white";

// GET ELEMENT BY CLASS NAME//
 
// var items = document.getElementsByClassName("list-group-item");
// // console.log(items);
// // items[1].textContent = "List Number-2";
// // items[1].style.fontWeight = "bold";
// // items[1].style.backgroundColor = "red";
// // items[1].style.color = "yellow";
// for(var i =0 ; i < items.length; i++){
//     const color = "cyan";
//     items[i].style.backgroundColor = color;
// }


// GET ELEMENT BY TAG NAME//

// var li = document.getElementsByTagName("li");
// console.log(li);
// li[1].textContent = "List Number-2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "red";
// li[1].style.color = "yellow";
// for(var i =0 ; i < li.length; i++){
//     const redColor = "red";
//     li[i].style.backgroundColor = redColor;
// }

// QUERY SELECTOR//

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px red';
// console.log(header);

// var input = document.querySelector('input');
// input.value = "hello world";

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var li = document.querySelector('.list-group-item');
// li.style.color= "red";
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'coral';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');

// secondItem.style.color = 'blue';


// QUERY SELECTOR ALL//

// var titles = document.querySelectorAll(".title");
// // console.log(titles);
// titles[0].textContent='Add Items List';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = "cyan";
//     even[i].style.backgroundColor = "gray";
// }

// TRAVERSING DOM//
var itemList = document.querySelector('#items');
// parentNode
itemList.parentNode.style.backgroundColor = "lightGray";
itemList.parentNode.parentNode.parentNode.style.backgroundColor = "skyBlue";