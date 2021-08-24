import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Vencer a Thanos'),
  new Todo('Robar escudo del capitan america')
];

const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, {texto}) => [...state, new Todo(texto)] ),
  on(actions.toggle, (state, {id}) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.borrar, (state, { id }) => state.filter( todo => todo.id !== id )),
  on(actions.toggleAll, (state, { completado }) => {
    return state.map(todo => {
      return {
        ...todo,
        completado
      };
    });
  }),
  on(actions.limpiarCompletados, state => state.filter(todo => !todo.completado) )
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
