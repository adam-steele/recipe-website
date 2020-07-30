
//  conversion uk 2 us 

 const classButt = document.getElementById('test-butt');
 const gramsClass = document.getElementsByClassName('grams');
 const o2g = 28.35;
 const mlClass = document.getElementsByClassName('ml');
 const ml2c = 237;
 const tempClass = document.getElementsByClassName('temp');
 const C2F = 9/5;

function buttonClick() {

    for (let i = 0; i < gramsClass.length; i++){

        const gramsNum = parseFloat(gramsClass[i].textContent);
        const ounces = gramsNum / o2g;
        

        const newWeight = (gramsClass[i].innerHTML = ounces.toFixed(2) + 'oz');
    }


    for (let i = 0; i < tempClass.length; i++){
        
        const tempNum = parseFloat(tempClass[i].textContent);
        const Fahr = tempNum * C2F + 32;


        const newTemp = (tempClass[i].innerHTML = Fahr  + "F");

    };
        


    for (let i = 0; i < mlClass.length; i++){

      const mlNum = parseFloat(mlClass[i].textContent);
      const cups = mlNum / ml2c;
      const cupsRound =  cups.toFixed(2);
      mlClass[i].innerHTML = cupsRound + 'cups';
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


      for (let i = 0; i < tempClass.length; i++){
        
        const tempNum = parseFloat(tempClass[i].textContent);
        const Fahr = tempNum / C2F - 32;

        const newTemp = (tempClass[i].innerHTML = Fahr + "C");

    };





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


//check value of range 
const $range = $('#points');
const $servNum = $('.serv-num');
const servVal = $($servNum).val;
console.log(servVal);
const $ingred = $('.ingred');
const $servCalc = $('#servings')
const ingred = document.getElementsByClassName('ingred');
const servButt = document.getElementById('serv-butt');
const rangeValue = document.getElementById('points').value;
console.log(rangeValue);
//put this value in text label span 
//update value on range change 

const $rangeVal =  $range.on( "input", function() {
   for (let index = 0; index < $servNum.length; index++) {
       const element = $servNum[index];
       $servNum.html( $(this).val() );
   };

   for (let i = 0; i < ingred.length; i++){
    const rangeV = this.value;   
    const ingredNum = parseFloat(ingred[i].textContent);
    let servRes = ingredNum * rangeV;

    const newServ = (ingred[i].innerHTML = servRes + "g");

    };

});
