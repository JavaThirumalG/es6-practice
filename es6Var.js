
function varSample(){


	var bestPlayer = "Dhoni";
	var team = "SA";

	if(team === "SA"){
 		var bestPlayer = "ABD";
		console.log("Var sample \nBest player "+bestPlayer );
	}
	//Here bestplayer value is ADB coz JAVASCRIPT doesn't have a block scope
	console.log("Best player "+bestPlayer ); 

}
varSample();

function letSample(){

	"use strict";// if we don't use this line it throws error "SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode"

	let bestPlayer = "Dhoni";
	let team = "SA";

	if(team === 'SA'){
 		let bestPlayer = "ABD";
		console.log("Let sample \n Best player "+bestPlayer );
	}
	//Here bestplayer value is ADB coz JAVASCRIPT doesn't have a block scope
	console.log("Best player "+bestPlayer ); 

}
letSample();

//const sample
const studentInfo={
	id:"101",
	name : `name of the sdf
	sadfsad
	sadfsaf
	sdf
	sdf

	sdaf
	sdf
	person`,


	info:{
		smoker:"non-smoker"
	}

};

console.log("id : "+studentInfo.id);
console.log("name : "+studentInfo.name);
console.log("Smoking details  : "+studentInfo.info.smoker);
//ES5 syntax
function tempSample(name , value){
	console.log(`Hi ${name} ${value}`);

}

tempSample("Thiru","Message");

//Arrow function sample
"use strict";
let getMessage = name => console.log("android "+name);

getMessage("device");
