const loding= document.querySelector('.loding');
const html_elem=document.querySelector('html');
window.addEventListener('load' , () => {
    loding.classList.add('vanish-away');
    html_elem.classList.add('showing');
})