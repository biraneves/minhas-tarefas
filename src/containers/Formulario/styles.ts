import styled from 'styled-components';

export const Form = styled.form`
  max-width: 548px;
  width: 100%;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`;

export const Opcoes = styled.div`
  margin-bottom: 32px;
  font-size: 14px;
  font-weight: 700;
  color: #666;

  p {
    margin-bottom: 6px;
  }
`;

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;

  input {
    margin-right: 6px;
  }

  label {
    margin-right: 12px;
  }
`;
