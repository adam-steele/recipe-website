const uk2us = document.getElementById('test-butt');


const gramsConvert = function () {
    const grams = document.getElementById('test-grams');
    const o2g = 28.35;

    const gramsNum = parseFloat(grams.textContent);
    const ounces = gramsNum / o2g;
    grams.innerHTML = ounces.toFixed(2) + 'oz';


};


uk2us.addEventListener ('click', gramsConvert);



// ingredient object 

const Ingredient = function (name,amount,unit) {
    this.name = name;
    this.amount = amount;
    this.unit = unit;
} 


Ingredient.prototype.writeName = function () {
    return this.amount + this.unit + this.name;
}

const flour = new Ingredient("Flour",500,"g");

console.log(flour);