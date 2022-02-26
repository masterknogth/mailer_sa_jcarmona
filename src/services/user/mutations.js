
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

export function setIdUser(state, data) {
    state.idUser = data
}


export function setPage(state, page) {   
    state.filtro.page = page
}

export function resetFiltro(state, page) {   
    state.filtro = defaultFiltro()
}

export function firtPage(state) {   
    state.filtro.page = 1
}
