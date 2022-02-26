

import {defaultEmail} from './state'

// asigna los valores por defecto del estado selectedEmail
export function resetSelectedEmail(state) {
    state.selectedEmail = defaultEmail()
}

export function resetEmails(state) {
    state.emails = []
}

export function setEmails(state,data) {
    state.emails = data
}

export function setSuccess(state,data) {
    state.success = data
}