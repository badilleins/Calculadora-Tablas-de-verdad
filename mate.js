function getData(){
	let firstLetter = document.getElementById('firstLetter').value
	let secondLetter = document.getElementById('secondLetter').value
    let val1 = document.getElementById('value1').innerText
	let val2 = document.getElementById('value2').innerText
	let val3 = document.getElementById('value3').innerText
	let val4 = document.getElementById('value4').innerText
	let val5 = document.getElementById('value5').innerText
	let val6 = document.getElementById('value6').innerText
	let val7 = document.getElementById('value7').innerText
	let val8 = document.getElementById('value8').innerText
    let operator = document.getElementById('logicalOperator').value
	
	document.getElementById('a^b').innerText= firstLetter
	document.getElementById('logical-operation').innerText = (`${firstLetter} ${operator} ${secondLetter}`)
    document.getElementById('avb').innerText= secondLetter 
	document.getElementById('paragraph').innerHTML=`${firstLetter} ${operator} ${secondLetter}`
	//Recibir el operador y mandar a llamar la operación lógica
	function receiveOperator(){
	switch(operator){
	case "^":
		conjunction();
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
		document.getElementById("value1-2").innerText= "error";
		document.getElementById("value3-4").innerText= "error";
		document.getElementById("value5-6").innerText= "error";
		document.getElementById("value7-8").innerText= "error";
    }
}
	//Operaciones lógicas
	function conjunction(){
	    if(val1 === "V" && val2=== "V"){
			document.getElementById('value1-2').innerText ="V";
	    }else{
			document.getElementById('value1-2').innerText ="F";
		}
		if(val3 === "V" && val4=== "V"){
			document.getElementById('value3-4').innerText ="V";
	    }else{
			document.getElementById('value3-4').innerText ="F";
		}if(val5 === "V" && val6=== "V"){
			document.getElementById('value5-6').innerText ="V";
	    }else{
			document.getElementById('value5-6').innerText ="F";
		}
		if(val7 === "V" && val8=== "V"){
			document.getElementById('value7-8').innerText ="V";
	    }else{
			document.getElementById('value7-8').innerText ="F";
			}
	}
		
	//Disyunción 
    function disjunction(){
	    if(val1 === "V" || val2 === "V"){
		    document.getElementById('value1-2').innerText ="V";
	    }else {
		    document.getElementById('value1-2').innerText ="F";
	    }if(val3 === "V" || val4 === "V"){
			document.getElementById('value3-4').innerText ="V";
	    }else {
			document.getElementById('value3-4').innerText ="F";
	    }if(val5 === "V" || val6 === "V"){
			document.getElementById('value5-6').innerText ="V";
	    }else {
			document.getElementById('value5-6').innerText ="F";
	    }if(val7 === "V" || val8 === "V"){
			document.getElementById('value7-8').innerText ="V";
	    }else {
			document.getElementById('value7-8').innerText ="F";
	    }
    }

//Condicional
    function conditional(){
	    if( val1 === "V" && val2 === "F"){
			document.getElementById('value1-2').innerText ="F";
	    }else{
			document.getElementById('value1-2').innerText ="V";
	    }if( val3 === "V" && val4 === "F"){
			document.getElementById('value3-4').innerText ="F";
	    }else{
			document.getElementById('value3-4').innerText ="V";
	    }if( val5 === "V" && val6 === "F"){
			document.getElementById('value5-6').innerText ="F";
	    }else{
			document.getElementById('value5-6').innerText ="V";
	    }if( val7 === "V" && val8 === "F"){
			document.getElementById('value7-8').innerText ="F";
	    }else{
			document.getElementById('value7-8').innerText ="V";
	    }
    }
	//Bicondicional
    function biconditional(){
	    if((val1 === "V" && val2 === "V") || (val1 === "F" && val2 === "F")  ){
		    document.getElementById('value1-2').innerText ="V";
		}else{
            document.getElementById('value1-2').innerText ="F";
	    }if((val3 === "V" && val4 === "V") || (val3 === "F" && val4 === "F")  ){
		    document.getElementById('value3-4').innerText ="V";
		}else{
            document.getElementById('value3-4').innerText ="F";
	    }if((val5 === "V" && val6 === "V") || (val5 === "F" && val6 === "F")  ){
		    document.getElementById('value5-6').innerText ="V";
		}else{
            document.getElementById('value5-6').innerText ="F";
	    }if((val7 === "V" && val8 === "V") || (val7 === "F" && val8 === "F")  ){
		    document.getElementById('value7-8').innerText ="V";
		}else{
            document.getElementById('value7-8').innerText ="F";
	    }
	}
	//mandar a llamar la función de recibir el operador
	receiveOperator();

	//Dar la explicación correspondiente a cada operación lógica
	function explanation(){
		switch(operator){
			case "^":
        document.getElementById('explanation').innerText =`Usted ha elegido el conector perteneciente a la operación de la conjunción. 
		Los resultados se obtienen de la siguiente manera:   
		- Cuando la proposición 1 y la proposición 2 son ambas verdaderas el resultado es verdadero, en todos los demas casos el resultado es falso.`;
	break
			case "v":
		document.getElementById('explanation').innerText =`Usted ha elegido el conector perteneciente a la operación de la disyunción. 
		Los resultados se obtienen haciendo el siguiente análisis:
		- Cuando la proposición 1 y la proposición 2 son ambas falsas el resultado es falso, en todos los demas casos el resultado es verdadero.`;
	break
			case "➜":
		document.getElementById('explanation').innerText =`Usted ha elegido el conector perteneciente a la operación del condicional o implicacion.
		Para obtener los resutlados debemos entender lo siguiente: 
		- El resultado es falso únicamente en el caso de que la proposición 1 sea verdadera y la proposición 2 sea falsa, regresando un resultado verdadero en todos los demás casos.`;
	break
			case "⬌":
        document.getElementById('explanation').innerText =`Usted ha elegido el conector perteneciente a la operación del bicondicional.
		El resultado es obtenido haciendo el análisis siguiente:
		- Si las dos proposiciones son verdaderas o ambas son falsas el resultado será verdadero, caso contrario el resultado será falso.`;
    break
			default:
			document.getElementById('explanation').innerText =`Debe elegir un operador para obtener su explicación.`
    	}
	} 
	explanation();
	return false;
	
}
//IMPRIMIR RESULTADOS DE LA TABLA


function PrintTable(){
	let operator = document.getElementById('logicalOperator').value
	switch(operator){
	case "^":
		PrintImage('https://i.ibb.co/B3F6nVq/conjuncion.png');
	break
	case "v":
		PrintImage('https://i.ibb.co/p1qkCpL/disyuncion.png');
	break
	case "➜":
		PrintImage('https://i.ibb.co/hMcjfM9/implicaci-n.png');
	break
	case "⬌":
		PrintImage('https://i.ibb.co/bLwFfkT/bicondicional.png');
    break
	default:
		return 'error';
    }
	function PrintImage(source)
    {
        var Pagelink = "Imprime tu tabla de verdad";
        var pwa = window.open(Pagelink, "_new");
        pwa.document.open();
        pwa.document.write(ImagetoPrint(source));
        pwa.document.close();
    }
	function ImagetoPrint(source)
    {
        return "<html><head><scri"+"pt>function step1(){\n" +
                "setTimeout('step2()', 10);}\n" +
                "function step2(){window.print();window.close()}\n" +
                "</scri" + "pt></head><body onload='step1()'>\n" +
                "<img src='" + source + "' /></body></html>";
    }
}




