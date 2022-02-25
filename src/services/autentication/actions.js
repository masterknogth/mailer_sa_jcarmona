import $http from './../../interceptors';


export async function login({ commit, state }) {
    
    await $http.post('/login', state.ingreso)
    .then((response) => {
        //  commit('login', response.data)
        localStorage.setItem(response.data.token)
    
    })
    .catch((error) => {
        console.log(error.message + '-' + error.errors)
        
    })
}