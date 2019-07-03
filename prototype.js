function Book( title, author, year) {
	 this.title = title;
	 this.author = author;
	 this.year = year;
	 
	 // Get Summary as a Prototype
	 Book.prototype.getSummary = function(){
	 	return `${this.title} was published in the ${this.year} and written by ${this.author}`;
	 }
}

// Get active years of a book

Book.prototype.getAge = function() {
	const years = new Date().getFullYear() - this.year;
	return `${this.title} is ${years} years old`; 
}

const book1 = new Book ( "Book1", "John Doe", 2013);
const book2 = new Book (" Book2", "Jane Thomas", 2016);

console.log(book1);
console.log(book2);
console.log(book1.getSummary());
console.log(book1.getAge());