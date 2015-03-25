// var notNodes = document.getElementsByTagName('button');
// for (var i = 0; i < notNodes.length; i++) {
//    notNodes[i].addEventListener('click', (function(i) {
//       return function() {
//          console.log('You did what!? #' + i);
//       }
//    })(i));
// }

// var nodes = document.getElementsByTagName('button');
// for (var i = 0; i < nodes.length; i++) {
//    nodes[i].addEventListener('click', function() {
//       console.log('You clicked element #' + i);
//    });
// }

// var foo = function() {
//   alert("Hello World!");
// };

// var bar = function(arg) {
//   return arg;
// };

// bar(foo());

// var adder = function(a,b){
// 	var actualAdder=function(c,d){
// 		return a+b;
// 	}
// 	return actualAdder();
// }

// console.log('adder fxn closure test: ', adder(3,6))
// var myArray = [];
// if (myArray instanceof Array) {
//    console.log('its an array', myArray);
//    console.log('typeof',typeof []);
// }
// function printing() {
//    console.log(1); 
//    setTimeout(function() { console.log(2); }, 1000); 
//    setTimeout(function() { console.log(3); }, 0); 
//    console.log(4);
// }
 
// printing();

// function isPrime(number) {
// 	// If your browser doesn't support the method Number.isInteger of ECMAScript 6,
// 	// you can implement your own pretty easily
// 	if (typeof number !== 'number' || !Number.isInteger(number)) {
// 		// Alternatively you can throw an error.
// 		return false;
// 	}

// 	if (number < 2) {
// 		return false;
// 	}

// 	if (number === 2) {
// 		return true;
// 	} else if (number % 2 === 0) {
// 		return false;
// 	}

// 	var squareRoot = Math.sqrt(number);
// 	console.log("squareRoot:::: ", squareRoot);
// 	for(var i = 3; i <= squareRoot; i += 2) {
// 		if (number % i === 0) {
// 		 return false;
// 		}
// 	}

//   return true  
// }

// console.log(isPrime(23));

// function yell(n){
// 	// console.log('yell\'n called!', n) ;
//   return n > 0 ? yell(n-1) + "a" : "hiy"; 
// };

function yell(n){
	console.log('yell\'n called!', n) ;
  if(n > 0){
  	console.log(yell(n-1) + "a");
	}
  else{
  	console.log("hiy");
  } 
};


yell(5)
