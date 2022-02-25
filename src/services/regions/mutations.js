
import {defaultIds} from './state'
export function setCountries(state, data) {
    state.countries = data
}

export function setStates(state, data) {
    state.states = data
}

export function setCities(state, data) {
    state.cities = data
}



// asigna los valores por defecto del estado selectedIds
export function resetSelectedIds(state) {
    state.selectedIds = defaultIds()
}