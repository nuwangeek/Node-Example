//This is a node module
//Here we use setTimeout for simulating the delay of the function

module.exports = (x,y,callback) => {
    if (x <= 0 || y <= 0)
        setTimeout(() => 
            callback(new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y), 
            null),
            2000);
    else
        //here javascript object be passed into the secend property of call back function
        setTimeout(() => 
            callback(null, {
                //perimeter function can accesed x,y so dont need to put again 
                perimeter: () => (2*(x+y)),
                area:() => (x*y)
            }), 
            2000);
}