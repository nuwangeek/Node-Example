//java script object
var rect = require('./rectangle');//this is how rectangle node module be called

function solveRect(l,b){
    console.log("solving for rectangle with l = "+l + "and b =" + b);

    if (l<=0 || b<=0){
        console.log("Rectangle dimensions should be grater than zero. l =" + l + "and b=" + b);

    }else{
        console.log("Area of rectangle = "+rect.area(l,b));
        console.log("perimeter of rectangle = " +rect.perimeter(l,b));
    }
}

solveRect(2,3);
solveRect(2,0);
solveRect(10,5);
solveRect(0,4);
solveRect(2,-4);