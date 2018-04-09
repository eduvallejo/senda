
var notasMusicales= ["C,","D,","E,","F,","G,","A,","B,","C","D","E","F","G","A","B","c","d","e","f","g","a","b", ];
// var notasMusicales= {"A": {"position":1,},"B": {"position":2,},"C": {"position":3,},"D": {"position":4,},"E": {"position":5,},"F": {"position":6,},"G": {"position":7,},};
var notaClimax;
var longitudCantus = 13;
var cantus = [];
for (var i = 0; i < longitudCantus; i++) {
	cantus[i] = "0";
}
cantus[0] = "C";
cantus[longitudCantus - 1] = "C";
cantus[longitudCantus - 2] = "D";

var posIntervalo = {
	"C,,": 1 ,"^C,,": 1.5,"_D,,": 1.5, "D,,": 2, "^D,,": 2.5, "_E,,": 2.5 ,"E,,": 3 ,"_F,,": 3 ,"^E,,": 4 , "F,," : 4 ,"^F,," : 4.5 ,"_G,," : 4.5 ,"G,,": 5 ,"^G,,": 5.5 ,"_A,,": 5.5 ,"A,,": 6 ,"^A,,": 6.5 ,"_B,,": 6.5 ,"B,,": 7 ,
	"C,": 8 ,"^C,": 8.5,"_D,": 8.5, "D,": 9, "^D,": 9.5, "_E,": 9.5 ,"E,": 10 ,"_F,": 10 ,"^E,": 11 , "F," : 11 ,"^F," : 11.5 ,"_G," : 11.5 ,"G,": 12 ,"^G,": 12.5 ,"_A,": 12.5 ,"A,": 13 ,"^A,": 13.5 ,"_B,": 13.5 ,"B,": 14 ,
	"C": 15 ,"^C": 15.5,"_D": 15.5, "D": 16, "^D": 16.5, "_E": 16.5 ,"E": 17 ,"_F": 17 ,"^E": 18 , "F," : 18 ,"^F," : 18.5 ,"_G," : 18.5 ,"G": 19 ,"^G": 19.5 ,"_A": 19.5 ,"A": 20 ,"^A": 20.5 ,"_B": 20.5 ,"B": 21 ,
	"c": 22 ,"^c": 22.5,"_d": 22.5, "d": 23, "^d": 23.5, "_e": 23.5 ,"e": 24 ,"_f": 24 ,"^e": 25 , "f," : 25 ,"^f," : 25.5 ,"_g," : 25.5 ,"g": 26 ,"^g": 26.5 ,"_a": 26.5 ,"a": 27 ,"^a": 27.5 ,"_b": 27.5 ,"B": 28 ,
};

var tesituraSoprano = ["C", "D", "E", "F" ,"G","A","B",	
	"c", "d", "e", "f" ,"g","a","b"];

var segunda = 1;
var tercera = 2;
var cuarta = 3;
var quinta = 4;
var sexta = 5;
var septima = 6;
var octava = 7;
var novena = 8;
var decima = 9;
var onceava = 10;
var doceava = 11;
var treceava = 12;
var quinceava = 13;
//intervalos desdecendientes
var segundaAbajo = -1;
var terceraAbajo = -2;
var cuartaAbajo = -3;
var quintaAbajo = -4;
var sextaAbajo = -5;
var septimaAbajo = -6;
var octavaAbajo = -7;


// var sexta = 14;
// var sexta = 15;
// var sexta = 16;
// var sexta = 17;
// var sexta = 18;
// var sexta = 19;
// var sexta = 10;

//intervalos peremitidos
//repito los intervalos  quiero salgan mas amenudo , los stepwise
var intervalosPermitidos = [segunda, segunda, tercera, cuarta, quinta, sexta, octava,
								segundaAbajo,segundaAbajo, terceraAbajo, cuartaAbajo, 
];

