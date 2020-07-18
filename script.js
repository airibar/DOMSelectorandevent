/* Select elements */
var txtProduct = document.getElementById("txtProduct");
var addToList = document.getElementById("addToList");
var poteProduct = document.querySelector("ul");
var listi = document.querySelectorAll("li");
var xbutton = document.getElementById
var x = 0;

function pushToList() {
	x++;
	var li = document.createElement("li");
	var but = document.createElement("button");
	but.innerText = "Remove";
	but.setAttribute("onClick", 'deleteItem(' + x + ')');
	li.setAttribute("id", x);
	li.appendChild(but);
	li.setAttribute("onClick", 'changeItem(' + x + ')');
/* 	li.setAttribute("onClick",'deleteItem('+x+')'); */
	li.appendChild(document.createTextNode(txtProduct.value));
	poteProduct.appendChild(li).className = "midline";
	
	
	txtProduct.value = "";
	listi = document.querySelectorAll("li");
}

addToList.addEventListener("click", function () {
	if (txtProduct.value.length > 0) {
		pushToList()
	}
});
txtProduct.addEventListener("keypress", function (tecla) {
	if (txtProduct.value.length > 0 && tecla.keyCode === 13) {
		pushToList();
	}
});

function deleteItem(item) {
	console.log(item);
	
	var i = item;

	var borra = document.getElementById(i);
	borra.remove();

}
function changeItem(item) { 
	console.log(item);
	console.log("change");
	
		var i = item;
	
	var cambia = document.getElementById(i);
	cambia.classList.toggle("raya");

}
