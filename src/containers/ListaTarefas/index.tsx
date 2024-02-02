import { useSelector } from 'react-redux';

import Tarefa from '../../components/Tarefa';
import { MainContainer, Titulo } from '../../styles';
import { RootReducer } from '../../store';

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas);
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro,
  );

  const filtraTarefas = () => {
    let tarefasFiltradas = itens;

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0,
      );
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor,
        );
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor,
        );
      }
      return tarefasFiltradas;
    } else {
      return itens;
    }
  };

  const exibeResultadoFiltragem = (quantidade: number) => {
    const textoSingularPlural =
      quantidade > 1 ? 'tarefas marcadas' : 'tarefa marcada';
    const inicioMensagem = `${quantidade} ${textoSingularPlural} com`;
    const fimMensagem = `${
      termo !== undefined && termo?.length > 0 ? ' e "' + termo + '"' : ''
    }`;

    if (criterio === 'todas') {
      return `${inicioMensagem}o "todas"${fimMensagem}`;
    }

    return `${inicioMensagem} "${criterio} = ${valor}" ${fimMensagem}`;
  };

  const tarefas = filtraTarefas();
  const mensagem = exibeResultadoFiltragem(tarefas.length);

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((task) => (
          <li key={task.id}>
            <Tarefa
              id={task.id}
              titulo={task.titulo}
              prioridade={task.prioridade}
              status={task.status}
              descricao={task.descricao}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default ListaTarefas;
