describe("Pizza", function() {
  it("is initialized with set properties", function() {
    var pizza = new Pizza("large")
    expect(pizza.size).to.equal("large")
    expect(pizza.cost).to.equal(0)
    expect(pizza.toppings).to.eql([])

  });

});