//esta es solo el header al q se se suma el cantus 
var escalaDo = "X:1\nT:escala de Do\nC:\nL:1/2\nQ:1/4=150\nM:4/2\nK:Cmaj\nV:1\n"
// console.log("escalaDo : " + escalaDo);
// var escalaDo = "X:1\nM: 4/4\nL: 1/8\nK: Emin\n|:D2|EB{c}BA B2 EB|\n";

// console.log("indiceNota['G,'] : " + indiceNota['G,']);
	// console.log("indiceNota['E,'] : " + indiceNota['E,']);
	// console.log("notasBajoDef : " + notasBajoDef[0]);
	// console.log("notasSopranoDef : " + notasSopranoDef[0]);


// console.log("10%8 : " + (9%7));
// console.log("10%7 : " + (8%7));
// console.log("10%7 : " + (7%7));

// tesituras
// 	soprano: (D - a)
// 	contralto: (G, - d)
// 	tenor: (D, - A)
// 	bajo: (F,, - C)

// notasMusicales = {
//   "C0": {
//     "hz":16.35,
//   },
//   " C#0/Db0 ": {
//     "hz":17.32,
//   },
//   "D0": {
//     "hz":18.35,
//   },
//   " D#0/Eb0 ": {
//     "hz":19.45,
//   },
//   "E0": {
//     "hz":20.6,
//   },
//   "F0": {
//     "hz":21.83,
//   },
//   " F#0/Gb0 ": {
//     "hz":23.12,
//   },
//   "G0": {
//     "hz":24.5,
//   },
//   " G#0/Ab0 ": {
//     "hz":25.96,
//   },
//   "A0": {
//     "hz":27.5,
//   },
//   " A#0/Bb0 ": {
//     "hz":29.14,
//   },
//   "B0": {
//     "hz":30.87,
//   },
//   "C1": {
//     "hz":32.7,
//   },
//   " C#1/Db1 ": {
//     "hz":34.65,
//   },
//   "D1": {
//     "hz":36.71,
//   },
//   " D#1/Eb1 ": {
//     "hz":38.89,
//   },
//   "E1": {
//     "hz":41.2,
//   },
//   "F1": {
//     "hz":43.65,
//   },
//   " F#1/Gb1 ": {
//     "hz":46.25,
//   },
//   "G1": {
//     "hz":49,
//   },
//   " G#1/Ab1 ": {
//     "hz":51.91,
//   },
//   "A1": {
//     "hz":55,
//   },
//   " A#1/Bb1 ": {
//     "hz":58.27,
//   },
//   "B1": {
//     "hz":61.74,
//   },
//   "C2": {
//     "hz":65.41,
//   },
//   " C#2/Db2 ": {
//     "hz":69.3,
//   },
//   "D2": {
//     "hz":73.42,
//   },
//   " D#2/Eb2 ": {
//     "hz":77.78,
//   },
//   "E2": {
//     "hz":82.41,
//   },
//   "F2": {
//     "hz":87.31,
//   },
//   " F#2/Gb2 ": {
//     "hz":92.5,
//   },
//   "G2": {
//     "hz":98,
//   },
//   " G#2/Ab2 ": {
//     "hz":103.83,
//   },
//   "A2": {
//     "hz":110,
//   },
//   " A#2/Bb2 ": {
//     "hz":116.54,
//   },
//   "B2": {
//     "hz":123.47,
//   },
//   "C3": {
//     "hz":130.81,
//   },
//   " C#3/Db3 ": {
//     "hz":138.59,
//   },
//   "D3": {
//     "hz":146.83,
//   },
//   " D#3/Eb3 ": {
//     "hz":155.56,
//   },
//   "E3": {
//     "hz":164.81,
//   },
//   "F3": {
//     "hz":174.61,
//   },
//   " F#3/Gb3 ": {
//     "hz":185,
//   },
//   "G3": {
//     "hz":196,
//   },
//   " G#3/Ab3 ": {
//     "hz":207.65,
//   },
//   "A3": {
//     "hz":220,
//   },
//   " A#3/Bb3 ": {
//     "hz":233.08,
//   },
//   "B3": {
//     "hz":246.94,
//   },
//   "C4": {
//     "hz":261.63,
//   },
//   " C#4/Db4 ": {
//     "hz":277.18,
//   },
//   "D4": {
//     "hz":293.66,
//   },
//   " D#4/Eb4 ": {
//     "hz":311.13,
//   },
//   "E4": {
//     "hz":329.63,
//   },
//   "F4": {
//     "hz":349.23,
//   },
//   " F#4/Gb4 ": {
//     "hz":369.99,
//   },
//   "G4": {
//     "hz":392,
//   },
//   " G#4/Ab4 ": {
//     "hz":415.3,
//   },
//   "A4": {
//     "hz":440,
//   },
//   " A#4/Bb4 ": {
//     "hz":466.16,
//   },
//   "B4": {
//     "hz":493.88,
//   },
//   "C5": {
//     "hz":523.25,
//   },
//   " C#5/Db5 ": {
//     "hz":554.37,
//   },
//   "D5": {
//     "hz":587.33,
//   },
//   " D#5/Eb5 ": {
//     "hz":622.25,
//   },
//   "E5": {
//     "hz":659.25,
//   },
//   "F5": {
//     "hz":698.46,
//   },
//   " F#5/Gb5 ": {
//     "hz":739.99,
//   },
//   "G5": {
//     "hz":783.99,
//   },
//   " G#5/Ab5 ": {
//     "hz":830.61,
//   },
//   "A5": {
//     "hz":880,
//   },
//   " A#5/Bb5 ": {
//     "hz":932.33,
//   },
//   "B5": {
//     "hz":987.77,
//   },
//   "C6": {
//     "hz":1046.5,
//   },
//   " C#6/Db6 ": {
//     "hz":1108.73,
//   },
//   "D6": {
//     "hz":1174.66,
//   },
//   " D#6/Eb6 ": {
//     "hz":1244.51,
//   },
//   "E6": {
//     "hz":1318.51,
//   },
//   "F6": {
//     "hz":1396.91,
//   },
//   " F#6/Gb6 ": {
//     "hz":1479.98,
//   },
//   "G6": {
//     "hz":1567.98,
//   },
//   " G#6/Ab6 ": {
//     "hz":1661.22,
//   },
//   "A6": {
//     "hz":1760,
//   },
//   " A#6/Bb6 ": {
//     "hz":1864.66,
//   },
//   "B6": {
//     "hz":1975.53,
//   },
//   "C7": {
//     "hz":2093,
//   },
//   " C#7/Db7 ": {
//     "hz":2217.46,
//   },
//   "D7": {
//     "hz":2349.32,
//   },
//   " D#7/Eb7 ": {
//     "hz":2489.02,
//   },
//   "E7": {
//     "hz":2637.02,
//   },
//   "F7": {
//     "hz":2793.83,
//   },
//   " F#7/Gb7 ": {
//     "hz":2959.96,
//   },
//   "G7": {
//     "hz":3135.96,
//   },
//   " G#7/Ab7 ": {
//     "hz":3322.44,
//   },
//   "A7": {
//     "hz":3520,
//   },
//   " A#7/Bb7 ": {
//     "hz":3729.31,
//   },
//   "B7": {
//     "hz":3951.07,
//   },
//   "C8": {
//     "hz":4186.01,
//   },
//   " C#8/Db8 ": {
//     "hz":4434.92,
//   },
//   "D8": {
//     "hz":4698.63,
//   },
//   " D#8/Eb8 ": {
//     "hz":4978.03,
//   },
//   "E8": {
//     "hz":5274.04,
//   },
//   "F8": {
//     "hz":5587.65,
//   },
//   " F#8/Gb8 ": {
//     "hz":5919.91,
//   },
//   "G8": {
//     "hz":6271.93,
//   },
//   " G#8/Ab8 ": {
//     "hz":6644.88,
//   },
//   "A8": {
//     "hz":7040,
//   },
//   " A#8/Bb8 ": {
//     "hz":7458.62,
//   },
//   "B8": {
//     "hz":7902.13,
//   }
// };
