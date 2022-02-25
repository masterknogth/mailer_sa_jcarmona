
import $http from './../../interceptors';

//Se registra usuario
export async function newUser({ commit, state}) {
 
    await $http.post('/signup', state.selectedUser)
    .then((response) => {
        commit('resetSelectedUser');
    })
    .catch((error) => {
        console.log(error.message + '-' + error.errors)
        
    })
}

export async function getUsers({ commit}) {
 
    await $http.get('/users')
    .then((response) => {
        commit('setUsers', response.data.data)
        
    })
    .catch((error) => {
        console.log(error.error)
        
    })
}