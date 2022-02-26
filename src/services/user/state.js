
export const defaultUser = () => {
    return {
        rol:2,
        nombre: '',
        telefono:'',
        cedula:'',
        email:'',
        password:'',
        fecha_nacimiento:'',
        codigo_ciudad:'',
        city_id:'',
    }
}

export const defaultFiltro = () => {
    return {
        text:"",
        perPage: 10,
        page: 1,
    }
}

export default {
    selectedUser:defaultUser(),
    users:[],
    success:false,
    idUser:{
        id: ''
    },
    filtro:defaultFiltro()
   
   
}
