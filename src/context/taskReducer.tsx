import { ITask } from '../../public/taskInterface';

export const taskReducer = (state: Array<ITask>, action: { type: String, payload: ITask | any }) => {
        switch (action.type) {
            case 'addTask':
                return [...state, action.payload];
            case 'deleteTask':
                return [...state.filter(({ id }) => id !== action.payload)];
            case 'deleteAll':
                return [];
            case 'editTask':
                console.log('editTask')
                return [...state.map(currTask => {
                    return currTask === action.payload[0] ? action.payload[1] : action.payload[0]
                })];
            case 'updateTasks':
                console.log('updateTasks: ' + JSON.stringify(action.payload));
                return [...action.payload];
            default:
                return [];
        }
}