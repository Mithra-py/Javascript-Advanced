//*     OOP - Object Contstructor(ES5)

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
        return`${this.title} was written by ${this.author} in ${this.year} `;
    };
};

const book1 = new Book("Kaşağı", "Ömer Seyfettin", 1920);
const book2 = new Book("Sinekli Bakkal", "H.Edip Adıvar", 1910);

console.log(book1);
console.log(book2.getSummary());

book1.price = 100;

console.log(book1, book2);

Book.prototype.getAge = function (){
    return new Date().getFullYear() - this.year;
}

Book.prototype.type = 'novel';

console.log(book2.getAge());

//! Object'lerin proto alanını görmek için .prototype yazmak gerekiyor.
console.log(Book.prototype);

console.log(book1.type);
//! instance'ların proto alanını görmek için .__proto__ yazmak gerekiyor.
console.log(book1.__proto__);

//* INHERITANCE (Kalıtım - ES5)

function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine("Scientific Research", "Einstein", 1905, "September");

console.log(mag1);
console.log(Magazine.prototype);


console.log(Magazine.prototype);
console.log(mag1.getAge());

