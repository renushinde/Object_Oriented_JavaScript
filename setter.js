class Pet {
	constructor ( animal, age, breed, sound) {
		this.animal = animal;
		this.age = age;
		this.breed= breed;
		this.sound = sound;
	}
	get activity() {
		const today = new Date();
		const hour = today.getHours();

		if (hour >8 && hour <= 20) {
			return 'Playing';
			} else {
				return "Sleeping";
			}
	}

	

	speak() {
		console.log( this.sound);
	}
}

const ernie = new Pet ("dog", 2, "pug", "yip yip");
console.log(ernie.activity);
console.log(ernie);
