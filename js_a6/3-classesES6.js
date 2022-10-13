//* OOP - Inheritance and Polymorphism(ES6)

class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;   
        // this.getTitle = function (){
        //     return this.title
        // };
    };
    //! Bu kısımda yazılan fonksiyonlar aslında prototype alanında bulunur.
    getSummary() {
        return`${this.title} was written by ${this.author} in ${this.year} `;
    }
}

const book1 = new Book("Kaşağı", "Ömer Seyfettin", 1920);
const book2 = new Book("Sinekli Bakkal", "H.Edip Adıvar", 1910);

console.log(book1);

//? Sub-class tanımlanması
class Magazine extends Book{
    constructor(title, author, year, month){
        super(title, author, year)
        this.month = month;
    };  
};

const mag1 = new Magazine("Kaşağı", "Ömer Seyfettin", 1940, "Nov");

console.log(mag1);
console.log(mag1.getSummary());
