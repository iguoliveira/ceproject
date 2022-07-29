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
  width: 100%;
  position: absolute;
  z-index: 0;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DOV = styled.div`
  color: white;
`