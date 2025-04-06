let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
})

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}

const header = document.querySelector('header')

window.onscroll = function(){
    if(document.documentElement.scrollTop > 5){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}




// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select the content section
const contentElements = document.querySelectorAll('.content');

// Loop through each selected element
contentElements.forEach((contentElement) => {

    // Apply GSAP animation to the entire content element
    gsap.from(contentElement, {
        scrollTrigger: {
            trigger: contentElement, 
            start: 'top 80%',      
            end: 'top 20%',        
            markers: false,       
            scrub: true,           
        },
        opacity: 0,               
        y: 50,                    
        duration: 0.1,           
        ease: 'power2.out'         
    });
});
