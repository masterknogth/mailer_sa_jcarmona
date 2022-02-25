
export const defaultAuth = () => {
    return {
        rol:'',
        loged: false
    }
}

export default {
    selectedAuth:defaultAuth(),

    ingreso: {
        email: "",
        password: ""
    },
}
