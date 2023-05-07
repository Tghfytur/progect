var dates = {
    "1600" :[" Битва при Сэкигахара.","началось извержение вулкана Перу","Перенесение столицы Японии  в Эдо","Якопо Пери написал оперу «Эвридика»","Иштеряк становится бием Ногайской орды"]
}




var textInput = document.querySelector('input')
var button = document.querySelector('button')
var events = document.querySelectorAll('p') 
var counter = 0

function onclick (){
  if (textInput.value in dates) {
    events.forEach(function(event) {
      event.textContent = dates[textInput.value][counter]
      counter++
    })
  }
}

button.addEventListener('click', onclick)
