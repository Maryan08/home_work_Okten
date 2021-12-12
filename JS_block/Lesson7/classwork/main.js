// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Cars(model, mark, year, maxspeed, engeen) {
//     this.model = model;
//     this.mark = mark;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engeen = engeen;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxspeed} на годину`)
//     }
//     this.info = function () {
//         console.log(`Модель - ${model}`);
//         console.log(`Марка - ${mark}`);
//         console.log(`Рік випуску - ${year}`);
//         console.log(`Максимальна швидкість - ${maxspeed}`);
//         console.log(`Обєм двигуна - ${engeen}`);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed += newSpeed;
//         return this.maxspeed;
//     }
//     this.changeYear = function (newYear) {
//         this.year = newYear;
//         return this.year;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//         return this;
//     }
//
//
// }
//
// let addCar = new Cars('Peugeot', 'France', 2000, 270, 2.0);
// console.log(addCar);
// console.log(addCar.info());
// console.log(addCar.increaseMaxSpeed(20));
// console.log(addCar.changeYear(1920));
// console.log(addCar.addDriver('Volodya'));
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Cars {
//     constructor(model, mark, year, maxspeed, engeen) {
//         this.model = model;
//         this.mark = mark;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engeen = engeen;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${maxspeed} на годину`)
//         }
//         this.info = function () {
//             console.log(`Модель - ${model}`);
//             console.log(`Марка - ${mark}`);
//             console.log(`Рік випуску - ${year}`);
//             console.log(`Максимальна швидкість - ${maxspeed}`);
//             console.log(`Обєм двигуна - ${engeen}`);
//         };
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxspeed += newSpeed;
//             return this.maxspeed;
//         }
//         this.changeYear = function (newYear) {
//             this.year = newYear;
//             return this.year;
//         }
//         this.addDriver = function (driver) {
//             this.driver = driver;
//             return this;
//         }
//
//     }
//
// }
//
// let addCar = new Cars('Peugeot', 'France', 2000, 270, 2.0);
// console.log(addCar);
// console.log(addCar.info());
// console.log(addCar.increaseMaxSpeed(20));
// console.log(addCar.changeYear(1920));
// console.log(addCar.addDriver('Volodya'));
