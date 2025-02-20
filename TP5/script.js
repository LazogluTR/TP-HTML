const baseImages = [];
for (let i = 1; i <= 10; i++) {
  baseImages.push(`Image/img${i}.png`);
}


let cards = [];
baseImages.forEach((img, index) => {

  cards.push({ src: img, id: `${index + 1}a` });
  cards.push({ src: img, id: `${index + 1}b` });
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
}
shuffleArray(cards);

const memoryBoard = document.getElementById('memory-board');

cards.forEach((card) => {
  
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');
  
  cardContainer.dataset.cardId = card.id;

  const cardImage = document.createElement('img');
  cardImage.src = card.src;
  cardImage.alt = "Carte Memory";

  
  cardContainer.appendChild(cardImage);
  
  memoryBoard.appendChild(cardContainer);

  cardContainer.addEventListener('click', () => {
    
    cardContainer.classList.toggle('revealed');
  });
});