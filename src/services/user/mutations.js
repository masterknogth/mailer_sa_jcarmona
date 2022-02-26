
import {defaultUser} from './state'

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