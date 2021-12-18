function div(){
	var numero =prompt ("Dime un número: ");
	if((numero%4) ==0)
	{ 
		console.log("Divisible entre 4");
    }
	else if((numero%9) ==0)
	{
		console.log("Divisible entre 9");
	}
	else
	{
		console.log("Falso");
	}
}
div();