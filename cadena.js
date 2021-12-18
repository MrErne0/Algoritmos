var cadena = prompt ("Escribe");
function checkEmptyStyString (str) {
	if (str==="") {
		console.log ("La cadena esta vacia");
	}
	else{
		console.log(str.charAt (0) );
	}
}
checkEmptyStyString(cadena);