var taxRate = 0;
var quantity = 0;
var unitPrice = 0;
var exVAT = 0;
var kmPieces = 0;
var travelEx = 0;
var tax = 0;
var result = 0;
//HTML VARS

//helper vars




function calculate(){
    console.log(result)
    console.log("started calc...")

    var taxRate = document.getElementById("taxRate");
    var quantity = document.getElementById("quantity");
    var unitPrice = document.getElementById("unitPrice");
    var exVAT = document.getElementById("exVAT");
    var kmPieces = document.getElementById("kmPieces");
    var mealAllowance = document.getElementById("mealAllowance");
    var travelExpenses = document.getElementById("travelExpenses");


    taxRate.value = taxRate.value / 100;
    tax = taxRate.value

   
    exVAT = parseInt(exVAT.value)
    kmPieces = parseInt(kmPieces.value)
    travelExpenses = parseInt(travelExpenses.value)
    mealAllowance = parseInt(mealAllowance.value)
   
    result = quantity.value * unitPrice.value;
    result = result + exVAT;
    result = result + kmPieces;
    result = result + travelExpenses;
    result = result + mealAllowance;

  
    tax = tax * result

    result = result - tax;

    document.getElementById("result").innerHTML = "TOTAL IS : " +result;
    document.getElementById("result2").innerHTML = "TAX PAID : " +tax;
    console.log(result)
}