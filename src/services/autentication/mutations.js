
import {defaultAuth} from './state'



// asigna los valores por defecto del estado selectedAuth
export function resetSelectedAuth(state) {
    state.selectedAuth = defaultAuth()
}


export function setSelectedAuth(state, data) {
    state.selectedAuth.rol = data.rol // asigna rol de usuario
    state.selectedAuth.loged = data.loged // si esta logeado muestra true
}
