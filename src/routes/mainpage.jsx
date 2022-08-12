import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import Container from "../components/input-container/container";

export default function Mainpage() {  
  return (
    <>
      <Navbar />
      <ContainerBlock>
        <Container />
      </ContainerBlock>
    </>
  );
}

const ContainerBlock = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const DOV = styled.div`
  color: white;
`