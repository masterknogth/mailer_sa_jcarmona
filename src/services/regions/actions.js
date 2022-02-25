


import $http from './../../interceptors';

//Lista los paises
export async function getCountries({ commit}) {
    
    await $http.get('/countries')
    .then((response) => {
        commit('setCountries', response.data.data)
    })
    .catch((error) => {
        console.log(error.message + '-' + error.errors)
        
    })
}

//Lista los estados pertenecientes a un pais
export async function getStates({ commit, state}) {
    await $http.get(`/states/${state.selectedIds.country_id}`)
    .then((response) => {
        console.log(response.data.data)
        commit('setStates', response.data.data)
    })
    .catch((error) => {
        console.log(error.message + '-' + error.errors)
        
    })
}

//Lista las ciudades pertenciente a un estado
export async function getCities({commit, state}) {   
    await $http.get(`/cities/${state.selectedIds.state_id}`)
    .then((response) => {
        commit('setCities', response.data.data)
    })
    .catch((error) => {
        console.log(error.message + '-' + error.errors)
        
    })
}
