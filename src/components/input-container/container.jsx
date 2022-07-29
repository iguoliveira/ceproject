import styled from "styled-components";
import Input from "./input/input";
import Button from "./button/button";

export default function Container() {
  return (
    <InputBlock>
      <Input name="CEP" />
      <Input name="Rua" />
      <Input name="No" />
      <Input name="Bairro" />
      <Input name="Cidade" />
      <Input name="UF" />
      <Button name="Submit" />
    </InputBlock>
  );
}

const InputBlock = styled.div`
  background-color: white;
  padding: 30px 50px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;