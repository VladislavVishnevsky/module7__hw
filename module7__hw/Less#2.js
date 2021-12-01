let car = {
	model: 'KIA',
	color: 'blue',
	maxSpeed: 200,
	2: 'two'
}

let num = 'model';

function getRezult() {
	let rezult = (num in car);
	return rezult;
}

console.log(getRezult(car, num));