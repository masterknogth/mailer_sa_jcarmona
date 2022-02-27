
import {defaultUser, defaultFiltro} from './state'

// asigna los valores por defecto del estado selectedUser
export function resetSelectedUser(state) {
    state.selectedUser = defaultUser()
}

export function setUsers(state, data) {
    state.users = data
}

export function setSuccess(state,data) {
    state.success = data
}

export function setUserEdit(state, data) {

    state.selectedUser = data

}

//Se obtiene el id de un usuario
export function setIdUser(state, data) {
    state.idUser = data
}

//Cambia de pagina
export function setPage(state, page) {   
    state.filtro.page = page
}

//cambia cuantos items se vera por pagina
export function setPerPage(state, perPage) {
    state.filtro.page = 1
    state.filtro.perPage = perPage
}

//Pone por defecto los valores del estado filtro
export function resetFiltro(state, page) {   
    state.filtro = defaultFiltro()
}


export function firtPage(state) {   
    state.filtro.page = 1
}
