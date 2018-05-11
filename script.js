function convertTemp(originalTemp){
  var originalTemp = document.getElementById('input').value; // number of the original temperature
  var newTemp; //number of the new temperature
  var tempType = document.getElementById('tempTypeInput').value;
  var convertedType;

  if (document.getElementById("tempTypeInput").value === "Celcius"){
    newTemp = (originalTemp * (9/5)) + 32;
    convertedType = 'Fahrenheit';
  }else {
    newTemp = (originalTemp - 32) * (5/9);
    convertedType = 'Celcius';
  }
  document.getElementById('output').innerHTML = originalTemp + " degrees " + tempType + " is " + newTemp.toFixed(2) + " degrees " + convertedType;
}
