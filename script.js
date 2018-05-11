console.log("loaded");

function convertTemp(originalTemp){
  var originalTemp = document.getElementById('input').value; // number of the original temperature
  var newTemp; //number of the new temperature
  console.log(originalTemp);

  if (document.getElementById("checkC").checked == true){
    console.log("Celcius checked");
    newTemp = (originalTemp * (9/5)) + 32;
  }else {
    newTemp = (originalTemp - 32) * (5/9);
  }

  console.log(newTemp);
  document.getElementById('output').innerHTML = newTemp;
}
