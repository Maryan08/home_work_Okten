
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a,b,c){
//     if(a<b && a<c){
//         console.log(a);
//     }
//     else if (b<a&&b<c){
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }
// min(5,2,3);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(a,b,c){
//     if(a>b && a>c){
//         console.log(a);
//     }
//     else if (b>a&&b>c){
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }
// max(1,2,3);
// - створити функцію яка повертає найбільше число з масиву
// let arr = [1,2,3,4,346,547,58,347,7598769,346475684,532464];
// function max_arr(array){
//     let max=array[0];
//     for (let i = 0; i <array.length; i++) {
//         if(array[i]>max){
//             max=array[i];
//         }
//     }
//     return max;
// }
// let max=max_arr(arr);
// console.log(max);
// - створити функцію яка повертає найменьше число з масиву
// let arr = [1,2,3,4,346,547,58,347,7598769,346475684,532464];
// function min_arr(array){
//     let min=array[0];
//     for (let i = 0; i <array.length; i++) {
//         if(array[i]<min){
//             min=array[i];
//         }
//     }
//     return min;
// }
// let min_function = min_arr(arr);
// console.log(min_function);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr  = [1,4,7,4,2];
// function sum(array){
//     let s = 0;
//     for (let i = 0; i < array.length; i++) {
//         s+=array[i];
//     }
//     return s;
// }
//
// console.log(sum(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr  = [1,4,7,4,2];
// function sum(array){
//     let s = 0;
//     for (let i = 0; i < array.length; i++) {
//         s+=array[i];
//     }
//     let ser = s/array.length;
//     return ser;
// }
//
// console.log(sum(arr));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function max_min(arg){
//     let max = arguments[0];
//     let min = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if(arguments[i]>max){
//             max = arguments[i];
//         }
//         if(arguments[i]<min){
//             min = arguments[i];
//         }
//     }
//     console.log(max);
//     return min;
// }
// let x = max_min(2,5,6,3,4,23);
// console.log(x);

// - створити функцію яка заповнює масив рандомними числами
// function randomizer(length){
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[i]=Math.floor(Math.random()*100);
//     }
//     return arr;
// }
//
// console.log(randomizer(10));
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomizer(length,limit){
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[i]=Math.floor(Math.random()*limit);
//     }
//     return arr;
// }
//
// console.log(randomizer(10,20));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1,2,3,4,5,6,7];
// function revorse(array){
//     let arr_rev = [];
//     for (let i = array.length-1,j=0; i >=0, j<array.length; i--, j++) {
//         arr_rev[j]=array[i];
//     }
//     return arr_rev;
// }
//
// console.log(revorse(arr));