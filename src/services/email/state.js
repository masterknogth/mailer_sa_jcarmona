export const defaultEmail = () => {
    return {
        destino:'',
        asunto: '',
        contenido: '',
        estado: 'No enviado'
    }
}

export default {
    selectedEmail:defaultEmail(),
    emails:[],
    success:false
}