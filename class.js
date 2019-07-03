class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}
	// Adding a method
	getSummary() {
		return `${this.title} was published in the ${this.year} and written by ${this.author}`;
	}
	getAge() {
		const years = new Date().getFullYear() - this.year;
	return `${this.title} is ${years} years old`;
	}
}

// Instantiate Object

const book1 = new Book("Book1", "John Doe", "2013");
console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());