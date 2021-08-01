//Obtener el input del operador lógico y las variables 
function getData(){
//Ver como le hago que se muestre el valor
	let firstLetter = document.getElementById('firstLetter').value
	let secondLetter = document.getElementById('secondLetter').value
    let val1 = document.getElementsByClassName('value1').innerText
	let val2 = document.getElementsByClassName('value2').innerText
	let val3 = document.getElementsByClassName('value3').innerText
	let val4 = document.getElementsByClassName('value4').innerText
	let val5 = document.getElementsByClassName('value5').innerText
	let val6 = document.getElementsByClassName('value6').innerText
	let val7 = document.getElementsByClassName('value7').innerText
	let val8 = document.getElementsByClassName('value8').innerText

	let firstValues = [val1,val3,val5,val7]
	let secondValues=[val2,val4,val6,val8]
	

    let operator = document.getElementById('logicalOperator').value
	//titulo de la tabla

	

	document.getElementById('paragraph').innerHTML=`${firstLetter} ${operator} ${secondLetter}`
	function receiveOperator(){
	switch(operator){
	case "^":
        conjuction();
	break
	case "v":
		disjunction();
	break
	case "➜":
		conditional();
	break
	case "⬌":
        biconditional();
    break
	default:
	    console.log("error");
    }
}
	//funciones 
    function conjuction(){
		for (let i= 0; i< 4; i++){
		let a = firstValues[i]
		let b = secondValues[i]
	    if(a === "V" && b=== "V"){
		console.log("V");
	    }else{
        console.log("F");
	    }
    }
}
//Disyunción 
    function disjunction(){
	    if(val1 === "V" || val2 === "V"){
		    console.log( "V");
	    }else {
		    console.log( "F");
	    }
    }
//Condicional
    function conditional(){
	    if( val1 === "V" && val2 === "F"){
            console.log( "F");
	    }
	    else{
		    console.log( "V");
	    }
    }
//Bicondicional
    function biconditional(){
	    if(val1 === "V" && val2 === "V"){
		    console.log( "V");
	    }else if (val1 === "F" && val2 === "F"){
            console.log( "V");
	    } else{
            console.log( "F");	
	    }
    }
	//funcion para llamar a las funciones

//OPERACIONES LÓGICAS
//Conjunción

    document.getElementById('value1-2').innerText= receiveOperator();
    // document.getElementById('value3-4').innerText= receiveOperator();
    // document.getElementById('value5-6').innerText= receiveOperator();
    // document.getElementById('value7-8').innerText= receiveOperator();
	
	return false;
}
//guardar el resultado de receive operator en 4 variables para poner eso en los 4 td



