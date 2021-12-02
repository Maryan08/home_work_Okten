// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function Users(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let arrUser = [new Users(1, 'Vasya', 'Pupkin', '123@gmail.com', '+380964668309'),
//     new Users(2, 'Vita', 'Pupkin1', '123@gmail.com', '+380964668309'),
//     new Users(3, 'Maks', 'Pupkin2', '123@gmail.com', '+380964668309'),
//     new Users(4, 'Andriy', 'Pupkin3', '123@gmail.com', '+380964668309'),
//     new Users(5, 'Stepan', 'Pupkin4', '123@gmail.com', '+380964668309'),
//     new Users(6, 'Nazar', 'Pupkin5', '123@gmail.com', '+380964668309'),
//     new Users(7, 'Taras', 'Pupkin6', '123@gmail.com', '+380964668309'),
//     new Users(8, 'Hrysha', 'Pupkin7', '123@gmail.com', '+380964668309'),
//     new Users(9, 'Volodya', 'Pupkin8', '123@gmail.com', '+380964668309'),
//     new Users(10, 'Maryan', 'Pupkin9', '123@gmail.com', '+380964668309')]
// console.log(arrUser);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = arrUser.filter(function (value) {
//     return value.id % 2 === 0;
// })
// console.log(filter);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// arrUser.sort((a,b)=>a.id-b.id);
// console.log(arrUser);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let arrClient = [new Client(1, 'Vasya', 'Pupkin', '123@gmail.com', '+380964668309', ['shampoo', 'soap']),
    new Client(2, 'Vita', 'Pupkin1', '123@gmail.com', '+380964668309', ['windows',' shoes']),
    new Client(3, 'Maks', 'Pupkin2', '123@gmail.com', '+380964668309', ['shower']),
    new Client(4, 'Andriy', 'Pupkin3', '123@gmail.com', '+380964668309', ['radiator',' kran',' shower']),
    new Client(5, 'Stepan', 'Pupkin4', '123@gmail.com', '+380964668309', ['radiator']),
    new Client(6, 'Nazar', 'Pupkin5', '123@gmail.com', '+380964668309', ['radiator', 'kran', 'shower','soap', 'shampoo']),
    new Client(7, 'Taras', 'Pupkin6', '123@gmail.com', '+380964668309', ['radiator', 'kran', 'shower']),
    new Client(8, 'Hrysha', 'Pupkin7', '123@gmail.com', '+380964668309', ['radiator', 'kran', 'shower', 'shampoo']),
    new Client(9, 'Volodya', 'Pupkin8', '123@gmail.com', '+380964668309', ['radiator', 'kran']),
    new Client(10, 'Maryan', 'Pupkin9', '123@gmail.com', '+380964668309', ['radiator', 'kran',' shower', 'shower', 'soap', 'vanna', 'shampoo'])];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
arrClient.sort((a, b) => a.order.length - b.order.length);
console.log(arrClient);