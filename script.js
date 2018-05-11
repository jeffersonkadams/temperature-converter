function convertTemp(originalTemp){
  var originalTemp = document.getElementById('input').value; // number of the original temperature
  var newTemp; //number of the new temperature

  if (document.getElementById("checkC").checked == true){
    newTemp = (originalTemp * (9/5)) + 32;
  }else {
    newTemp = (originalTemp - 32) * (5/9);
  }
  document.getElementById('output').innerHTML = newTemp;
}
