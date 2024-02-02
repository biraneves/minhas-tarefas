import styled from 'styled-components';

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
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

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 16px;
`;
