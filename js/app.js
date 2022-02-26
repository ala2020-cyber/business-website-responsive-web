const loading= document.querySelector('.loading');
/* loding listner */
window.addEventListener('load' , () => {
    loading.classList.add('vanish-away');
    loading.style.display="none";
})
