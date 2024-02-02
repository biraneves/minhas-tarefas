import { Card, Titulo, Tag, Descricao, BarraAcoes, Botao } from './styles';

const Tarefa = () => (
  <Card>
    <Titulo>Nome da tarefa</Titulo>
    <Tag>importante</Tag>
    <Tag>pendente</Tag>
    <Descricao />
    <BarraAcoes>
      <Botao>Editar</Botao>
      <Botao>Remover</Botao>
    </BarraAcoes>
  </Card>
);

export default Tarefa;
