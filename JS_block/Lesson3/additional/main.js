// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let array = [];

//a
// for(let i=0;i<50;i++){
//     array[i]=i*2;
//     console.log(array[i]);
// }

//b
// for (let i = 0; i < 50; i++) {
//     array[i]=i*2+1;
//     console.log(array[i]);
// }

//c
for (let i = 0; i < 20; i++) {
    array[i]=Math.floor(Math.random()*100);
    // console.log(array[i]);
}

//d
// for (let i = 0; i < 20; i++) {
//     array[i]=Math.floor(Math.random()*(732-8)+8);
//     console.log(array[i]);
// }



// 2. Вивести за допомогою console.log кожен третій елемен
//
// for (let i = 0; i < array.length; i=i+3) {
//     console.log(array[i]);
//
// }



// . Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 0; i < array.length; i=i+3) {
//     if(array[i]%2==0){
//         console.log(array[i]);
//     }
//
// }


// Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let arr1 = [];
// let j =0;
// for (let i = 0; i < array.length; i=i+3) {
//     if(array[i]%2==0){
//         arr1[j]=array[i];
//         console.log(arr1[j]);
//         j++;
//     }
//
// }

// Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let array1 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < array1.length-1; i++) {
//     if (array1[i+1]%2==0){
//         console.log(array1[i]);
//     }
//
// }