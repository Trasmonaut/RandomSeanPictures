function LoadImageFromFiles(){
    const imageElement = document.getElementById('mainImage');
    const randomImageNumber = Math.floor(Math.random() * 11) + 1;

    imageElement.src = `images/${randomImageNumber}.jpg`;   
    imageElement.alt = `Random Sean Picture ${randomImageNumber}`;

    console.log(`Loaded image: images/${randomImageNumber}.jpg`);
}

window.onload = LoadImageFromFiles; 

function reloadImage() {
    LoadImageFromFiles();
}


function submitImage() {
    const string = "https://wa.me/18687536045?text=Hello%2C%20I%20have%20a%20picture%20of%20Sean%20that%20I%20would%20like%20to%20share!";
    window.open(string, '_blank');
}
