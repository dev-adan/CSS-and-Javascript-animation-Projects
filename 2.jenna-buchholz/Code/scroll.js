const pixelsTag = document.querySelector('div.pixels');
const bodyTag = document.querySelector('body');
const progressTag = document.querySelector('div.progress');
const sections = document.querySelectorAll('section');
const clientTag = document.querySelector('div.client');
const pageTag = document.querySelector('div.page');
const headerTag = document.querySelector('header')

//when we scroll the page update the pixel tag to how far we scrolled

document.addEventListener('scroll',function(){
  const pixels = window.pageYOffset;
  pixelsTag.innerHTML = pixels


})

//when we scroll the mage, make the scroll bar track the distance

document.addEventListener('scroll',function(){
  const pixels = window.pageYOffset;
  const pageHeight = bodyTag.getBoundingClientRect().height;
  const totalScrollableDistance = pageHeight - window.innerHeight;

  const percentage = pixels / totalScrollableDistance

  progressTag.style.width = `${percentage * 100}%`;

})


//when we scroll the page, we want to see how far the page we've scrolled
//then we will see, if we passed a specific section
//then update the text color in the header

document.addEventListener('scroll',function () {
  const pixels = window.pageYOffset;

 

  sections.forEach(section => {
    if(section.offsetTop - 100 <= pixels){
    
      clientTag.innerHTML = section.getAttribute('data-client')
      pageTag.innerHTML =  section.getAttribute('data-page')

      if(section.hasAttribute('data-is-dark')){
       
        headerTag.classList.add('white');
        progressTag.classList.add('white')
        
      }else{
        headerTag.classList.remove('white')
        progressTag.classList.remove('white')

      }

    }
  })
})

//parallax effect 

document.addEventListener('scroll', function(){
  const topViewPort = window.pageYOffset;
  const midViewPort = topViewPort + (window.innerHeight/2);

  sections.forEach(section => {
    const topSection = section.offsetTop;
    const midSection = topSection + (section.offsetHeight/2)

    const distanceToSection = midViewPort - midSection
    console.log(distanceToSection)
  })
})
