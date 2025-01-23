import TodoType from '../types/TodoType';

export function getHighestId(arr: TodoType[]) {
    var _arr = arr.map(obj => obj['id']);
    if(_arr.length === 0 ) {
        return 0;
    }
    return Math.max(..._arr);
}