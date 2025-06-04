let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("rgb(174,186,248)");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O Rei Leão";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Vingadores: Ultimato";          
        } else{
         return "La La Land: Cantando Estações";
        }
      } else {
        if (gostaDeFantasia) {
          return "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa";
        } else {
          return "Shrek";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Harry Potter e a Câmara Secreta";
    } else {
      return "Crepúsculo: Amanhecer";
    }
  }
}
