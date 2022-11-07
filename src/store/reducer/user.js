const initialState ={
    users:[]
}

const useReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.user],
            }

            case "REMOVE_USER":
            return{
                users:[],
            }
            
        default:
            return state;

    }

}
export default useReducer