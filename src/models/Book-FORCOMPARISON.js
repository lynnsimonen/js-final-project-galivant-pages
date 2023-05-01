class BookFORCOMPARISON {
    // This belongs to the class, not the object
    // This should be the only place the string 'Book' is defined.
    // All other places should reference this with ClassName.type
    static type = 'Book';

    // define type using getter so it is not modifiable
    get type(){
        return BookFORCOMPARISON.type;
    }

    // these are what we are/might use from Google Books
    kind = '';
    id = '';
    selfLink = '';
    volumeInfo = {
        imageLinks: {
            thumbnail: '',
        },
        title: '',
        subtitle: '',
        authors: [],
        categories: [],
        publisher: '',
        pageCount: '',
        description: '',
    }
    accessInfo = {
        webReaderLink: ''
    }
    saleInfo = {
        buyLink: ''
    }

    // putting "get" in front of a method in a class such as Book.js,
    // makes it a read-only instead of a method SO, don't need to include
    // the method in ReadItems.js computed properties Vue.
    // and <template> is cleaner because it is just
    // :src="item.thumbnail" instead of :src="thumbnail"
    get thumbnail(){
        return this.volumeInfo.imageLinks?.thumbnail?.replace('&edge=curl', '');
    }
}
