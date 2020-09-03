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

const SeededRecipe = {
   
 title: "Seeded Loaf",
 time: "2 hrs 30 mins",
 source: "https://www.bbcgoodfood.com/recipes/easy-white-bread",

 ingredients = (name,amount,unit)=>{
     this.name = name;
     this.amount = amount;
     this.unit = unit;
 }
     
}

ingredients.prototype.convert = function () {
    
    
}


/*const Ingredient = (name,amount,unit) => {
    this.name = name;
    this.amount = amount;
    this.unit = unit;
} 


Ingredient.prototype.writeName = function () {
    return this.amount + this.unit + this.name;
}

const flour = new Ingredient("Flour",500,"g");

console.log(flour);
*/


let rangeValue = document.getElementById("points").value;

console.log(rangeValue);