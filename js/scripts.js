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