
var b = document.getElementById("b");
var input=document.getElementById("range");
b.style.width=input.value+'%';
input.oninput=function () {
    b.style.width=this.value+'%';
}
