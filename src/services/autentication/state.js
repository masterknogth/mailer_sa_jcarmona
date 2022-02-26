
export const defaultAuth = () => {
    return {
        rol:'',
        loged: false
    }
}

export default {
    selectedAuth:defaultAuth(),
    success:false,

    ingreso: {
        email: "",
        password: ""
    },
}
