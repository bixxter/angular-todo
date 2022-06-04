import { Todo } from 'src/app/models/Todo';

/**
 * Gets localStorage data
 * @param {string} name - storage name
 */
export default function (name: string): Todo[] {
  return JSON.parse(localStorage.getItem(name) || '');
}
