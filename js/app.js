'use strict';

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


const app = {
    testButt: document.getElementById('test-butt'),
    range: document.getElementById('points'),
    servNum: document.getElementById('serv-num'),
    recipeIngreds: document.getElementsByClassName('ingreds-full'),
    servForm: document.getElementById('servings'),
    ingredsNameClass: document.getElementsByClassName('ingreds-name'),
    ingredsQuant: document.getElementsByClassName('ingreds-quant'),
};

   
const Ingredients = function(name, amount, unit){
    this.name = name;
    this.amount = amount; 
    this.unit = unit;
    this.write = function(id) {

        id.innerHTML = this.amount + this.unit + ' ' + this.name;
    };

    this.writeName = function(id) {

        id.innerHTML = this.name;
    };

    this.writeQuant = function(id) {

        id.innerHTML = this.amount + this.unit;
    };


    this.unitsAdjust = function() {
        if (this.amount > 999){
            switch (this.unit){
                case 'g':
                    this.amount = this.amount / 1000;
                    this.unit = 'kg';
                    break;
    
                case 'ml':
                    this.amount = this.amount / 1000;
                    this.unit = 'l';
                    break;
                
                default:
                    break;
            }
        }

        else{ switch (this.unit){
            case 'kg':
                this.amount = this.amount * 1000;
                this.unit = 'g';
                break;

            case 'l':
                this.amount = this.amount * 1000;
                this.unit = 'ml';
                break;
            
            default:
                break;
        }

        }
    };
    
};

 
const write2Class = function(array = SeededRecipe.ingredsName, textLoc = app.ingredsNameClass) {
    for (let i = 0, index = 0; i < array.length; index++, i++) {
        let element1 = array[index];
        let element = textLoc[i];
        if (i === index) {
            element1.write(element);
        }
    }
};

const writeName2Class = function(array = SeededRecipe.ingredsName, textLoc = app.ingredsNameClass) {
    for (let i = 0, index = 0; i < array.length; index++, i++) {
        let element1 = array[index];
        let element = textLoc[i];
        if (i === index) {
            element1.writeName(element);
        }
    }
};

const writeQuant2Class = function(array = SeededRecipe.ingredsName, textLoc = app.ingredsNameClass) {
    for (let i = 0, index = 0; i < array.length; index++, i++) {
        let element1 = array[index];
        let element = textLoc[i];
        if (i === index) {
            element1.writeQuant(element);
        }
    }
};

   
Ingredients.prototype.convert = function() {
    
    this.unitsAdjust();

    switch (this.unit) {
        case 'g':
            this.amount = (this.amount / 28.35).toFixed(2);
            this.unit = 'oz';
            break;

        case 'kg':
            this.amount = (this.amount * 2.205).toFixed(2);
            this.unit = 'lb';
            break;

        case 'lb':
            this.amount = (this.amount / 2.205).toFixed(2);
            this.unit = 'kg';
            break;

        case 'ml':
            this.amount = (this.amount / 237).toFixed(2);
            this.unit = 'cups';
            break;

        case 'l':
            this.amount = (this.amount / 3.785).toFixed(2);
            this.unit = 'US gal lqd';
            break;  
        
        case 'US gal lqd':
            this.amount = (this.amount * 3.785).toFixed(2);
            this.unit = 'l';
            break;  

        case 'oz':
            this.amount = (this.amount * 28.35).toFixed(0);
            this.unit = 'g';
            break;
            
        case 'cups':
            this.amount = (this.amount * 237).toFixed(0);
            this.unit = 'ml';
            break;

        case 'C':
            this.amount = ((this.amount * 9/5) + 32).toFixed(0);
            this.unit = 'F';
            break;

        case 'F':
            this.amount = ((this.amount - 32) / (9/5)).toFixed(0);
            this.unit = 'C';
            break;

        default:
            break;
            
    }
    this.unitsAdjust();
    writeRecipe();
    

};

Ingredients.prototype.servReset = function() {
    if ((this.unit === 'g' || this.unit === 'ml'|| this.unit === 'tbsp' || this.unit === 'tsp')) {
        this.amount = (this.amount / app.rangeValue).toFixed(0);
    } else {
        this.amount = (this.amount / app.rangeValue).toFixed(2);
    }
    this.unitsAdjust();
};

Ingredients.prototype.servings = function() {
    if ((this.unit === 'g' || this.unit === 'ml' || this.unit === 'tbsp' || this.unit === 'tsp')) {
        this.amount = (this.amount * app.rangeValue).toFixed(0);
    } else {
        this.amount = (this.amount * app.rangeValue).toFixed(2);
    }

    this.unitsAdjust();
};

app.range.onchange = function() {
    app.rangeValue = this.value;
    app.servNum.innerHTML = app.rangeValue;
    
    SeededRecipe.ingredsTable.forEach(element => {
        element.servings();
        
    });
    writeRecipe();

    SeededRecipe.ingredsTable.forEach(element => {
        element.servReset();
    });

};



let allFlour = new Ingredients('flour', 500, 'g');
let breadFlour = new Ingredients('strong bread flour', 250, 'g');
let wholemealFlour = new Ingredients('wholemeal flour', 250, 'g');
let salt = new Ingredients('salt', 2, 'tsp');
let water = new Ingredients('water', 300, 'ml');
let seeds = new Ingredients('seeds', 1, 'tbsp');
let yeast = new Ingredients('yeast', 7, 'g');
let oil = new Ingredients('olive oil', 3, 'tbsp');
let tempFan = new Ingredients('fan/', 200, 'C');
let temp = new Ingredients('normal/', 220, 'C');




const SeededRecipe = {
   
    title: 'Seeded Loaf',
    time: '2 hrs 30 mins',
    source: 'https://www.bbcgoodfood.com/recipes/easy-white-bread',
    
    ingredsAll: [allFlour, breadFlour, wholemealFlour, salt, yeast, seeds, water, oil, temp, tempFan],
    ingredsTable: [allFlour, breadFlour, wholemealFlour, salt, yeast, seeds, water, oil],
    ingredsName: [allFlour, salt, yeast, seeds, water, oil],
    ingredsRecipe: [allFlour, salt, yeast, seeds, water, oil, tempFan, temp]
};

const convertAll = function () {
    SeededRecipe.ingredsAll.forEach(element => {
        element.convert();
    });
}



app.testButt.onclick = function() {
    convertAll();
    console.log(tempFan.amount)
};

const writeRecipe = function(){
    write2Class(SeededRecipe.ingredsRecipe, app.recipeIngreds);
    writeName2Class(SeededRecipe.ingredsName, app.ingredsNameClass);
    writeQuant2Class(SeededRecipe.ingredsTable, app.ingredsQuant);
};

writeRecipe();