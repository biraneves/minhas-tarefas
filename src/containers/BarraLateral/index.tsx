import FiltroCard from '../../components/FiltroCard';
import { Aside, Campo, Filtros } from './styles';

const BarraLateral = () => (
  <Aside>
    <div>
      <Campo type="text" placeholder="Buscar" />
      <Filtros>
        <FiltroCard contador={3} legenda="pendente" />
        <FiltroCard contador={4} legenda="concluídas" />
        <FiltroCard contador={2} legenda="urgentes" />
        <FiltroCard contador={2} legenda="importantes" />
        <FiltroCard contador={3} legenda="normal" />
        <FiltroCard ativo contador={7} legenda="todas" />
      </Filtros>
    </div>
  </Aside>
);

export default BarraLateral;
