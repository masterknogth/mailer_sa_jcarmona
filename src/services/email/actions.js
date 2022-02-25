import $http from './../../interceptors';

//Se registra email
export async function newEmail({ commit, state}) {
 
    await $http.post('/emails', state.selectedEmail)
    .then((response) => {
        commit('resetSelectedEmail')
    })
    .catch((error) => {
        console.log(error.error)
        
    })
}

export async function getEmails({ commit}) {
 
    commit('resetEmails')
    await $http.get('/emails')
    .then((response) => {
        commit('setEmails', response.data.data)
        console.log(response.data.data)
    })
    .catch((error) => {
        console.log(error.error)
        
    })
}