"use strict";




  //  TYPEWRITER
const greeting = 'Sveiki,';
const nameLastname = "aš Audrius Adomavičius";
const pro = 'frontend wordpress programuotojas';
var cursor = document.createElement('div');



let i = 0;
function typeWriter() {


    if ( i < greeting.length) {
   document.querySelector(".greeting-hello").innerHTML += greeting.charAt(i);   
     document.querySelector(".greeting-hello").classList.add('cursor');
   i++; 
    if ( i >= greeting.length) {
        document.querySelector(".greeting-hello").classList.remove('cursor');
        typeWriter2();
      }    
    } 
    setTimeout(typeWriter, 200);  
};
 typeWriter();


let j = 0;
function typeWriter2() {
  let a = document.querySelector(".flashing");  
    if ( j < nameLastname.length) {
   document.querySelector(".name-lastname").textContent += nameLastname.charAt(j) ; 
   document.querySelector(".name-lastname").classList.add('cursor');
    j++; 
    if ( j >= nameLastname.length) {
        document.querySelector(".name-lastname").classList.remove('cursor');
        typeWriter3();
       }  
} 
    setTimeout(typeWriter2, 200); 
};

let k = 0;
function typeWriter3() {
    if ( k < pro.length) {
   document.querySelector(".profession").innerHTML += pro.charAt(k); 
   document.querySelector(".profession").classList.add('cursor');
    k++;    
} 
    setTimeout(typeWriter3, 200);   
};



    // DELAY
     $(document).ready(function(){
        $(".vertical-line, .description, .btn, .language, .about-work, .social-link, .right-side, .about-mobile, .work-mobile").delay(1500).fadeIn(19000);
    });



    

// BUTTON, LINK
   document.querySelector(".about").onclick = function () {
     document.querySelector('.about').style.color = "var(--green-2)";
     document.querySelector('.work').style.color = "var(--green-1)";
  document.getElementById('my-work').click();
  }
document.querySelector(".work").onclick = function () {
      document.querySelector('.work').style.color = "var(--green-2)";
     document.querySelector('.about').style.color = "var(--green-1)";
  document.getElementById('about-me').click();
  }   

 


