document.querySelector("#tip-form").onchange = function () {
  var bill = Number(document.getElementById("billTotal").value);
  var tip = document.getElementById("tipInput").value;

  document.getElementById("tipOutput").value = `${tip}%`;
  var tipVal = bill * (tip / 100);
  var total = bill + tipVal;
  console.log(total);
  
  var tipPercent = document.getElementById("tipPercent").value;
  document.getElementById("tipPercent").value = `${tip}%`;

  var tipAmt = document.querySelector("#tipAmount");
  var billPlusTip = document.querySelector("#billPlusTip");
 
  tipAmt.value = tipVal.toFixed(2);
  billPlusTip.value = total.toFixed(2);
};
