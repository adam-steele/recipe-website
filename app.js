
//  conversion uk 2 us 

 const classButt = document.getElementById('test-butt');
 const gramsClass = document.getElementsByClassName('grams');
 const o2g = 28.35;
 const mlClass = document.getElementsByClassName('ml');
 const ml2c = 237;
 const mlNumInitial = parseFloat(mlClass.textContent);



function buttonClick() {

    for (let i = 0; i < gramsClass.length; i++){

        const gramsNum = parseFloat(gramsClass[i].textContent);
        const ounces = gramsNum / o2g;
        

        gramsClass[i].innerHTML = ounces.toFixed(2) + 'oz';
    }

    for (let i = 0; i < mlClass.length; i++){

      const mlNum = parseFloat(mlClass[i].textContent);
      const cups = mlNum / ml2c;

      mlClass[i].innerHTML = cups.toFixed(2) + 'cups';
    }

    this.onclick = notButtonClick; //function reference to nBC
}

function notButtonClick() {
    
    for (let i = 0; i < gramsClass.length; i++){

    const gramsNum = parseFloat(gramsClass[i].textContent);
    const ounces = gramsNum * o2g;

    gramsClass[i].innerHTML = ounces.toFixed(0) + 'g';

    }

    for (let i = 0; i < mlClass.length; i++){

        const mlNum = parseFloat(mlClass[i].textContent);
        const cups = mlNum * ml2c;
  
        mlClass[i].innerHTML = cups.toFixed(2) + 'ml';
      }

    this.onclick = buttonClick; //function reference to original function
}

classButt.onclick = buttonClick; //again, function reference, no ()

//scroll 

const header = $("header");
const nav = $("nav");

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
       header.css("display", "none")
       nav.addClass("navScroll")

    } 

    else {
        header.css("display", "grid")
       nav.toggleClass("navScroll")
        
    }
}

window.onscroll = function() {scrollFunction()};