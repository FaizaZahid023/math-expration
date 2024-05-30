var favoriteSnack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;

var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;

document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write(" Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "<br>");
