//java script object
var rect = require('./rectangle');//this is how rectangle node module be called

function solveRect(l,b){
    console.log("Solving for rectangle with l = "
                + l + " and b = " + b);
    rect(l,b, (err,rectangle) => {
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement after the call to rect()");
}

solveRect(2,3);
solveRect(2,0);
solveRect(10,5);
solveRect(0,4);
solveRect(2,-4);