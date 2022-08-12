import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import Container from "../components/input-container/container";

import React, { useEffect, useState } from "react";

export default function Mainpage() {
  const [cepData, setCep] = useState([]);

  useEffect(() => {
    fetch("https://viacep.com.br/ws/13196856/json/")
      .then((response) => response.json())
      .then((data) => {
        setCep(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <ContainerBlock>
        <Container />
        <DOV>{cepData.logradouro}</DOV>
      </ContainerBlock>
    </>
  );
}

const ContainerBlock = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const DOV = styled.div`
  color: white;
`