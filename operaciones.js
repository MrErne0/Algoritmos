function mathematicOperations () {
	num1 = parseInt(prompt("Ingrese el primer número: "));
	num2 = parseInt(prompt("Ingrese el segundo número: "));
    
	suma=num1+num2;
	resta=num1-num2;
	division=num1/num2;
	multi=num1*num2;
	resto=num1%num2;

	console.log("The sum is " + num1 + " + " + num2 + " = " + suma + " is the calculated sum");
    console.log("The subtraction is " + num1 + " - " + num2 + " = " +  resta + "Is the calculed difference");
	console.log("The multiplication is " + num1 + " * " + num2 + " = " + multi + "Is the calculed multiplication");
	console.log("The division is " + num1 + " / " + num2 + " = " + division + "Is the calculed division");
	console.log("The remainder is " + num1 + " % " + num2 + " = " + resto + "is the calculed remainder");
}
mathematicOperations();