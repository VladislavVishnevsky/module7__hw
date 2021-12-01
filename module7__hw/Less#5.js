class Device {
	constructor(model, brand, power) {
		this.model = model;
		this.brand = brand;
		this.power = power;
	}
	deviceOn() {
		console.log(`${this.model} от ${this.brand}  работает с мощностью ${this.power} вт`);
	}
	deviceOff() {
		console.log(`${this.model} от ${this.brand} выключен из розетки`);
	}
}

class Notebook extends Device {
	constructor(model, power, brand, price, diagonal) {
		super(model, brand, power);
		this.model = model;
		this.power = power;
		this.brand = brand;
		this.price = price;
		this.diagonal = diagonal;
	}
	parameters() {
		console.log(`Ноутбук: ${this.model} , марка: ${this.brand}, мощность: ${this.power} Вт, цена: ${this.price} руб., Диагональ: ${this.diagonal} дм`);
	}
}
class Lamp extends Device {
	constructor(model, brand, power, price, colour) {
		super(model, brand, power);
		this.model = model;
		this.power = power;
		this.brand = brand;
		this.price = price;
		this.colour = colour;
	}
	parameters() {
		console.log(`Лампа: ${this.model}, марка: ${this.brand}, мощность: ${this.power} Вт, цена: ${this.price} руб., Цвет: ${this.colour}`);
	}
}


let device1 = new Notebook('E1', 65, "Acer", 20000, 14);
let device2 = new Lamp('Настольная лампа ', 'FLARX', 35, 800, 'Белый');

device1.parameters();
device1.deviceOn();
device1.deviceOff();
device2.parameters();
device2.deviceOn();
device2.deviceOff();