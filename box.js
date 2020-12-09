function box(height, width, length, material) {

    var content = [];
    var len = 0;

    Object.defineProperty(this, "height", {
        value: height,
        enumerable: false,
        configurable: false,
        writable: false,
    });

    Object.defineProperty(this, "width", {
        value: width,
        enumerable: false,
        configurable: false,
        writable: false,
    });

    Object.defineProperty(this, "length", {
        value: length,
        enumerable: false,
        configurable: false,
        writable: false,
    });

    Object.defineProperty(this, "material", {
        value: material,
        enumerable: false,
        configurable: false,
        writable: false,
    });

    Object.defineProperty(this, "content", {
        value: content,
        enumerable: false,
        configurable: false,
        writable: false,
    });

    Object.defineProperty(this, "addBook", {
        value: function (book) {
            this.content.push(book);
        },
        enumerable: false,
        configurable: false,
        writable: false,
    });
    
    Object.defineProperty(this, "countBooks", {
        value: function () {
            return this.content.length;
        },
        enumerable: false,
        configurable: false,
        writable: false,
    });
    
    Object.defineProperty(this, "removeBook", {
        value: function (btitle) {
            var flag = true;
            for(var i =0; i<this.content.length && flag;i++){
                if(this.content[i].title == btitle){
                    flag = false;
                    content.splice(i,1);
                }
            }
            return !flag;
        },
        enumerable: false,
        configurable: false,
        writable: false,
    });

}

box.prototype.valueOf = function () {
    return this.content.length;
};


box.prototype.toString = function () {
    return "Box Dims: " + this.length +"x"+this.width+"x"+this.height + " (LxWxH)\n " + "Number of Stored Books: "
    +this.countBooks();
};