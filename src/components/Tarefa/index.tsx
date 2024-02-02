import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Card,
  Titulo,
  Tag,
  Descricao,
  BarraAcoes,
  BotaoCancelarERemover,
} from './styles';
import { remover, editar, alterarStatus } from '../../store/reducers/tarefas';
import TarefaClass from '../../models/Tarefa';
import { Botao, BotaoSalvar } from '../../styles';
import { Status } from '../../utils/enums/Tarefa';

type Props = TarefaClass;

const Tarefa = ({
  id,
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false);
  const [descricao, setDescricao] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (descricaoOriginal.length > 0) setDescricao(descricaoOriginal);
  }, [descricaoOriginal]);

  const cancelarEdicao: () => void = () => {
    setEstaEditando(false);
    setDescricao(descricaoOriginal);
  };

  const alteraStatusTarefa = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(alterarStatus({ id, finalizado: e.target.checked }));
  };

  return (
    <Card>
      <label htmlFor={titulo}>
        <input
          onChange={alteraStatusTarefa}
          type="checkbox"
          id={titulo}
          checked={status === Status.CONCLUIDA}
        />
        <Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </Titulo>
      </label>
      <Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </Tag>
      <Tag parametro="status" status={status}>
        {status}
      </Tag>
      <Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    titulo,
                    prioridade,
                    status,
                    descricao,
                  }),
                );
                setEstaEditando(false);
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelarERemover onClick={cancelarEdicao}>
              Cancelar
            </BotaoCancelarERemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoCancelarERemover onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoCancelarERemover>
          </>
        )}
      </BarraAcoes>
    </Card>
  );
};

export default Tarefa;
