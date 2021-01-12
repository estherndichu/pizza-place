function Pizza(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = [];
}
var sizePrice = {
    medium: 800,
    large: 1200,
    extraLarge: 1400
};
var toppingPrice = [{
    meat: {
        medium: 100,
        large: 150,
        extraLrge:200
    },
    sausage: {
        medium: 150,
        large: 200,
        extraLarge: 250
    },
    vegies: {
        medium: 100,
        large: 150,
        extralarge: 200
    }
}];

var crustPrice = {
    crispy: 300,
    stuffed: 200,
    glutenFree: 300,
};
function calculateSizePrice(size) {
    if (size === "medium") {
        return sizePrice.medium * 1;
    } else if (size === "large") {
        return sizePrice.large * 1;
    } else {
        return sizePrice.extraLarge * 1;
    }
};

function calculateCrustPrice(crust) {
    if (crust === "crispy") {
        return crustPrice.crispy * 1;
    } else if (crust === "stuffed") {
        return crustPrice.stuffed * 1;
    } else {
        return crustPrice.glutenFree * 1;
    }
}

function calculateToppingsPrice(toppings) {
    var noOfTopping = 0;
    for (i = 0; i < toppings.length; i++) {
        if (toppings[i] == "meat") {
            noOfTopping += 100;
        }
        if (toppings[i] == "sausage") {
            noOfTopping += 150;
        }
        if (toppings[i] == "veggies") {
            noOfTopping += 100;
        }
    }
    return noOfTopping * 1;
};


function checkPepperoni(topping) {
    return topping === "pepperoni";
};
