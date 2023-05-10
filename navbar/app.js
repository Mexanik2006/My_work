let btn=document.querySelector('.nav-toggle');
let links=document.querySelector('.links');
btn.addEventListener('click',()=>{
    // if(links.classList.contains('show-list')){
    //     links.classList.remove('show-list');
    // }
    // else{
    //     links.classList.add('show-link');
    // }
    links.classList.toggle('show-link');
})