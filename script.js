function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light"); // Correção aqui

  // Pegar a tag img
  const img = document.querySelector("#profile img");

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se estiver em light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/vivi-light.png");
    img.setAttribute("alt", "Foto de Vivi Castelo light");
  } else {
    // Se estiver em dark mode, manter a imagem normal
    img.setAttribute("src", "./assets/vivi.png");
    img.setAttribute("alt", "Foto de Vivi Castelo");
  }
}
