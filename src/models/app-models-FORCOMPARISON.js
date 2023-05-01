//COLLECTIONS: app-models.js

// The 'Model' is responsible for managing the data of the application.
// You can define your models in the 'data' section of each Vue component
// or define them separately if they might be used by multiple components.

// Models are usually prototypes (similar to classes if you are familiar with those).
// Prototypes are simply objects that define a template for future objects.

// Prototypes/Classes use TitleCase for naming
function LibraryCollection(){
    let arr = [];

    arr.addItem = function(item){
        this.push(new LibraryItem(item, (function(item){
            arr.removeItem(item)
        })));
        return this;  //allows for chaining
    }

    //arr = arr.map(arr.addItem);
    // loop through all additems, would elimate all .addItems in components

    arr.removeItem = function(item){
        //Couldn't get this to work in class

        this.splice(this.indexOf(item), 1);
        return this;
    }

    return arr;
}
function LibraryItem(media, removeFunction) {

    const STATUSES =
        {CHECKED_IN: 'in', CHECKED_OUT: 'out', ON_HOLD: 'hold'}
    //let in2 = 'in';

    //add library item functionality to the book or movie (media)media

    // set the default status
    media.status = STATUSES.CHECKED_IN;

    // methods
    media.checkIn = function () {
        this.status = STATUSES.CHECKED_IN;
    }

    media.checkOut = function () {
        this.status = STATUSES.CHECKED_OUT;
    }

    media.isAvailable = function () {
        return this.status === STATUSES.CHECKED_IN;
    }

    media.remove = function(item){
        removeFunction(item);
    }

    return media;
}

function Book(title, pages) {
    this.title = title ?? 'Default Title';

    // add any additional properties
    this.pages = pages ?? 0;
}
Book.type = "Book";

class Movie {
    //class is an object AND the same as a constructor function!!!
    // Syntactic Sugar
    runtime = 0;
    static type = 'Movie';
    title = '';
    constructor(title, runtime) {
        this.title = title ?? '';
        this.runtime = runtime ?? 0;
    }
}

function Product(media){
    //media.types.push('Product');  //not necessary
    media.price=10;
    return media;
}

//Movie.type = 'Movie';
let book =
    new Product(new LibraryItem(new Book('Book Title', 123))) ;

let movie =
    new LibraryItem(new Movie('Movie Title', 99)) ;

//Composition BENEFIT: Later we can pretend = new Product(new Book(...));
//let something = new LibraryItem({name: 'Tyler', age: 12});

console.log(book, movie);