
var int1 = 4;
var int2 = 45;
var int3 = int1 + int2;

var para1 = document.createElement("p");
para1.id = "initNumbers";
para1.innerText = "First Number: " + int1 + " Second Number: " + int2;

var para2 = document.createElement("p");
para2.id = "finalNum";
para2.innerText = "Final Number: " + int3;

var node = document.createTextNode("Adding Two Numbers")
node.appendChild(para);

var element = document.getElementById("div1");
element.appendChild(node);
element.id = "basediv"


