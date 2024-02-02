import { useDispatch, useSelector } from 'react-redux';
import { Card, Contador, Label } from './styles';
import { alterarFiltro } from '../../store/reducers/filtro';
import { Prioridade, Status } from '../../utils/enums/Tarefa';
import { RootReducer } from '../../store';

export type Props = {
  legenda: string;
  criterio: 'prioridade' | 'status' | 'todas';
  valor?: Prioridade | Status;
};

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch();
  const { filtro, tarefas } = useSelector((state: RootReducer) => state);

  const estaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio;
    const mesmoValor = filtro.valor === valor;

    return mesmoCriterio && mesmoValor;
  };

  const ativo = estaAtivo();

  const contador: () => number = () => {
    if (criterio === 'todas') return tarefas.itens.length;
    if (criterio === 'prioridade')
      return tarefas.itens.filter((item) => item.prioridade === valor).length;
    if (criterio === 'status')
      return tarefas.itens.filter((item) => item.status === valor).length;

    return 0;
  };

  const filtrar = () => {
    dispatch(alterarFiltro({ criterio, valor }));
  };

  return (
    <Card ativo={ativo} onClick={filtrar}>
      <Contador>{contador()}</Contador>
      <Label>{legenda}</Label>
    </Card>
  );
};

export default FiltroCard;
