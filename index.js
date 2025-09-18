function LoadImageFromFiles(){
    const imageElement = document.getElementById('mainImage');
    const randomImageNumber = Math.floor(Math.random() * 6) + 1;

    imageElement.src = `images/${randomImageNumber}.jpg`;   
    imageElement.alt = `Random Sean Picture ${randomImageNumber}`;

    console.log(`Loaded image: images/${randomImageNumber}.jpg`);
}

window.onload = LoadImageFromFiles; 

function reloadImage() {
    LoadImageFromFiles();
}
