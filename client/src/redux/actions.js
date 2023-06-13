import axios from "axios";

export const getDogs = () => {
   try { 
      return async (dispatch)=>{
         const {data} = await axios.get(`http://localhost:3001/dogs`)
         dispatch({type: 'GET_DOGS', payload: data});
      }
   } catch (error) {
      console.log(error);
   }
}

export const getDogById = (id) => {
   try {
      return async (dispatch)=>{
         const {data} = await axios.get(`http://localhost:3001/dogs/${id}`)
         dispatch({type: 'GET_BY_ID', payload: data})
      }
   } catch (error) {
      
   }
}

export const getDogByName = (dispatch) => {
   try {
      return async () => {
         const {data} = await axios.get('http://localhost:3001/dogs/?name')
         return dispatch({type: 'GET_BY_NAME', payload: data})
      }
   } catch (error) {
      console.log(error);
   }
}

export const getTemperaments = () => {
   try {
      return async (dispatch)=>{
         const {data} = await axios.get('http://localhost:3001/temperaments');
         return dispatch({type: 'GET_TEMPERAMENTS', payload: data});
      }
   } catch (error) {
      console.log(error);
   }
}

export const postDogs = (userData) => {
   try {
      return async (dispatch)=>{
         const {data} = await axios.post('http://localhost:3001/dogs', userData);
         return dispatch({type: 'POST_DOGS', payload: data})
      }
   } catch (error) {
      console.log(error);
   }
}

// export const filterCards = (gender) => {
//     return {type: 'FILTER', payload: gender}
// }

// export const orderCards = (orden) => {
//     return {type: 'ORDER', payload: orden}
// }
// export const showAllCards = (nofilter) => {
//    return {type: 'SHOW_ALL', payload: nofilter}
// }