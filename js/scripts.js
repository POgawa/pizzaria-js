
function Pizza(size, toppings) {
  this.toppings = 0
  this.size = size
  this.cost = 0
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings = this.toppings+=1
};

Pizza.prototype.calculateCost = function() {
  this.cost += this.toppings * 1.00
  if (this.size === "large") {
    this.cost += 15
  } else if (this.size === "medium") {
    this.cost += 10
  } else {
    this.cost += 5
  }
  return this.cost
};


$(document).ready(function(){

  $("#pizza").submit(function(event){

    var size = ($("input#input-size").val());

    var toppings = ($("input#input-toppings").val());

    var pizza = new Pizza(size, toppings);
    var cost = pizza.calculateCost();
    $("#output").text(pizza.cost);

    $("#result").show();

    event.preventDefault();

  });
});
