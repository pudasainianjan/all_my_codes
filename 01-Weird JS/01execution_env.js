
// b();
// console.log(a);

// var a = 'hello world';  //global scope

// function b(){
//     console.log('called b');
// }


//* Execution Context, var environment
/*
function b(){
    var myVar;
    console.log(myVar);
}
function a(){
    var myVar = 2;
    console.log(myVar);
    b();
}
var myVar = 1;
a();

console.log(myVar);     //global myVar is one
*/

//*The Scope Chain

/*
function b(){       //b is lexically in global env...output =1 or b is created when global EC is created
    console.log(myVar);
}
function a(){
    var myVar = 2;
    b();
}

var myVar = 1;
a();
*/


/*
function a(){
    function b(){       //b is lexically in a()...output =2 
        console.log(myVar);
    }
    var myVar = 2;
    b();
}

var myVar = 1;
a();
console.log(myVar);  //1 becausee it sits in global scope
//b();   //cant find because there is no b here
*/


//now i found out that variable alters only value of its same lexical scope 
function a(){
    function b(){       //b is lexically in a()...output =2 
        myVar =222; 
        console.log(myVar);
    }
    var myVar = 2;
    b();
    console.log(myVar);     //myvar is now altered by b() beecause of lexical scope

}

var myVar = 1;
a();
console.log(myVar); //this global scope is not altered by b()

