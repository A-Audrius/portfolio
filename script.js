"use strict";





var greeting = 'Sveiki,';
const username = "aš Audrius Adomavičius";
const pro = 'frontend wordpress programuotojas';
var cursor = document.createElement('div');


// document.body.appendChild(cursor);

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




// KITAS


// const div = document.querySelector(".username");
// // const username = document.querySelector('.username')


// function textTypingEffect(element, username,  j = 0) {
//     if (j === 0) {
//         element.textContent = "";
//     }
//     element.textContent += username[j] ;
   
//     if (j === username.length - 1) {
//         typing = "";
//             return;
//         }
//     //       if ( j === 20) {
//     //     textTypingEffect(div3, pro);
//     //    } 
//         setTimeout(() => textTypingEffect(element, username, j + 1), 200)  
//     }
//     textTypingEffect(div, username);




// function textTypingEffect(element, pro,  k = 0) {
//     if (k === 0) {
//         element.textContent = "";
//     }
//     element.textContent += pro[k] ;

//     if (k === pro.length - 1) {
//         typing = "";
//             return;
//         }
//         setTimeout(() => textTypingEffect(element, pro, k + 1), 160)  
//     }

    // let p;
// function t5() {

//     // let out = '';
//     for ( let p = 0; p <= 3; p++ ){
//          if ( p === 0) {
//             typeWriter();
//            } 
//         //    if ( p === 1) {
//         //     typeWriter2();
//         //    }   
  
//     } 
   
    // document.querySelector('.out-5').innerHTML = out;
// }

// t5();


     $(document).ready(function(){

 
        $(".vertical-line, .description, .btn, .language, .about-work, .social-link, .right-side, .about-mobile, .work-mobile").delay(500).fadeIn(14000);
        // $(".description").css({"color": "yellow"}).delay(500).fadeIn(14000);

        // $(".horizontal-line").addClass("@media only screen and (max-width: 992px)").delay(500).fadeIn(14000);
    });





var header = document.querySelector(".about-work");
var btns = header.getElementsByTagName("p");
for (var p = 0; p < btns.length; p++) {
  btns[p].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}






 


