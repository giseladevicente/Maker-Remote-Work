document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('#navbar');
    const footerId = document.querySelector("#footer-id");
    const closeBtn = document.querySelector('.close-btn');
    const featuresBtn = document.querySelector('#features-btn');
    const featuresUl = document.querySelector('.features-ul');
    const companyBtn = document.querySelector('#company-btn');
    const companyUl = document.querySelector('.company-ul');
    const featuresBtnArrow = document.querySelector('#features-btn-arrow');
    const companyBtnArrow = document.querySelector('#company-btn-arrow');


    hamburgerMenu.addEventListener('click', () => {      
        navbar.classList.toggle('hidden');
        footerId.classList.toggle('hidden');
    })

    closeBtn.addEventListener('click', () => {
            navbar.classList.toggle('hidden'); 
            footerId.classList.toggle('hidden');
    });

    featuresBtn.addEventListener('click', () => {
        featuresUl.classList.toggle('hidden');
        featuresBtnArrow.style.transform = 'transform 0.3s ease'
        featuresBtnArrow.style.transform = (featuresBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
        
    });

    companyBtn.addEventListener('click', () => {
        companyUl.classList.toggle('hidden'); 
        companyBtnArrow.style.transform = 'transform 0.3s ease'
        companyBtnArrow.style.transform = (companyBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
        
    });




    
});

