import $http from './../../interceptors';


export async function login({ commit, state}) {
 
    await $http.post('/login', state.ingreso)
    .then((response) => {
        localStorage.setItem('token', response.data.token)
        commit('setSelectedAuth', response.data)
      
    })
    .catch((error) => {
        console.log(error.error)
        
    })
}

export async function logout({ commit, state}) {
 
    await $http.get('/logout')
    .then((response) => {
        //Se reinicia el estado selectedAuth
        commit('resetSelectedAuth')
      
    })
    .catch((error) => {
        console.log(error.error)
        
    })
}