 const screens = document.querySelectorAll('.screen');
  
 function toggleOn(){
this.classList.toggle('open');
this.classList.toggle('be-active') 
 }

 screens.forEach(screen=>screen.addEventListener('click',toggleOn));
  