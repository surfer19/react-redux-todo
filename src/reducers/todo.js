//initialState.fuelSavings
// export const todos = (state = [], action) => {
export default function todoSavingsReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
        default:
        return state;
    }
}