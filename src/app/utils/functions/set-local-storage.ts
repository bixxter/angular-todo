import { Todo } from 'src/app/models/Todo';
/**
 * Sets localStorage data
 * @param payload - storage information
 */
export default function (payload: { name: string; value: Todo[] }): void {
  localStorage.setItem(payload.name, JSON.stringify(payload.value));
}
