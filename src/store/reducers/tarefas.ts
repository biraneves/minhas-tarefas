import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Tarefa from '../../models/Tarefa';
import { Prioridade, Status } from '../../utils/enums/Tarefa';

type TarefasState = {
  itens: Tarefa[];
};

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      prioridade: Prioridade.NORMAL,
      status: Status.CONCLUIDA,
      descricao: 'Estudar JavaScript revendo o exercício do módulo 7.',
    },
    {
      id: 2,
      titulo: 'Estudar TypeScript',
      prioridade: Prioridade.NORMAL,
      status: Status.PENDENTE,
      descricao: 'Estudar material de apoio.',
    },
    {
      id: 3,
      titulo: 'Estudar BootStrap',
      prioridade: Prioridade.IMPORTANTE,
      status: Status.PENDENTE,
      descricao: 'Praticar a construção de uma landing page.',
    },
  ],
};

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (tarefa) => tarefa.id !== action.payload,
      );
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indiceTarefa = state.itens.findIndex(
        (task) => task.id === action.payload.id,
      );

      if (indiceTarefa >= 0) {
        state.itens[indiceTarefa] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaExiste = state.itens.find(
        (task) =>
          task.titulo.toLowerCase() == action.payload.titulo.toLowerCase(),
      );

      if (tarefaExiste) {
        alert('Já existe uma tarefa com esse nome');
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1];
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1,
        };
        state.itens.push(tarefaNova);
      }
    },
    alterarStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>,
    ) => {
      const indiceTarefa = state.itens.findIndex(
        (task) => task.id === action.payload.id,
      );

      if (indiceTarefa >= 0) {
        state.itens[indiceTarefa].status = action.payload.finalizado
          ? Status.CONCLUIDA
          : Status.PENDENTE;
      }
    },
  },
});

export const { remover, editar, cadastrar, alterarStatus } =
  tarefasSlice.actions;
export default tarefasSlice.reducer;
