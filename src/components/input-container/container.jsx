import styled from "styled-components";
import Input from "./input/input";
import Button from "./button/button";
import { useState } from "react";
import axios from "axios";

export default function Container() {
  const [cepData, setCep] = useState([]);
  const [cepField, setCepField] = useState("")


  const getApiData = () => {
    axios.get(`https://viacep.com.br/ws/${cepField}/json/`)
      .then(function (response) {
        setCep(response.data)
      })
      .catch(function(error){
        setCep("")
      })
  }

  const inputTextValue = (event) => {
    setCepField(event.target.value)
  }

  return (
    <InputBlock>
      <Input name="CEP" value={cepField} onchange={inputTextValue} focusout={getApiData} readonly={false} />
      <Input name="Rua" value={cepData.logradouro} />
      <Input name="Bairro" value={cepData.bairro} />
      <Input name="Cidade" value={cepData.localidade} />
      <Input name="UF" value={cepData.uf} />
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
  width: 30%;
`;