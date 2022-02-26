
import $http from './../../interceptors';

//Se registra usuario
export async function newUser({ commit, state}) {
 
    await $http.post('/signup', state.selectedUser)
    .then((response) => {
        commit('resetSelectedUser');
        commit('setSuccess',true)
        setTimeout(() => {
            commit('setSuccess',false)
        },5000)
    })
    .catch((error) => {
        console.log(error.response.data.error)
        commit('setSuccess',false)
        
    })
}

export async function getUsers({ commit}) {
 
    await $http.get('/users')
    .then((response) => {
        commit('setUsers', response.data.data)
        
    })
    .catch((error) => {
        console.log(error.response.data.error)
        
    })
}