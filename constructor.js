function Book( title, author, year) {
	 this.title = title;
	 this.author = author;
	 this.year = year;
	 this.getSummary = function () {
	 	return `${this.title} was published in the ${this.year} and written by ${this.author}`;
	 }
}

const book1 = new Book ( "Book1", "John Doe", 2013);
const book2 = new Book (" Book2", "Jane Thomas", 2016);

console.log(book1);
console.log(book2);
console.log(book1.getSummary());
