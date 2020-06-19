
// test for grams converesion to ounces 


//funct




//example 

const classButt = document.getElementById('test2-butt');

const gramsConvert2 = function () {
    const gramsClass = document.getElementsByClassName('grams');
    const o2g2 = 28.35;


    for (let i = 0; i < gramsClass.length; i++){

    const gramsNum2 = parseFloat(gramsClass[i].textContent);
    const ounces2 = gramsNum2 / o2g2;
    

    gramsClass[i].innerHTML = ounces2.toFixed(0) + 'oz';
    }
};


classButt.addEventListener ('click', gramsConvert2);