class Book {
	constructor( title, author, year) {
		this.title= title;
		this.author = author;
		this.year = year;
	}
	getSummary() {
		return `${this.title} was published in the ${this.year} and written by ${this.author}`;
	}

}

// Magazine subclass
class Magazine extends Book {
	constructor (title, author, year, month) {
		super(title, author, year);
		this.month = month;
	}
}

// Instantiate
const mag1 = new Magazine("Mag1", " JAn Thomas", 2015, "Jan");
console.log(mag1.getSummary());