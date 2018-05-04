

var tesituraSoprano = ["C", "D", "E", "F" ,"G","A","B",	
	"c", "d", "e", "f" ,"g","a","b"];
var soprano = [];
var randomIntervalSopranoCantus = [];
for (var i = 0; i < longitudCantus; i++) {
	soprano[i] = "0";
	randomIntervalSopranoCantus[i] = "0";
}
var intervaloSopranoCero = [ quinta, tercera,  octava];
soprano[0] = notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervaloSopranoCero)];

soprano[longitudCantus - 2] = //la sensible 
	notasMusicales[getIndexOf(cantus[longitudCantus - 1]) + 6];
soprano[longitudCantus - 1] = //la fundamental
	notasMusicales[getIndexOf(cantus[longitudCantus - 1]) + 7];

//esto del climax sirve para algo?
var notaClimaxSoprano = "d";
console.log("posicionClimax : " + posicionClimax);
var posicionClimaxSoprano = posicionClimax + 1;
// soprano[posicionClimaxSoprano] = notaClimaxSoprano;
//cambiar la posicion climax soprano para q sea compas diferente q bajo	


//se calcilan con respecto al cantus de cda momento
// var intervalosSoprano = [ octava,quinta,tercera,tercera,tercera, sexta, sexta,sexta, quinta];
var intervalosSoprano = [ tercera, quinta, sexta, octava];

 



