
// test for grams converesion to ounces 


//funct




//example 

 const classButt = document.getElementById('test-butt');


function buttonClick() {
    const gramsClass = document.getElementsByClassName('grams');
    const o2g2 = 28.35;


    for (let i = 0; i < gramsClass.length; i++){

    const gramsNum2 = parseFloat(gramsClass[i].textContent);
    const ounces2 = gramsNum2 / o2g2;
    

    gramsClass[i].innerHTML = ounces2.toFixed(2) + 'oz';
    }
    this.onclick = notButtonClick; //function reference to nBC
}

function notButtonClick() {
    const gramsClass = document.getElementsByClassName('grams');
    const o2g2 = 28.35;


    for (let i = 0; i < gramsClass.length; i++){

    const gramsNum2 = parseFloat(gramsClass[i].textContent);
    const ounces2 = gramsNum2 * o2g2;
    

    gramsClass[i].innerHTML = ounces2.toFixed(0) + 'g';
    }
    this.onclick = buttonClick; //function reference to original function
}

classButt.onclick = buttonClick; //again, function reference, no ()