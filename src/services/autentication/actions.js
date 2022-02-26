import $http from './../../interceptors';


export async function login({ commit, state}) {
 
    await $http.post('/login', state.ingreso)
    .then((response) => {
        localStorage.setItem('token', response.data.token)
        commit('setSelectedAuth', response.data)
        commit('setSuccess',false)
        
      
    })
    .catch((error) => {
        console.log(error.response.data.error)
        commit('setSuccess',true)
        setTimeout(() => {
            commit('setSuccess',false)
        },5000)
    })
}

export async function logout({ commit, state}) {
 
    await $http.get('/logout')
    .then((response) => {
        //Se reinicia el estado selectedAuth
        commit('resetSelectedAuth')
      
    })
    .catch((error) => {
        console.log(error.response.data.error)
        
    })
}