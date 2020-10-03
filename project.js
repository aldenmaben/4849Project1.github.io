$(document).ready(function(){
  $("#Temp_conversion").show();
  $("#Dist_conversion").hide();
});
$("#home").click(function() {
  $("#Temp_conversion").show();
  $("#Dist_conversion").hide();
});
$("#temp").click(function() {
  $("#Temp_conversion").show();
  $("#Dist_conversion").hide();
});
$("#dist").click(function() {
  $("#Temp_conversion").hide();
  $("#Dist_conversion").show();
});

var temp1, calc, mil
function calcTemp(){
  temp1 = parseFloat(document.getElementById("far").value);
  calc = ((temp1-32)*5)/9;
  document.getElementById("cel").value = calc;
}
function calcDist(){
  mil = parseFloat(document.getElementById("mil").value);
  calc = mil * 1.609344
  document.getElementById("kil").value = calc;
}
