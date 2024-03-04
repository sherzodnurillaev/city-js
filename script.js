// Задание 1

// Let cityName = propmt (* название города)
//1 1. создать функцию findPersonsByCity которая принимает название города из промпта по
// которому возвращает массив людей из этого города

// let cityName = prompt("название города");

let persons =[
    { name: "John", age: 25, city: "NewYork"},
    { name: "Alice", age: 30, city: "London"},
    { name: "Bob", age: 22, city: "Paris" },
    { name: "Alex", age: 19, city: "London"},
    { name: "Tyler", age: 24, city: "NewYork" },
    { name: "Constantine", age: 31, city: "Paris" },
    { name: "Cole", age: 21, city: "London" },
];

let findPersonsByCity = (arr, city) => { 
    for (const person of arr) {
        // console.log(person.city);
        if (person.city.toLowerCase() === city.toLowerCase()) {
            console.log(person);
        }
    }
}

// findPersonsByCity(persons, cityName)



// 2. функция calculateAverageAge вычисляет средний возраст в массиве persons



let addNewPerson = (arr) => {
    console.log(arr); 
    let count = 0
    for (const item of arr) {
       count = count + item.age
    }
    console.log(Math.floor(count / arr.length));
}

addNewPerson(persons)

// 3. функция addNewPerson добавляет нового пользователя в массив по переданным как на примере

let newPer = {name: 'Eva', age: 28, city: "San Francisco"}

persons.push(newPer)

// addNewPerson ("Eve", 28, "San Francisco" )