function crearSoprano(argument) {
	// BUGs Evitar q los leaps se cuemten cuando no se aplican
	var randomInterval = 1;
	// for (var i = 1; i < posicionClimaxSoprano; i++) {
	for (var i = 1; i < (longitudCantus - 2); i++) {//las dos ultimas estan predefinidas
		breakInfiniteLoops = 0;
		do{
			breakInfiniteLoops++;
			if (breakInfiniteLoops>50) { window.location.reload();} else {}
			// if (i != posicionClimaxSoprano) {
			if (true) {
					
				if (i < posicionClimaxSoprano) {//eleccion preclimax
					// console.log("intervalposPermitidos : " + intervalosPermitidos);
					randomInterval = randomFunction(intervalosSoprano) ;
					// console.log("randomInterval : " + randomInterval);		
				} else {//eleccion postclimax
					randomInterval = randomFunction(intervalosSoprano)  ;		
					// console.log("randomInterval : " + randomInterval);		
				}
		
				//siguiente version de buscar notas(al azar , solo notas superiores a root)
				soprano[i] = notasMusicales[notasMusicales.indexOf(cantus[i]) + 
					randomInterval ];	
				randomIntervalSopranoCantus[i] = ((notasMusicales.indexOf(soprano[i]))
					- ((notasMusicales.indexOf(cantus[i])))) + 1;
				// console.log("soprano[" + i + "] : " + soprano[i]);	
				// console.log("posicionEnNotasMusicales : " + notasMusicales.indexOf(soprano[i]));
				// console.log("getFrecuenciaNotas[" + soprano[i] + "] : " + getFrecuenciaNotas(soprano[i]));
			}else if(i == posicionClimaxSoprano){
				// randomIntervalSopranoCantus[i] = (((notasMusicales.indexOf(soprano[i]) % 7 + 8 )) -
				// 	+ (notasMusicales.indexOf(cantus[i]) % 7 + 1 ) % 7 + 1)  ;
				// console.log("soprano[" + i + "] : " + soprano[i]);	
			}
		//aqui se ponen las reglas del soprano 
		}while(//he comentado algunos para poder debugear sin q se cuelgue
			// ((notasMusicales.indexOf(soprano[i])  >=  notasMusicales.indexOf(soprano[posicionClimaxSoprano])) && i != posicionClimaxSoprano)
			//octavas seguidas
			checkIntervalosProhibidos(randomIntervalSopranoCantus[i], randomIntervalSopranoCantus[i - 1], 5, 5) &&  checkMovimientoDirecto(cantus[i],cantus[i-1],soprano[i],soprano[i-1] )
			||checkIntervalosProhibidos(randomIntervalSopranoCantus[i], randomIntervalSopranoCantus[i - 1], 8, 8) &&  checkMovimientoDirecto(cantus[i],cantus[i-1],soprano[i],soprano[i-1] )
			||checkIntervalosProhibidos(randomIntervalSopranoCantus[i], randomIntervalSopranoCantus[i - 1], 5, 8) 
			||checkIntervalosProhibidos(randomIntervalSopranoCantus[i], randomIntervalSopranoCantus[i - 1], 8, 5)
			//5as ocultas (5as por movimiento directo)
			||checkMovimientoDirecto(cantus[i],cantus[i-1],soprano[i],soprano[i-1] ) && randomIntervalSopranoCantus[i] == 5
			//8as ocultas (8as por movimiento directo)
			||checkMovimientoDirecto(cantus[i],cantus[i-1],soprano[i],soprano[i-1] ) && randomIntervalSopranoCantus[i] == 8
			//restore leaps q suben o bajan con ibtervalo contrario de maximo 3a
			||checkLeapsToRestore(soprano[i - 2], soprano[i - 1],soprano[i])
			//chekear q la melodia no salta intervalos prohibidos melodicamente
			||checkForbiddenMelodicInterval(soprano[i - 1], soprano[i])
		)
		// console.log("getIndexBetween(soprano[" + (i - 1) + "], soprano[" + i +"])" + getIndexBetween(soprano[i - 1], soprano[i]));		 
	}//end for loop
	console.log("soprano : " + soprano);
	// console.log("cantus : " + cantus);
	
	// escalaDo = "X:1\nL:1/2\nK:Cmaj\nV:1 clef=alto1\n"
	// escalaDo = "X:1\nL:1/2\nK:Cmaj\nV:1\n"
	// escalaDo = "X:1\nL:1/2\nK:" + key + "\nV:1 clef=alto3\n"
	// escalaDo = "X:1\nL:1/2\nK:" + key + "\nV:3\n"
	console.log("escalaDo.indexOf(" + key + "); : " + escalaDo.indexOf(key));
	// var keyPosition = ("escalaDo.indexOf(" + key + "); : " + escalaDo.indexOf(key));
	// [escalaDo.slice(0, keyPosition), "HOLA", escalaDo.slice(keyPosition)].join('');

	var escalaDoSoprano;
	// console.log("soprano : " + soprano);
	escalaDoSoprano = "V:1 clef=alto1\n";
	// escalaDo += "\nV:2 clef=treble\n"
	//aqui solo se suma el soprano al header de escalaDo
	for (var i = 0; i < soprano.length; i++) {
		// escalaDo = escalaDo + soprano[i] + ' "' + (((notasMusicales.indexOf(soprano[i + 1]) % 7 + 8 )) -
		// 	+ (notasMusicales.indexOf(cantus[i + 1]) % 7 + 1 ) % 7 + 1)  +'"';
		escalaDoSoprano += 
		 	'"' 
		 		+(((notasMusicales.indexOf(soprano[i]))
					- (notasMusicales.indexOf(cantus[i])))+1) 
			+'ª"'
				+ soprano[i]
			;
	}
	// console.log("escalaDoSoprano : " + escalaDoSoprano);
	escalaDo = escalaDo.replace(key ,key +"\n" + escalaDoSoprano); // if you want all the "hello"'s in the string to be replaced
	// escalaDo += "\nV:2 clef=treble\n"
	// for (var i = 0; i < cantus.length; i++) {
	// 	escalaDo = escalaDo + cantus[i] + '"' + (i+1) + '"' ;
	// }
	// escalaDo += "X:1\nL:1/2\nK:Cmaj\nV:1\nCDFEDC"
	// escalaDo += "\nV:2 clef=alto\nCDFEDC"
	// escalaDo += "\nV:2 clef=alto\n" + cantus;
	// escalaDo += "\nV:2 clef=alto4\n" ;
	
	// escalaDo += "\nV:2 clef=alto4\n" ;
	// for (var i = 0; i < cantus.length; i++) {
	// 	escalaDo += cantus[i];
	// }

	// console.log("escalaDo : " + escalaDo);
	// console.log("randomIntervalSopranoCantus : " 
	// 	+ randomIntervalSopranoCantus);
}


