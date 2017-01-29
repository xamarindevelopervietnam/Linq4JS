﻿Array.prototype.Contains = function<T> (object: T): boolean {
    let that: Array<T> = this;
    
    return that.Any(function(x){
        return x == object;
    });
};