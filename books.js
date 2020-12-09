function book(title, numofChapters, author, numofPages, publisher,numofCopies){
    
    book.count++;
    
    Object.defineProperty(this,"title",{
        value:title,
        enumerable: false,
        configurable: false,
        writable: false,
    });
    
     Object.defineProperty(this,"numofChapters",{
        value:numofChapters,
        enumerable: false,
        configurable: false,
        writable: false,
    });
    
    Object.defineProperty(this,"author",{
        value:author,
        enumerable: false,
        configurable: false,
        writable: false,
    });
    
    Object.defineProperty(this,"numofPages",{
        value:numofPages,
        enumerable: false,
        configurable: false,
        writable: false,
    });
    
    Object.defineProperty(this,"publisher",{
        value:publisher,
        enumerable: false,
        configurable: false,
        writable: false,
    });
    
    Object.defineProperty(this,"numofCopies",{
        value:numofCopies,
        enumerable: false,
        configurable: false,
        writable: false,
    });
}

book.count = 0;

book.getCount = function (){
    return book.count;
}

