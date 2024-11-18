const images = document.querySelectorAll('.Rectangle23, .Rectangle24, .Rectangle25, .Rectangle26, .Rectangle27, .Rectangle28');

const modal = document.createElement('div');
const modalImg = document.createElement('img');
const closeBtn = document.createElement('span');

modal.classList.add('modal');
modalImg.classList.add('modal-content');
closeBtn.classList.add('close');
closeBtn.innerHTML = '&times;';
modal.appendChild(closeBtn);
modal.appendChild(modalImg);
document.body.appendChild(modal);

images.forEach(image => {
    image.addEventListener('click', () => {
        const fullsizeImage = image.src;
        modalImg.src = fullsizeImage;
        modal.style.display = 'flex'; 
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; 
    }
});