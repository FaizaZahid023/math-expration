// Store the prices, quantities, and shipping charges in variables
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;

// Calculate the total cost
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// Display the receipt in the browser
document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br>");
document.write("Total cost of your order is " + totalCost + "<br>");
