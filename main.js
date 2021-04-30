//Program to take in |Numbers and print them in Word form
//Created by Harry Thompson - 04/30/2020

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
readline.question('Enter Numbers to be tested: ', nums => {
  //Prompts User to Enter numbers to be printed and Takes them in as
  //String "nums"
  readline.close();
  
  //Splits nums into an array of chars
  var chars =nums.split("");
  
  //Setup Array of Strings
  var ar = [];
  //Srings will be added to this Array 
  //Works through array of chars and prints each number in word form, and any other char is printed as ? 
  var i;
  for (i = 0; i < chars.length; i++) {
  switch(chars[i]) {
	case '0':
		process.stdout.write("Zero");
		ar.push("Zero");
		break;
	case '1':
		process.stdout.write("One");
		ar.push("One");
		break;
	case '2':
		process.stdout.write("Two");
		ar.push("Two");
		break;
	case '3':
		process.stdout.write("Three");
		ar.push("Three");
		break;
	case '4':
		process.stdout.write("Four");
		ar.push("Four");
		break;
	case '5':
		process.stdout.write("Five");
		ar.push("Five");
		break;
	case '6':
		process.stdout.write("Six");
		ar.push("Six");
		break;
	case '7':
		process.stdout.write("Seven");
		ar.push("Seven");
		break;
	case '8':
		process.stdout.write("Eight");
		ar.push("Eight");
		break;
	case '9':
		process.stdout.write("Nine");
		ar.push("Nine");
		break;
	case ' ':
		process.stdout.write(", ");
		ar.push(", ");
		break;
	default:
	//Case Where number not entered
		process.stdout.write(" ? ");
		ar.push(" ? ");
	}
  }
});
