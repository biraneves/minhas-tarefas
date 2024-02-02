import styled from 'styled-components';
import { Props } from './index';

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>;

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 8px;
  border: solid 1px ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
`;

export const Contador = styled.div`
  display: block;
  font-weight: bold;
  font-size: 24px;
`;

export const Label = styled.div`
  font-size: 14px;
`;
