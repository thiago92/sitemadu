// Função para mostrar o dropdown de categorias do NavMenu

var dropdownMenu = document.getElementById('dropdownMenu');

function showDropdown() {
    dropdownMenu.classList.add('show');
}

function hideDropdown() {
    dropdownMenu.classList.remove('show');
}


//Botão no navbar no modo responsivo
document.getElementById('toggle-button').addEventListener('click', function() {
    var icon = document.getElementById('toggle-icon');
  
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

//navMenu fixada do topo
window.addEventListener("scroll", function() {
  var navMenu = document.querySelector(".navMenu");
  var navTopo = document.querySelector(".navTopo");

  if (window.scrollY > 0) {
      navMenu.classList.add("fixed-top");
      navTopo.style.marginBottom = navMenu.offsetHeight + "px";
  } else {
      navMenu.classList.remove("fixed-top");
      navTopo.style.marginBottom = "0";
    }
});

//Página - Produtos - range
$(function() {
  var minPrice = 1000;
  var maxPrice = 2200;

  $("#price-slider").slider({
    range: true,
    min: minPrice,
    max: maxPrice,
    values: [minPrice, maxPrice],
    slide: function(event, ui) {
      $("#price-min").val("R$ " + ui.values[0]);
      $("#price-max").val("R$ " + ui.values[1]);
    }
  });

  $("#price-min").val("R$ " + minPrice);
  $("#price-max").val("R$ " + maxPrice);
});

const cartButton = document.getElementById("cart-button");
const cartWindow = document.getElementById("cart-window");

// Adiciona evento de clique ao botão de carrinho
cartButton.addEventListener("click", (event) => {
  event.preventDefault(); // Impede que o comportamento padrão do link ocorra

  // Verifica se a janela do carrinho está visível
  const isVisible = cartWindow.style.display === "block";

  // Alterna a visibilidade da janela do carrinho
  if (isVisible) {
    cartWindow.style.display = "none";
  } else {
    cartWindow.style.display = "block";
  }
});






