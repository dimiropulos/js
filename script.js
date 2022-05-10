var age = +prompt('Введите свой возраст')
if (age <= 18) {
   alert('Вы ещё молоды вам надо учиться') 
}
else if(age > 18 && age <= 50){
    alert('Вам надо работать')
}
else if (age > 50 && age <= 59) {
    alert('Вам скоро на пенсию')
}
else if (age > 59 && age <= 150) {
    alert('Вы пенсионер')
}
else{
    alert('Ой что-то пошло не так')
}

var clock = prompt('Введите время')
if (clock >= 4 && clock <= 11) {
    alert(`Сейчас ${clock} часов утра`);
}
 else if(clock >= 11 && clock <= 12) {
    alert(`Сейчас ${clock} часа утра`)
}
     

else if(clock >= 13 && clock <= 16) {
    alert(`Сейчас ${clock } часов дня`)
}
// else if (clock >= 14 && clock <= 15) {
//     alert(`Сейчас ${clock} часа дня`)
// }
// else if (clock >= 16) {
//     alert(`Сейчас ${clock} часов дня`)
// }
else if (clock >= 17 && clock <= 20) {
    alert(`Сейчас ${clock} часов вечера`)
}
// else if (clock >= 19 && clock <= 20) {
//     alert(`Сейчас ${clock} часов вечера`)
// }
else if (clock >= 21 && clock <= 23) {
    alert(`Сейчас ${clock} часов ночи`)
}
// else if (clock >= 11 ) {
//     alert(`Сейчас ${clock} часов ночи`)
// }
else if (clock >= 00) {
    alert(`Сейчас ${clock} полночь`)
}
