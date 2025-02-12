/*****************************************************
 * script.js - TP3 Memory
 ****************************************************/

/**
 * Étape 1 & 2 : Préparer le tableau des images
 * On veut 10 images (img1.png à img10.png), chacune en double.
 */

// On crée un tableau initial avec les chemins (ou noms) d'images
const baseImages = [];
for (let i = 1; i <= 10; i++) {
  baseImages.push(`Image/img${i}.png`);
}

// On duplique chaque image pour avoir 20 cartes
let cards = [];
baseImages.forEach((img, index) => {
  // On peut nommer les id "1a", "1b", "2a", "2b", etc. si on le souhaite
  // Mais dans l'exemple suivant, on se contente d'injecter un dataset
  cards.push({ src: img, id: `${index + 1}a` });
  cards.push({ src: img, id: `${index + 1}b` });
});

/**
 * Étape 3 : Mélanger le tableau de cartes
 * Algorithme de Fisher-Yates shuffle
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // Échange
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
}
shuffleArray(cards);

/**
 * Étape 4 : Générer dynamiquement les cartes dans la page
 * On crée un élément <div class="card-container"> contenant
 *   un <img> avec la bonne source
 */
const memoryBoard = document.getElementById('memory-board');

cards.forEach((card) => {
  // Conteneur principal
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');
  // On stocke l'id ou l'information de la carte si besoin
  cardContainer.dataset.cardId = card.id;

  // L'image cachée
  const cardImage = document.createElement('img');
  cardImage.src = card.src;
  cardImage.alt = "Carte Memory";

  // On insère l'image dans la carte
  cardContainer.appendChild(cardImage);
  // On insère la carte dans le board
  memoryBoard.appendChild(cardContainer);

  // Étape 4 suite : au clic, on "révèle" ou "cache" la carte
  cardContainer.addEventListener('click', () => {
    // Toggle (basculer) la classe "revealed" pour montrer/masquer
    // Selon le TP, on veut juste enlever l’opacité pour la rendre visible
    // Ici, on fait un simple toggle
    cardContainer.classList.toggle('revealed');
  });
});

/**
 * À ce stade, vous avez 20 images, mélangées, qui s'affichent
 * en grille (5x4) grâce au CSS.
 * Chaque clic rend la carte "visible" ou "cachée".
 *
 * Pour un vrai jeu du Memory, il faudrait :
 *   - Gérer la sélection de deux cartes
 *   - Vérifier si les deux cartes correspondent
 *   - Les laisser révélées ou les recacher
 *   - Gérer les paires trouvées, et compter le score
 *
 * Mais l'énoncé du TP montre surtout la mise en place
 * CSS + insertion dynamique + mélange.
 */
