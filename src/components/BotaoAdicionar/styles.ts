import styled from 'styled-components';
import { Link } from 'react-router-dom';
import vars from '../../styles/vars';

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${vars.verde};
  color: #fff;
  font-size: 40px;
  text-decoration: none;
`;
