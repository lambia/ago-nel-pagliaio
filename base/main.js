/*********** Dichiarazione funzione **********/

function isInArray(lista, elementoCercato) {
	//variabile di appoggio che indica se ho trovato l'elemento
	//per ora, non l'ho trovato => false
	let found = false;

	for (let i = 0; i < lista.length; i++) {
		const questoElemento = lista[i];
		console.log(i, `Verifico se ${questoElemento} è ${elementoCercato}`);

		if (questoElemento === elementoCercato) {
			console.log("Elemento trovato!");
			// Trovato!
			found = true;
		}
	}

	return found;
}

/*************** Uso della funzione **********/

const studentiPresentiOggi = ['Mario', 'Erica', 'Giordano', 'Diego'];

const isEricaPresente = isInArray(studentiPresentiOggi, 'Erica');

console.log("Erica è presente: ", isEricaPresente); //True 


