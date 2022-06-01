// lista com as resoluções dos desafios para quem estiver precisando de um apoio


// DESAFIO DUAS TORRES:
let input = gets().split(" "); 
let n, x, y; 
n =  parseInt(input[0]); 
x =  parseInt(input[1]); 
y =  parseInt(input[2]); 
let resultado = n/(x + y); 
console.log(resultado.toFixed(2));


//DESAFIO MÉDIA 1
var a = parseFloat(gets(9.0));
var b = parseFloat(gets(7.0));
var media = ((( a  * 3.5) + (  b  * 7.5))/  11);
print("MEDIA = " +   media.toFixed(5));

//DESAFIO ÁREA DO CIRCULO
const TT = 3.14159;
var raio = parseFloat(gets(150));
var area = (    TT        *  (  raio**2));
print("A=" +      area           .toFixed(4));


//DESAFIO SAÍDA 1
let horizontalLine = "---------------------------------------";
let verticalLine = "|                                     |";
console.log(horizontalLine);
for(i=0;i<5;i++){
      console.log(verticalLine);
	}
console.log(horizontalLine);

//DESAFIO ESFERA
const PI = 3.14159;
let R = parseFloat(gets());
let vol = ( (4/3.0)*PI*(R*R*R));
print("VOLUME = " + vol.toFixed(3) )

//DESAFIO LANCHE
let lines = gets().split("\n");
let line = lines.shift().split(" ");
let X = parseInt(line[0]);
let Y = parseInt(line[1]);

var price = 0;
      if (X == 1) {
       price  = 4.00;
     }
     else if (X == 2) {
       price  = 4.50;
     }
     else if (X == 3 ) {
       price  =  5.00;
     }
     else if (X == 4) {
       price  = 2.00;
     }
     else if (X == 5 ) {
       price  = 1.50 ;
     }
     
     price = price * Y
     console.log( "Total: R$ "  + price.toFixed(2));

//DESAFIO SEQUENCIA LÓGICA
let lines = gets().split("\n");
let n = parseInt(lines.shift());
for (let i = 1; i <= n; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
  console.log(`${i} ${i ** 2 +  1 } ${i ** 3 + 1}`);
}

//DESAFIO TUITANDO
let T = gets();
print((T.length <= 140)? "TWEET" : "MUTE");
     

