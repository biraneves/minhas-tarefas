import BotaoAdicionar from '../../components/BotaoAdicionar';
import BarraLateral from '../../containers/BarraLateral';
import ListaTarefas from '../../containers/ListaTarefas';

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaTarefas />
    <BotaoAdicionar />
  </>
);

export default Home;
