const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const myForm = document.querySelector('#my-form');
const imgModal = document.querySelector('.image-modal');
const imgInModal = document.querySelector('.image-modal > img');
const galleryImgs = document.querySelectorAll('.gallery > img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
function closeModal() {
    overlay.classList.remove('visible');
    modal.classList.remove('visible');
    modal.replaceChildren()
}
function openModal() {
    overlay.classList.add('visible');
    modal.classList.add('visible');
}
function addsubscribe(email) {
    const topic = document.createElement('h1');
    topic.innerText =  'Thanks for subscribing!';
    modal.appendChild(topic);
    const message = document.createElement('p');
    message.innerText = 'I will send news email to';
    modal.appendChild(message);
    const showEmail = document.createElement('p');
    showEmail.innerText = email;
    modal.appendChild(showEmail);
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('close');
    closeBtn.innerText = 'X';
    modal.appendChild(closeBtn);
    const primaryBtn = document.createElement('button');
    primaryBtn.classList.add('primary-btn');
    primaryBtn.innerText = 'OK';
    modal.appendChild(primaryBtn);
    closeBtn.addEventListener('click', closeModal);
    primaryBtn.addEventListener('click', closeModal);

}

myForm.addEventListener('submit', function(e) {
    const subscribeEmail = document.querySelector('#subscribe-email');
  e.preventDefault();
  openModal();
  addsubscribe(subscribeEmail.value);
  myForm.reset();

});

overlay.addEventListener('click',()=>{
    if(imgModal.style.display === 'block') {
        return;
    }
    closeModal();
})

galleryImgs.forEach( img => {
  img.addEventListener('click',(e)=> {
      e.preventDefault();
      imgModal.style.display = 'block';
      imgInModal.src =  img.src;
      overlay.classList.toggle('visible');
      const closeImg = imgModal.querySelector('.close');
      closeImg.addEventListener('click',()=>{
          imgModal.style.display = 'none';
          overlay.classList.remove('visible');
      })

  })

  })

prev.addEventListener('click',()=>{
    const currentImg = imgInModal.src;
    const currentImgIndex = Array.from(galleryImgs).findIndex(img => img.src === currentImg);
    const prevImgIndex = currentImgIndex === 0 ? galleryImgs.length - 1 : currentImgIndex - 1;
    imgInModal.src = galleryImgs[prevImgIndex].src;
})
next.addEventListener('click',()=>{
    const currentImg = imgInModal.src;
    const currentImgIndex = Array.from(galleryImgs).findIndex(img => img.src === currentImg);
    const nextImgIndex = currentImgIndex === galleryImgs.length - 1 ? 0 : currentImgIndex + 1;
    imgInModal.src = galleryImgs[nextImgIndex].src;
})

