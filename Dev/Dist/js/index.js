//:::::::::::::::::::::::::::§ for random number
var num = Math.floor(Math.random() * 90 + 10);
        
document.getElementById('random').innerHTML=num;

//:::::::::::::::::::::::::::::::? for the date 

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var dateTime = document.getElementById('date').innerHTML = date;

//::::::::::::::::; for choose file

function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }