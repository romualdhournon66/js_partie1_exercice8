function ageresult() {
  var age= document.getElementById('age').value;
  if (isNaN(age)==false){
  if (age >= 18) {
    alert('vous êtes majeur');
  }else {
    alert('vous êtes mineur');
  }
  else {alert("désolé, ceci n\'est pas un nombre");
}
}
