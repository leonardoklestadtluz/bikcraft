// CONFIG DOS SLIDES
if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote", // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
    pauseOnHover: true, // pausa a transição automática
  });

  new SimpleSlide({
    slide: "portfolio", // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
    nav: true, // se deve ou não mostrar a navegação
  });
}

// ANIMAÇÃO DA PÁGINA INDEX
if (SimpleAnime) {
  new SimpleAnime();
}
