document.addEventListener("DOMContentLoaded", function() {
  // Seu código aqui...

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

//Página - Produtos - range - responsivo
$(function() {
  var minPriceResponsivo = 1000;
  var maxPriceResponsivo = 2200;

  $("#price-slider-responsivo").slider({
    range: true,
    min: minPriceResponsivo,
    max: maxPriceResponsivo,
    values: [minPriceResponsivo, maxPriceResponsivo],
    slide: function(event, ui) {
      $("#price-min-reponsivo").val("R$ " + ui.values[0]);
      $("#price-max-responsivo").val("R$ " + ui.values[1]);
    }
  });

  $("#price-min-reponsivo").val("R$ " + minPriceResponsivo);
  $("#price-max-responsivo").val("R$ " + maxPriceResponsivo);
});

//Carrinho
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

//Carrinho responsivo
const cartButtonResponsivo = document.getElementById("cart-button-responsivo");
const cartWindowResponsivo = document.getElementById("cart-window-responsivo");

// Adiciona evento de clique ao botão de carrinho
cartButtonResponsivo.addEventListener("click", (event) => {
  event.preventDefault(); // Impede que o comportamento padrão do link ocorra

  // Verifica se a janela do carrinho está visível
  const isVisible = cartWindowResponsivo.style.display === "block";

  // Alterna a visibilidade da janela do carrinho
  if (isVisible) {
    cartWindowResponsivo.style.display = "none";
  } else {
    cartWindowResponsivo.style.display = "block";
  }
});

// Obtém os elementos HTML
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const valueInput = document.getElementById("value");

// Define o valor inicial
let value = 1;
valueInput.value = value;

// Adiciona evento de clique ao botão de decremento
decrementButton.addEventListener("click", () => {
  if (value > 1) {
    value--;
    valueInput.value = value;
  }
});

// Adiciona evento de clique ao botão de incremento
incrementButton.addEventListener("click", () => {
  value++;
  valueInput.value = value;
});

});

//Mostrar secaoFiltroCategoria

function toggleFiltro() {
  var secaoFiltro = document.getElementById("secaoFiltroCategoria");
  var botaoMostrar = document.getElementById("botaoMostrar");

  if (secaoFiltro.style.display === "none") {
    secaoFiltro.style.display = "block";
    botaoMostrar.innerText = "Ocultar filtro";
  } else {
    secaoFiltro.style.display = "none";
    botaoMostrar.innerText = "Mostrar filtro categorias";
  }
}

// Obtém a posição do cursor em relação à imagem
function getCursorPosition(image, event) {
  const rect = image.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return { x, y };
}

// Função para controlar o efeito de zoom
function zoomImage(event) {
  var zoomContainer = event.currentTarget;
  var zoomImage = zoomContainer.querySelector('.zoom-image');

  // Coordenadas do cursor do mouse relativas à imagem
  var mouseX = event.pageX - zoomContainer.offsetLeft;
  var mouseY = event.pageY - zoomContainer.offsetTop;

  // Tamanho da imagem
  var imageWidth = zoomImage.width;
  var imageHeight = zoomImage.height;

  // Tamanho do contêiner de zoom
  var containerWidth = zoomContainer.offsetWidth;
  var containerHeight = zoomContainer.offsetHeight;

  // Proporção entre o tamanho real da imagem e o tamanho do contêiner de zoom
  var zoomFactorX = imageWidth / containerWidth;
  var zoomFactorY = imageHeight / containerHeight;

  // Posição do zoom na imagem
  var zoomX = mouseX * zoomFactorX;
  var zoomY = mouseY * zoomFactorY;

  // Atualiza a posição do zoom na imagem
  zoomImage.style.transformOrigin = zoomX + 'px ' + zoomY + 'px';
}

// Obtém todos os contêineres de zoom
var zoomContainers = document.querySelectorAll('.zoom-container');

// Adiciona o evento de mousemove a cada contêiner de zoom
zoomContainers.forEach(function (container) {
  container.addEventListener('mousemove', zoomImage);
});














