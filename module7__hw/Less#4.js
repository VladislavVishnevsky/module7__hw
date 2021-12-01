function Device(model, brand, power) {
	this.model = model;
	this.brand = brand;
	this.power = power;
	this.deviceOn = function () {
		console.log(`${this.model} от ${this.brand}  работает с мощностью ${this.power} вт`);
	}
	this.deviceOff = function () {
		console.log(`${this.model} от ${this.brand} выключен из розетки`);
	}
}
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
function Notebook(model, power, brand, price, diagonal) {
	this.model = model;
	this.power = power;
	this.brand = brand;
	this.price = price;
	this.diagonal = diagonal;

	this.parameters = function () {
		console.log(`Ноутбук: ${this.model} , марка: ${this.brand}, мощность: ${this.power} Вт, цена: ${this.price} руб., Диагональ: ${this.diagonal} дм`);
	}
}
function Lamp(model, brand, power, price, colour) {
	this.model = model;
	this.power = power;
	this.brand = brand;
	this.price = price;
	this.colour = colour;
	this.parameters = function () {
		console.log(`Лампа: ${this.model}, марка: ${this.brand}, мощность: ${this.power} Вт, цена: ${this.price} руб., Цвет: ${this.colour}`);
	}
}
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов;

Notebook.prototype = new Device();
Lamp.prototype = new Device();

// Создать экземпляры каждого прибора;

let device1 = new Notebook('E1', 65, "Acer", 20000, 14);
let device2 = new Lamp('Настольная лампа ', 'FLARX', 35, 800, 'Белый');

// Вывести в консоль и посмотреть результаты работы
device1.parameters();
device1.deviceOn();
device1.deviceOff();
device2.parameters();
device2.deviceOn();
device2.deviceOff();