
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

export async function editUser({ commit, state}) {
 
    await $http.put('/update-user', state.selectedUser)
    .then((response) => {
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

export async function deleteUser({ commit, state}) {
    //console.log(state.idUser)
    await $http.delete(`/delete-user/${state.idUser}`)
    .then((response) => {
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

export async function getUsers({ commit, state}) {
 
    await $http.post('/users',state.filtro)
    .then((response) => {
        commit('setUsers', response.data.data)
        
    })
    .catch((error) => {
        console.log(error.response.data.error)
        
    })
}