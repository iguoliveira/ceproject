import styled from "styled-components";
import { Navbar } from "../components/navbar/navbar";
import { Container } from "../components/input-container/container";
import { Footer } from "../components/footer/Footer"

export const Mainpage = () => {  
  return (
    <>
      <Navbar />
      <ContainerBlock>
        <Container />
        <Footer />
      </ContainerBlock>
    </>
  );
}

const ContainerBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;