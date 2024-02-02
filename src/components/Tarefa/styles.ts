import styled from 'styled-components';
import vars from '../../styles/vars';
import { Prioridade, Status } from '../../utils/enums/Tarefa';
import { Botao } from '../../styles';

type TagProps = {
  prioridade?: Prioridade;
  status?: Status;
  parametro: 'status' | 'prioridade';
};

const getCorDeFundo: (props: TagProps) => string = (props) => {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === Prioridade.URGENTE) return vars.vermelho;
    if (props.prioridade === Prioridade.IMPORTANTE) return vars.amareloOuro;
  } else {
    if (props.status === Status.PENDENTE) return vars.amarelo;
    if (props.status === Status.CONCLUIDA) return vars.verde;
  }

  return '#ccc';
};

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  input {
    margin-bottom: 16px;
    margin-right: 12px;
  }

  label {
    display: flex;
    align-items: center;
  }
`;

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 16px;
`;

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-weight: 700;
  font-size: 10px;
  color: #fff;
  background-color: ${(props) => getCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`;

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`;

export const BarraAcoes = styled.div`
  border-top: solid 1px rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`;

export const BotaoCancelarERemover = styled(Botao)`
  background-color: ${vars.vermelho};
`;
