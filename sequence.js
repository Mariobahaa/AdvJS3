function Sequence(start, end, step) {
    var list = [];

    function fill() {
        var s = start;

        while (s <= end) {
            list.push(s);
            s += step;
        }
    }
    //fill.bind(this,start,end,step)();
    fill();

    Object.defineProperty(this, "append", {
        value: function(val){
            if(val!=list[list.length-1]+step) 
                throw new Error("Invalid Value!");
            list.push(val);
        },
        writable : false,
        configurable: false,
        enumerable: false,
    });
    
    Object.defineProperty(this, "pop", {
        value: function(){
            list.pop();
        },
        writable : false,
        configurable: false,
        enumerable: false,
    });
    
    Object.defineProperty(this,"ls",{
        get: function (){
        return list;
    },
    });

}

Sequence.prototype.toString = function () {
    var str = "";
    var lst = this.ls;
    for(var i=0;i<lst.length;i++){
        str += lst[i] + " ";
    }
    return str;
};
var sq = new Sequence(1,10,2);
