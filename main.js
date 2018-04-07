'use strict';

fetch('https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json')
  .then(function(response){
    return response.json();
    console.log(json);
  })
  .then(function(json){
    const recipeName = json.recipe.name;
    const shippingCost = json.recipe['shipping-cost'];
    const currency = json.recipe.currency;
    const ingredients = json.recipe.ingredients;

    document.querySelector(".title--recipe-name").innerHTML = recipeName;
    // document.querySelector(".ingredients-list").innerHTML = shippingCost + currency;
    // document.querySelector(".purchase-finish").innerHTML = ingredients;
    let counter = 1;

    for (let i = 0; i < ingredients.length; i++) {
      let productName = ingredients[i].product;
      let productBrand = ingredients[i].brand;
      let productQuantity = ingredients[i].quantity;
      let productUnitPrice = ingredients[i].price;

      let listItem =
        `<li class="list-item">
          <div class="list-item--checkbox">
            <input type="checkbox" id="ingredient${counter}">
          </div>
          <div class="list-item--quantity">
            <input type="number" class="quantity--number" value="1">
          </div>
          <div class="list-item--details">
           <p class="list-item--product-name">${productName}</p>
           <p>${productBrand ? productBrand : ""}</p>
           <p>${productQuantity}</p>
          </div>
          <div class="list-item--cost">
            ${productUnitPrice}
          </div>
        </li>`;

      document.querySelector(".ingredients-list").insertAdjacentHTML('beforeend', listItem);

      counter += 1;
    }

    let purchaseFinish =
      `<p>Items: 1</p>
      <div class="purchase-finish--subtotal-container">
        <p>Subtotal</p>
        <p>6.38 ${currency}</p>
      </div>
      <div class="purchase-finish--shipping-cost-container">
        <p>Gastos de envío</p>
        <p>${shippingCost} ${currency}</p>
      </div>
      <div class="purchase-finish--total-container">
        <p class="purchase-finish--total-amount-title">Total</p>
        <p class="purchase-finish--total-amount-number">30.00 ${currency}</p>
      </div>
      <a class="purchase-finish--button" href="#">Comprar ingredientes: 9.95€</a>`;

    document.querySelector(".purchase-finish").insertAdjacentHTML('beforeend', purchaseFinish);


    // `Total amount: ${firstItemPrice + secondItemPrice}€`

    // <span class="brand">' + (ingredients[i].brand ? ingredients[i].brand : '')
    //           <p class="ingredient_brand">${ingredient.brand ? ingredient.brand : 'N/A'
    //          }</p>

    console.log(ingredients);
  });
