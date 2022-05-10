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