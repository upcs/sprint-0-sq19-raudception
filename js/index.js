

function func() {

    console.log("In Function");
    addNums(document.getElementById("num1").value, document.getElementById("num2").value);

    console.log(addNums.finalInt);
    var para1 = document.createElement("p");
    para1.id = "initNumbers";
    para1.innerText = "First Number: " + document.getElementById("num1").value + " Second Number: " + document.getElementById("num2").value;

    var para2 = document.createElement("p");
    para2.id = "finalNum";
    para2.innerText = "Final Number: " + addNums.finalInt;
    para1.appendChild(para2);

    var element = document.getElementById("basediv");
    element.appendChild(para1);

    element.id = "basediv";




}