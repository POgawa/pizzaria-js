allToppings = [
  "cheese",
  "pepperoni",
  "red onions",
  "green onions",
  "green peppers",
  "anchovies",
  "mushrooms",
  "olives",
  "artichokes",
  "chicken",
  "beef",
  "salami" ]

function Pizza(size, toppings) {
  this.toppings = []
  this.size = size
  this.cost = 0
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping)
};

Pizza.prototype.calculateCost = function() {
  this.cost += this.toppings.length * 1.50
  if (this.size === "large") {
    this.cost += 15
  } else if (this.size === "medium") {
    this.cost += 10
  } else {
    this.cost += 5
  }
  return this.cost
};
