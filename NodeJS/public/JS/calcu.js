function doClear() {
  alert("Cleared");
}

//var va=document.frm.txtA.value;//value type is string  X
//var vb=document.frm.txtB.value;//value type is string  X
var va, vb;

function doSum() {
  va = document.getElementById("txtA").value; //value type is string

  vb = document.getElementById("txtB").value; //value type is string

  //parseInt() converts string to integer
  //var sum=parseInt(va)+parseInt(vb); //parseInt(string) + parseInt(string); //concatination 3+5   ->8
  var sum = parseFloat(va) + parseFloat(vb);

  document.getElementById("txtSum").value = sum;
}

function doMulti() {
  va = document.querySelector("#txtA").value; //value type is string
  vb = document.querySelector("#txtB").value; //value type is string
  var multi = va * vb;
  document.querySelector("#txtMulti").value = multi;
}
function doDiv()
{
    doCalc("/");//calling
}

function doMod()
{
    doCalc("%");//calling
}
function doCalc(opr) //formal argument-receiver variable
{
    var x = document.querySelector("#txtA").value; //value type is string
    var y = document.querySelector("#txtB").value; //value type is string
    var res;

    switch(opr)
        {
            case "/":
            res=x/y;
            alert("Div="+res);
            break;
        
            case "%":
            res=x%y;
            alert("Modular="+res);
            break;
        }

        


}

