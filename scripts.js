var cartItems = []; // Array para armazenar os itens do carrinho

function addToCart(productName, price) {
  var item = {
    name: productName,
    price: price,
  };

  cartItems.push(item);
  updateCart(); // Atualizar o carrinho
}

function updateCart() {
  var cartItemsContainer = document.getElementById("cart-items");
  var cartTotalElement = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = ""; // Limpar o conteúdo atual do carrinho

  var total = 0;

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    var cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");
    cartItemElement.innerHTML =
      "<h4>" + item.name + "</h4><p>R$ " + item.price.toFixed(2) + "</p>";
    cartItemsContainer.appendChild(cartItemElement);

    total += item.price;
  }

  cartTotalElement.textContent = "R$ " + total.toFixed(2);
}

function checkout() {
  // Lógica para finalizar a compra
  // Aqui você pode adicionar o processamento de pagamento ou qualquer outra ação necessária
  alert("Compra finalizada! Obrigado por comprar conosco.");
}
