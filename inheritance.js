function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

// get summary
Book.prototype.getSummary = function() {
	return `${this.title} was published in the ${this.year} and written by ${this.author}`;

};

// MAgazine constructor
function Magazine (title, author, year, month) {
	Book.call(this, title, author, year);
	this.month = month;
}
// Instantiate Magazine Object

const mag1 = new Magazine(" Mag one", "John Doe", "2013", "Jan");
console.log(mag1);
