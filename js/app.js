const loading= document.querySelector('.loading');
const html_body=document.querySelector('html');
/* loding listner */
window.addEventListener('load' , () => {
    loading.classList.add('vanish-away');
    loading.style.display="none";
    html_body.style.overflow="scroll";
    html_body.style.overflowX="hidden";
})
