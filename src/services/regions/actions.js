


import $http from './../../interceptors';

//Lista los paises
export async function getCountries({ commit}) {
    
    await $http.get('/countries')
    .then((response) => {
        commit('setCountries', response.data.data)
    })
    .catch((error) => {
        console.log(error.response.data.error)
        
    })
}

//Lista los estados pertenecientes a un pais
export async function getStates({ commit, state}, id) {
    await $http.get(`/states/${id}`)
    .then((response) => {
        commit('setStates', response.data.data)
    })
    .catch((error) => {
        console.log(error.response.data.error)      
    })
}

//Lista las ciudades pertenciente a un estado
export async function getCities({commit, state}, id) {      
    await $http.get(`/cities/${id}`)
    .then((response) => {
        commit('setCities', response.data.data)
    })
    .catch((error) => {
        console.log(error.response.data.error)       
    })
}
