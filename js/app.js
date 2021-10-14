const loding= document.querySelector('.loding');

const html_elem=document.querySelector('html');
/* loding listner */
window.addEventListener('load' , () => {
    loding.classList.add('vanish-away');
    loding.classList.add('loding-place');
    html_elem.classList.add('showing');
})