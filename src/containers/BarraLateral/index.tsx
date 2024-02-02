import { useDispatch, useSelector } from 'react-redux';
import FiltroCard from '../../components/FiltroCard';
import { Aside, Filtros } from './styles';
import { Botao, Campo } from '../../styles';
import { RootReducer } from '../../store';
import { alterarTermo } from '../../store/reducers/filtro';
import { Prioridade, Status } from '../../utils/enums/Tarefa';
import { useNavigate } from 'react-router-dom';

type Props = {
  mostrarFiltros?: boolean;
};

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { termo } = useSelector((state: RootReducer) => state.filtro);

  const voltarListaTarefas = () => {
    navigate('/');
  };

  return (
    <Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alterarTermo(e.target.value))}
            />
            <Filtros>
              <FiltroCard
                valor={Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCard
                valor={Status.CONCLUIDA}
                criterio="status"
                legenda="concluídas"
              />
              <FiltroCard
                valor={Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
              />
              <FiltroCard
                valor={Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
              />
              <FiltroCard
                valor={Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normais"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </Filtros>
          </>
        ) : (
          <Botao onClick={voltarListaTarefas}>Voltar à lista de tarefas</Botao>
        )}
      </div>
    </Aside>
  );
};

export default BarraLateral;
