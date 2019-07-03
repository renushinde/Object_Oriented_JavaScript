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

// Example 2
class Student {
    constructor (gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }

get level () {
  if (this.credits > 90) {
    return "Senior";
  } else if ( this.credits <= 90 && this.credits >= 61) {
    return "Junior";
  } else if (this.credits <= 60 && this.credits >= 31) {
    return "Sophomore";
  } else {
    return " Junior";
}

}
    stringGPA() {
        return this.gpa.toString();
    }
}

const student = new Student(3.9);
console.log(student.level);