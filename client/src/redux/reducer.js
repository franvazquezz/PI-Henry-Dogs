const initialState = {
    allDogs: [],
    allTemperaments: [],
    details: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_DOGS':
            return {
                ...state, 
                allDogs: action.payload
            }
        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                allTemperaments: action.payload}
        case 'POST_DOGS':
            return {allDogs: [...allDogs, action.payload]}
        case 'GET_BY_NAME':
            return {
                ...state,
                details: action.payload
            }
        case 'GET_BY_ID':
            return{
                ...state,
                details: action.payload
            }
        case "REMOVE_DETAILS":
            return{
                ...state,
                details: []
            }
        // case 'FILTER':
        //     const allDogsFiltered = state.allDogs.filter((char)=> char.gender === action.payload)
        //     return {...state, allDogs: allDogsFiltered}
        // case 'ORDER':
        //     const allDogsOrdered = [...state.allDogs]
        //     return { ...state, allDogs: action.payload === "A" ? allDogsOrdered.sort((a, b) => a.id - b.id) :  allDogsOrdered.sort((a, b) => b.id - a.id)}
        default:
            return  state
    }
}
 export default reducer