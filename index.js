//java script object
var rect = {
    perimiter:(x,y) => (2*(x+y)),
    area:(x,y) => (x*y)
};

function solveRect(l,b){
    console.log("solving for rectangle with l = "+l + "and b =" + b);

    if (l<=0 || b<=0){
        console.log("Rectangle dimensions should be grater than zero. l =" + l + "and b=" + b);

    }else{
        console.log("Area of rectangle = "+rect.area(l,b));
        console.log("perimeter of rectangle = " +rect.perimiter(l,b));
    }
}

solveRect(2,3);
solveRect(2,0);
solveRect(10,5);
solveRect(0,4);
solveRect(2,-4);