import styled, { createGlobalStyle } from 'styled-components';
import vars from './vars';

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style-type: none;
  }

  body {

  }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 224px auto;
`;

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  background-color: #f8f8f8;
`;

export const Titulo = styled.h2`
  display: block;
  font-size: 18px;
  font-weight: 700;
  margin: 40px 0;
`;

export const Campo = styled.input`
  border-radius: 8px;
  border: solid 1px #666;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666;
  width: 100%;
  outline: none;
`;

export const Botao = styled.button`
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`;

export const BotaoSalvar = styled(Botao)`
  background-color: ${vars.verde};
`;

export default EstiloGlobal;
