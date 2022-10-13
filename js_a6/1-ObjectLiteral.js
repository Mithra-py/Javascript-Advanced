//* (OOPS)
//* Object Literals

const book1 = {
    title: "The Brothers Karamazov",
    author: "Dostoyevski",
    year: "1880",
    getSummary:function(){
        return`${this.title} was written by ${this.author} in ${this.year} `;
    },
};

console.log(book1);
console.log(book1.getSummary());
console.log(book1.toString()); //! Object nesnesinden iras yoluyla geldi.

const book2 = {
    title: "the lily of the valley",
    author: "Honero de Balzac",
    year: "1835",
    getSummary:function(){
        return`${this.title} was written by ${this.author} in ${this.year} `;
    },
};

console.log(book2);
console.log(book2.getSummary());