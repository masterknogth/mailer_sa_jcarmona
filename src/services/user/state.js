
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


export default {
    selectedUser:defaultUser(),
    users:[],
    success:false,
    idUser:{
        id: ''
    }
   
}
