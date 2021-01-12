function Pizza(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = [];
}
var sizePrice = {
    large: 600,
    medium: 500,
    extraLarge: 900
};
var toppingPrice = [{
    meat: {
        medium: 70,
        large: 100,
        extraLarge: 120
    },
    vegies: {
        medium: 50,
        large: 70,
        extraLarge: 100
    },
    sausage: {
        medium: 120,
        large: 150,
        extraLarge: 180
    }
}];

var crustPrice = {
    crispy: 300,
    stuffed: 200,
    gluten: 100
};

function sizeCalcPrice(size) {
    if (size === "small") {
        return sizePrice.small * 1;
    } else if (size === "medium") {
        return sizePrice.medium * 1;
    } else {
        return sizePrice.large * 1;
    }
}

function crustCalcPrice(crust) {
    if (crust === "crispy") {
        return crustPrice.crispy * 1;
    } else if (crust === "stuffed") {
        return crustPrice.stuffed * 1;
    } else {
        return crustPrice.gluten * 1;
    }
}

function toppingsCalcPrice(toppings) {
    var noOfTopping = 0;
    for (i = 0; i < toppings.length; i++) {
        if (toppings[i] == "pepperoni") {
            noOfTopping += 100;
        }
        if (toppings[i] == "veges") {
            noOfTopping += 50;
        }
        if (toppings[i] == "bacon") {
            noOfTopping += 75;
        }
    }
    return noOfTopping * 1;
}


function checkPepperoni(topping) {
    return topping === "pepperoni";
}


$("document").ready(function() {

    function getPizzaSize() {
        return $("#pizza-size")
            .find(":selected")
            .val();
    }

    function getCrust() {
        return $("#pizza-crust")
            .find(":selected")
            .val();
    }

    function getToppings() {
        var toppingList = [];
        $(".toppings :checked").each(function() {
            toppingList.push($(this).val());
        });
        return toppingList;
    }


    $("form#myform").submit(function(event) {
        event.preventDefault();
        var pizzaSize = getPizzaSize();
        var crust = getCrust();
        var toppingList = getToppings();

        var newPizza = new Pizza(pizzaSize, crust);
        newPizza.toppings.push(toppingList);
        $("#cart").hide();
        $("#table").show();
        $(".checkout").show();
        var oneOrder =
            sizeCalcPrice(pizzaSize) +
            crustCalcPrice(crust) +
            toppingsCalcPrice(toppingList);


        $("#items").append(
            "<tr>" +
            "<td>" +
            newPizza.size +
            "</td>" +
            "<td>" +
            "<p>" +
            newPizza.crust +
            "</p>" +
            "</td>" +
            "<td>" +
            newPizza.toppings +
            "</td>" +
            "<td>" +
            oneOrder +
            "</td>" +
            "</tr>"
        );
    });
    var totalQuantity = parseInt($("#quantity").val());

    function calcTotal() {
        var priceOnePizza =
            sizeCalcPrice(getPizzaSize()) +
            crustCalcPrice(getCrust()) +
            toppingsCalcPrice(getToppings());
        return priceOnePizza;
    }
    var pizzaList = [];

    $("#orderbtn").on("click", function() {
        totalQuantity += 1;
        $("#quantity").text(totalQuantity);
        pizzaList.push(calcTotal());
    });


    $("#gettotal").click(function() {
        var total = 0;
        pizzaList.forEach(function(pizza) {
            total += pizza;
        });
        $("#money").text(total);
    });


    $("#myModel").click(function() {
        var deliver = confirm(
            "We do deliveries for the low price of Ksh 100. Would you like us to deliver your order?"
        );
        if (deliver == true) {
            var place = prompt("Enter your location");
            $("#place").text(place);
            $("#success").show();
        } else {
            alert('Please pick up your order from our premises within one hour')
        }

        $("#pizza-size").val("");
        $("#pizza-crust").val("");
        $("#items").remove();
        $("#quantity").text(0);
    });
});