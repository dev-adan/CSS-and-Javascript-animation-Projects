
//left
const leftPayBill = document.querySelector('.left-pay-bill');
const landingPageLeft  = document.querySelector('.landing-page-left');
const peopleFirst  = document.querySelector('.people-first');
const medicalProvider  = document.querySelector('.medical-provider');
//right
const RightPayBill = document.querySelector('.right-pay-bill');
const landingPageRight  = document.querySelector('.landing-page-right');
const whyPay  = document.querySelector('.why-pay');
const madeEasy  = document.querySelector('.made-easy');


const left = [leftPayBill,landingPageLeft,peopleFirst,medicalProvider ]
const right = [RightPayBill, landingPageRight,whyPay, madeEasy]




const observerLeft =  new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
        entry.target.classList.toggle('show-left', entry.isIntersecting)
        // if(entry.isIntersecting) observerLeft.unobserve(entry.target)
        
    })
}, {
    threshold : .5,
    rootMargin : '80px',
 
})


const observerRight =  new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show-right', entry.isIntersecting)
        // if(entry.isIntersecting) observerRight.unobserve(entry.target)
    })
}, {
    threshold : .5,
    rootMargin : '80px',
})


//left and right
left.forEach(l => {
    observerLeft.observe(l);
})

right.forEach(r => {
    observerRight.observe(r);
})

