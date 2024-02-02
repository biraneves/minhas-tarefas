import styled from 'styled-components';

type Props = {
  ativo?: boolean;
};

export const Card = styled.div<Props>`
  padding: 8px;
  border: solid 1px ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`;

export const Contador = styled.div`
  display: block;
  font-weight: bold;
  font-size: 24px;
`;

export const Label = styled.div`
  font-size: 14px;
`;
