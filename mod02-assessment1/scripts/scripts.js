function calculateOrder() {
    const customerName = document.getElementById('customerName').value;
    const cola = parseInt(document.getElementById('cola').value) || 0;
    const fanta = parseInt(document.getElementById('fanta').value) || 0;
    const icedTea = parseInt(document.getElementById('icedTea').value) || 0;
    const lemonade = parseInt(document.getElementById('lemonade').value) || 0;
    const coffee = parseInt(document.getElementById('coffee').value) || 0;
    const hamburger = parseInt(document.getElementById('hamburger').value) || 0;
    const cheeseburger = parseInt(document.getElementById('cheeseburger').value) || 0;
    const grilledCheese = parseInt(document.getElementById('grilledCheese').value) || 0;
    const turkeyClub = parseInt(document.getElementById('turkeyClub').value) || 0;
    const roastBeef = parseInt(document.getElementById('roastBeef').value) || 0;
    const iceCream = parseInt(document.getElementById('iceCream').value) || 0;
    const chocolateCookie = parseInt(document.getElementById('chocolateCookie').value) || 0;
    const cheeseCake = parseInt(document.getElementById('cheeseCake').value) || 0;
    const nutellaCrepe = parseInt(document.getElementById('nutellaCrepe').value) || 0;
    const tiramisu = parseInt(document.getElementById('tiramisu').value) || 0;

    const drinksCost = 1.5 * (cola + fanta + icedTea + lemonade + coffee);
    const sandwichesCost = 5 * (hamburger + cheeseburger + grilledCheese + turkeyClub + roastBeef);
    const dessertsCost = 3 * (iceCream + chocolateCookie + cheeseCake + nutellaCrepe + tiramisu);

    const totalCost = drinksCost + sandwichesCost + dessertsCost;

    const orderSummary = `
        <h3>Order Summary for ${customerName}</h3>
        <p>Drinks Cost: $${drinksCost.toFixed(2)}</p>
        <p>Sandwiches Cost: $${sandwichesCost.toFixed(2)}</p>
        <p>Desserts Cost: $${dessertsCost.toFixed(2)}</p>
        <p>Total Cost: $${totalCost.toFixed(2)}</p>
    `;

    document.getElementById('orderSummary').innerHTML = orderSummary;
}
