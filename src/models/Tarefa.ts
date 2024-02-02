import { Prioridade, Status } from '../utils/enums/Tarefa';

class Tarefa {
  id: number;
  titulo: string;
  prioridade: Prioridade;
  status: Status;
  descricao: string;

  constructor(
    id: number,
    titulo: string,
    prioridade: Prioridade,
    status: Status,
    descricao: string,
  ) {
    this.id = id;
    this.titulo = titulo;
    this.prioridade = prioridade;
    this.status = status;
    this.descricao = descricao;
  }
}

export default Tarefa;
