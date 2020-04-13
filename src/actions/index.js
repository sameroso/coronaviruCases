import corona from '../apis/corona';

 export const fetchCountries= () => (dispatch) =>{
    corona.get("/summary")
    .then(response => dispatch({
        type:'FETCH_COUNTRIES',
        payload: response.data
    }))
    .catch(error => console.log('error', error));
};

