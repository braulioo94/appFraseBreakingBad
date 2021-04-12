
import React,{useState, useEffect} from 'react';
import styled from "@emotion/styled";
import Frase from "./componentes/Frase";

const Boton = styled.button`
background:-webkit-linear-gradient(top left, #007d35 0%, #007d35  40%, #0f574e 100%);
background-size: 300px ;
font-family: Arial, Helvetica, sans-serif ;
color: black;
margin-top: 2rem;
padding: 1rem 3rem ;
font-size: 2rem ;
border: 2px solid black;
transition: baackground-size .8s ease;

  :hover{
    cursor:pointer;
    background-size:480px;
  }
`;

const Contenedor = styled.div`
  display:flex ;
  align-items:center ;
  padding-top: 17rem ;
  flex-direction:column ;

`;





function App() {

  //State de frase
  const [frase, guardarFrase] = useState({}) ;

  const consultarAPI =  async () => {
    const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")

    const frase = await api.json()

    guardarFrase(frase[0])
  };
  
  //cargar una frase
  useEffect(() => {
    consultarAPI()
    
  }, [])


  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton 
      onClick={consultarAPI}
      >
        Obtener frase
      </Boton>
    </Contenedor>

  );
}

export default App;
