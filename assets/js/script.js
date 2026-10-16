/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = [
   {
      nome: 'Penna',
      categoria: 'Cancelleria',
      prezzo: '1 €',
      rating: 3,
      immagine: 'img.jpg',
      disponibile: true
   },
   {
      nome: 'Cassettiera',
      categoria: 'Mobili',
      prezzo: '300 €',
      rating: 4,
      immagine: 'img.jpg',
      disponibile: true
   },
   {
      nome: 'Cucina in legno di quercia',
      categoria: 'Mobili',
      prezzo: '3.500 €',
      rating: 5,
      immagine: 'img.jpg',
      disponibile: false
   },
   {
      nome: 'Astuccio',
      categoria: 'Cancelleria',
      prezzo: '3.50 €',
      rating: 3,
      immagine: 'img.jpg',
      disponibile: true
   },
   {
      nome: 'Gomma',
      categoria: 'Cancelleria',
      prezzo: '0.50 €',
      rating: 3,
      immagine: 'img.jpg',
      disponibile: false
   },
   {
      nome: 'Tavolo in marmo',
      categoria: 'Mobili',
      prezzo: '1.500 €',
      rating: 5,
      immagine: 'img.jpg',
      disponibile: true
   },
   {
      nome: 'Diario Comix',
      categoria: 'Cancelleria',
      prezzo: '3.50 €',
      rating: 3,
      immagine: 'img.jpg',
      disponibile: false
   },
   {
      nome: 'Divano in alcantara',
      categoria: 'Mobili',
      prezzo: '2.350 €',
      rating: 4,
      immagine: 'img.jpg',
      disponibile: false
   },
   {
      nome: 'Pennarelli',
      categoria: 'Cancelleria',
      prezzo: '2.50 €',
      rating: 3,
      immagine: 'img.jpg',
      disponibile: true
   },
   {
      nome: 'Zaino',
      categoria: 'Cancelleria',
      prezzo: '20 €',
      rating: 3,
      immagine: 'img.jpg',
      disponibile: true
   },
   {
      nome: 'Armadio',
      categoria: 'Mobili',
      prezzo: '900 €',
      rating: 3,
      immagine: 'img.jpg',
      disponibile: false
   },
   {
      nome: 'Quaderno',
      categoria: 'Cancelleria',
      prezzo: '1 €',
      rating: 3,
      immagine: 'img.jpg',
      disponibile: true
   }
];

/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function myPriceString(price = '') {
   return `€ ${price.toFixed(2).replace(".", ",")}`;
}

console.log(`Giacca in pelle: ${myPriceString(1160.99)}`);
 
/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function myStars(rating) {

   if (rating === 1) {
      return '★☆☆☆☆';
   } else if (rating === 2) {
      return '★★☆☆☆';
   } else if (rating === 3) {
      return '★★★☆☆';
   } else if (rating === 4) {
      return '★★★★☆';
   } else if (rating === 5)
      return '★★★★★';
}
for (let i = 0; i < prodotti.length; i++) {
   console.log(`${prodotti[i].nome}: rating ${prodotti[i].rating} → ${myStars(prodotti[i].rating)}`);
}


/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function filtroPerCategoria(lista, categoria) {
   const trovati = [];
   for (const p of lista) {
      if (p.categoria === categoria) {
         trovati.push(p);
      }
   }
   return trovati;
}

console.log(filtroPerCategoria(prodotti, 'mobili')); // verifica dei possibili argomenti
console.log(filtroPerCategoria(prodotti, 'Cancelleria'));

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function filtroDisponibiltaERating(prodotti) {
   const filtro = [];
   for (let i = 0; i < prodotti.length; i++) {
      if (prodotti[i].disponibile === true && prodotti[i].rating >= 3) {
         filtro.push(prodotti[i]);
      }
   }
   return filtro;
}
console.log(filtroDisponibiltaERating(prodotti));

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const esercizi = document.querySelector("table");

function renderProdotti(prodotti) {
   for (let i = 0; i < prodotti.length; i++) {
      esercizi.innerHTML += `<tr>
       <td>${prodotti[i].nome} </td>
       <td> ${prodotti[i].prezzo}</td>
       <td> ${prodotti[i].categoria}</td>
       <td> ${prodotti[i].rating} </td>
       <td> ${myStars(prodotti[i].rating)}</td>
      </tr>`;
   }
}
renderProdotti(prodotti);


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
