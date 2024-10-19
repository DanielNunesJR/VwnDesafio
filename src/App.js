import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
}

body{
background-image: url("https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/Imagem%20palacio.png")}

`;
const Titulo = styled.h1`
  color: white;
`;
export default function App() {
  const [lampada, setLampada] = useState(false);
  const trocarLapmada = () => {
    setLampada(!lampada);
  };

  return (
    <main>
      <GlobalStyle />
      <Titulo>Liberte a magia da programação com a lâmpada de Aladim</Titulo>
      <img
        src={
          lampada
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        }
        alt="Lâmpada"
        onClick={trocarLapmada}
      />
    </main>
  );
}
