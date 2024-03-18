"use strict";




  //  TYPEWRITER
var greeting = 'Sveiki,';
const username = "aš Audrius Adomavičius";
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
    if ( j < username.length) {
   document.querySelector(".username").textContent += username.charAt(j) ; 
   document.querySelector(".username").classList.add('cursor');
    j++; 
    if ( j >= username.length) {
        document.querySelector(".username").classList.remove('cursor');
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




// OPEN CLOSE TAB
function openTab(evt, aboutWork) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  document.getElementById(aboutWork).style.display = "block";
  evt.currentTarget.className += " active";
}
 


