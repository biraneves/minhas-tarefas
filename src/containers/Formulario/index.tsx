import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles';
import { Form, Opcoes, Opcao } from './styles';
import { Prioridade, Status } from '../../utils/enums/Tarefa';
import { cadastrar } from '../../store/reducers/tarefas';

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState(Prioridade.NORMAL);

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault();

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        status: Status.PENDENTE,
        descricao,
      }),
    );
    navigate('/');
  };

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(Prioridade).map((item) => (
            <Opcao key={item}>
              <input
                onChange={(e) => setPrioridade(e.target.value as Prioridade)}
                name="prioridade"
                type="radio"
                id={item}
                value={item}
                defaultChecked={item === prioridade}
              />
              <label htmlFor={item}>{item}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  );
};

export default Formulario;
