// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let min = (a,b,c)=>{
//     if(a<b&&a<c){
//         console.log(a);
//     }
//     else if(b<a&&b<c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
//
// }
// min(2,4,1);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let max = (a,b,c)=>{
//     if(a>b&&a>c){
//         console.log(a);
//     }
//     else if(b>a&&b>c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
//
// }
// max(2,4,1);
// - створити функцію яка повертає найбільше число з масиву
// let arr = [1,4,5,3,2,7,9,3];
// let max=(arr)=>{
//     let max_number=arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(max_number<arr[i]){
//             max_number=arr[i];
//         }
//     }
//     return max_number;
// }
// console.log(max(arr))
// - створити функцію яка повертає найменьше число з масиву
// let arr = [1,4,5,3,2,7,9,3];
// let min=(arr)=>{
//     let min_number=arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(min_number>arr[i]){
//             min_number=arr[i];
//         }
//     }
//     return min_number;
// }
// console.log(min(arr))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1,4,5,3,2,7,9,3];
// let sum = (arr)=>{
//     let sum_arr = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum_arr+=arr[i];
//     }
//     return sum_arr;
// }
// console.log(sum(arr));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [1,4,5,3,2,7,9,3];
// let middle = (arr)=>{
//     let sum_arr = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum_arr+=arr[i];
//     }
//     return sum_arr/arr.length;
// }
// console.log(middle(arr));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let max_min = (...arg)=>{
//     let max = arg[0];
//     let min = arg[0];
//     for (let i = 0; i < arg.length; i++) {
//         if(arg[i]>max){
//             max = arg[i];
//         }
//         if(arg[i]<min){
//             min = arg[i];
//         }
//     }
//     console.log(max);
//     return min;
//
// }
// console.log(max_min(2,4,5,6,7,3,-13,545,-5,5,53,5));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arr = (length)=>{
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[i]=Math.round(Math.random()*100);
//         console.log(arr[i]);
//     }
// }
// arr(10);
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let arr = (length,limit)=>{
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[i]=Math.round(Math.random()*limit);
//         console.log(arr[i]);
//     }
// }
// arr(10,100);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1,2,3];
// let reverse = (arr)=>{
//     let arr_reverse=[];
//     for(let i=0,j=arr.length-1;i<arr.length,j>=0;i++,j--){
//         arr_reverse[i]=arr[j];
//     }
//     return arr_reverse;
// }
// console.log(reverse(arr));