let car = {
	model: 'Ford',
	color: 'blue',
	maxSpeed: 200
}

function getKey() {
	for (let key in car) {
		if (car.hasOwnProperty(key)) {
			console.log('Ключ - ' + key + ', значение - ' + car[key]);
		}
	}
}
getKey();