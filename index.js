
function loadSeanImage() {
    const imageFolder = "images";
    const imageCount = 16; // Update this to the number of images you have
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;
    const imagePath = `${imageFolder}/${randomIndex}.jpg`;
    document.getElementById("mainImage").src = imagePath;
}



function submitImage() {
    const string = "https://wa.me/18687536045?text=Hello%2C%20I%20have%20a%20picture%20of%20Sean%20that%20I%20would%20like%20to%20share!";
    window.open(string, '_blank');
}



const quotes = [];

fetch('quotes.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.trim().split('\n').slice(1); // remove header if any
    rows.forEach(row => {
      const [quote, author] = row.split(',');
      if (quote && author) {
        quotes.push({ 
          quote: quote.trim().replace(/^"|"$/g, ''), 
          author: author.trim().replace(/^"|"$/g, '') 
        });
      }
    });
    // Once quotes are loaded, show the first random one
    newQuote();
  })
  .catch(error => console.error('Error loading quotes:', error));

function newQuote() {
  if (quotes.length === 0) {
    console.error('No quotes available.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { quote, author } = quotes[randomIndex];

  document.getElementById("quote-text").textContent = quote;
  document.getElementById("quote-credits").textContent = `– ${author}`;
}

window.onload = () => {
    newQuote();
    loadSeanImage();
};