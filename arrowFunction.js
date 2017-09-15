// Arrow function
//if we need only single parameter don't needed a braget
"use strict"; 
let getMessage = name => console.log("android "+name);

getMessage("device");

// if want multiple parameter we should use must braget.

let arrowFunction = (name,msg)=> console.log(`hi ${name},${msg}.`);

	arrowFunction("Thirumal ",'Message');

// scope function
let arrowFunctionScope = (name,msg)=> { 
		console.log(`Scope example :\nhi ${name},${msg}.`);
}

	arrowFunctionScope("Thirumal ",'Message');